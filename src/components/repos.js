import React from 'react'
import "./main.css"
import {HashLoader} from 'react-spinners'


export const Repos = ({repos,loading}) => {

    if(loading){
        return(
            <HashLoader loading  color="rgba(54, 215, 183, 1)"/>
        )
    }

  return (
    <div className='row repos'>
        <div className=' col grid_display'>
            { repos.map(element => (
             <div style={{border:"2px solid black",width:"500px"}}>

                 <h2 style={{margin:"10px 5px",color:"#007bff",fontWeight:"bold"}}>{element.name}</h2>
                 <p style={{margin:"5px 5px",fontWeight:"bold"}}>{!element.description?"No description":element.description}</p>
                 <div style={{margin:"4px 4px"}} >{element.topics.length!=0?element.topics.map(el=>(<button className='btn btn-primary' style={{margin:"2px 2px"}}>{el}</button>)):<p style={{fontWeight:"bold"}}>"No Tags Available"</p>}</div>
             </div>
            
        ))}
        </div>
    </div>
  )
}
