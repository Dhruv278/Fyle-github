import React from 'react'
import { FaLink } from "react-icons/fa";
import { GrLocation} from '@react-icons/all-files/gr/GrLocation';
import "./main.css"
import { Link } from 'react-router-dom';
export const UpperProfile = ({profile,loading}) => {

    if(loading){
        return(
            <h1></h1>
        )
    }
    
  return (
    <div className='row mx-md-n5 upperProfile' >
        <div className=' col-4 userPhoto' >
            <img  className='img-circle '  width={"200px"} src={profile.avatar_url}>
            </img>
            <div >

            <a href={profile.html_url} target="_blank"><b  style={{display:"flex"}}><FaLink style={{marginTop:'10px',marginRight:"5px"}} /><p className='my-5' style={{marginTop:"10px"}}>{profile.html_url}</p></b></a>
            </div>
        </div>
        <div className=' col-8' style={{display:"flex",fontWeight:"bold",flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}}>
            <h1 className='md-5' style={{margin:"5px"}}>{profile.name}</h1>
            <p className='md-5' style={{margin:"5px"}}>{profile.bio}</p>
            <div style={{display:"flex" ,margin:"5px"}}>
            <GrLocation style={{margin:"auto 5px"}}/><p style={{margin:"auto 0"}}>{profile.location}</p>
            </div>

            <p style={{margin:"5px 5px"}}> {profile.twitter_username!=null?<a href={`https://twitter.com/${profile.twitter_username}`} target="_blank">Twitter : {`https://twitter.com/${profile.twitter_username}`}</a>:""} </p>
        </div>
    </div>
  )
}
