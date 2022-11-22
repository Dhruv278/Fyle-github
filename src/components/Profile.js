import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { Repos } from './repos';
import { UpperProfile } from './UpperProfile';
import PaginationBar from './PaginationBar';
const Profile = () => {
    
    const [loading,SetLoading]=useState(false);
    const [profile,setProfile]=useState({});
    const [repo,setRepo]=useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const [repoPerPage,setRepoPerPage]=useState(10);
    
   
    const [nameofperson,setName]=useState("")
    // const {name}=useParams();
    const name=window.location.href.split('/')[window.location.href.split('/').length-1];
    useEffect(()=>{
      const factData=async()=>{
          setName(name)
          console.log(name)
          let arr=[]
          SetLoading(true);
          try{
            const profile=await axios.get(`https://api.github.com/users/${name}`);
            setProfile(profile.data);
            for(let i=1;i<=Math.ceil(profile.data.public_repos/30);i++){
             
              const res=await axios.get(`https://api.github.com/users/${name}/repos?page=${i}&sort=created:asc`); 
              arr=[...arr,...res.data]

              
            }
            setRepo(arr)

            SetLoading(false);
          
          }catch(err){
            alert("No user found,please go back enter username again")
            
          }

        }
        factData();
    },[])

    const indexOfLastPage=currentPage*repoPerPage;
    const indexOfFirstPage=indexOfLastPage-repoPerPage;
    const currentRepos=repo.slice(indexOfFirstPage,indexOfLastPage);


    const paginate=(pageNumber)=>setCurrentPage(pageNumber)

  return (
    <div className='container mainContainer'>
        <UpperProfile profile={profile} loading={loading} />
        <Repos repos={currentRepos} loading={loading}/>
        <PaginationBar loading={loading} repoPerPage={repoPerPage} totalRepo={repo.length} paginate={paginate}  setPage={currentPage}/>
    </div>
    
  )
}

export default Profile