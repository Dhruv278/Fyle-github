import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Repos } from './repos';
import { UpperProfile } from './UpperProfile';
import PaginationBar from './PaginationBar';
const Profile = () => {

  const [profileLoading, setProfileLoading] = useState(false);
  const[repoLoading,setRepoLoading]=useState(false);
  const [profile, setProfile] = useState({});
  const [repo, setRepo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [repoPerPage, setRepoPerPage] = useState(10);
  const [totalRepo,setTotalRepo]=useState(10);

  const [nameofperson, setName] = useState("")
  // const {name}=useParams();
  const name = window.location.href.split('/')[window.location.href.split('/').length - 1];
  useEffect(() => {
    const factData = async () => {
      setName(name)
     
      let arr = []
      setProfileLoading(true);
      setRepoLoading(true);
      try {
        const profile = await axios.get(`https://api.github.com/users/${name}`);
        setProfile(profile.data);
        const res = await axios.get(`https://api.github.com/users/${name}/repos?page=1&sort=created:asc&per_page=10`);

       setTotalRepo(profile.data.public_repos)

        setRepo(res.data)

        setProfileLoading(false);
        setRepoLoading(false)

      } catch (err) {
        alert("No user found,please go back enter username again")

      }

    }
    factData();
  }, [])

 

  const paginate = async(pageNumber) =>{ 
    setRepoLoading(true);
    setCurrentPage(pageNumber)
    try {
      
      const res = await axios.get(`https://api.github.com/users/${name}/repos?page=${pageNumber}&sort=created:asc&per_page=10`);


      setRepo(res.data)

      setRepoLoading(false)

    } catch (err) {
      alert("No user found,please go back enter username again")

    }
  }

  return (
    <div className='container mainContainer'>
      <UpperProfile profile={profile} loading={profileLoading} />
      <Repos repos={repo} loading={repoLoading} />
      <PaginationBar loading={repoLoading} repoPerPage={repoPerPage} totalRepo={totalRepo} paginate={paginate}  />
    </div>

  )
}

export default Profile