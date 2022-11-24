import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export const SearchBar = () => {
  const [userName,setUserName]=useState('');
  const onChangeHandler = event => {
    setUserName(event.target.value);
 };
  return (
    <form style={{display:"flex",flexDirection:"column",width:"400px",alignItems:"center",margin:"100px auto"}}>
      <div class="form-group"  style={{display:"flex",flexDirection:"row",width:"300px"}}>
        <label for="exampleInputEmail1" style={{width:"45%",margin:"auto"}}>User Name</label>
        <input type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter Username" onChange={onChangeHandler} />
  
      </div>
      
      
      <Link type="submit" class="btn btn-primary" style={{width:"117px"}} to={`/profile/${userName}`}>Submit</Link>
    </form>
  )
}

