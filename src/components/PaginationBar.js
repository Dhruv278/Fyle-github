import React,{useState} from 'react'
import './main.css'
export const PaginationBar = ({ loading,repoPerPage, totalRepo,paginate,setPage}) => {
   
    const pageNumbers = []
    const [pageNumber,setPageNumber]=useState(1);
    
    const [range,setRange]=useState(4);
    const [startNumber,setStartNumber]=useState(1);
   
  
    if(loading){
        return(
            <h1></h1>
        )
    }
    
    for (let i = 1; i <= Math.ceil(totalRepo / repoPerPage); i++) {
        pageNumbers.push(i);
    }
   
    console.log(pageNumber)
  
    return (
        <div>

            <nav aria-label="Page navigation example" style={{ display: "flex", justifyContent: "center",flexDirection:"column",alignItems: "center" }}>
                <ul className="pagination">
                    <li className="page-item" key="Previous">


                        <a className="page-link" href="#" aria-label="Previous" onClick={()=>{
                           
                            pageNumber-1>=1 && pageNumber-1>=startNumber?paginate(pageNumber-1):paginate(startNumber+range-1>pageNumbers.length?pageNumbers.length:startNumber+range-1);
                            pageNumber-1>=1 && pageNumber-1>=startNumber?setPageNumber(pageNumber-1):setPageNumber(startNumber+range-1>pageNumbers.length?pageNumbers.length:startNumber+range-1);
                                }}>
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>


                    </li>
                    
                    {pageNumbers.map((number,index) => (
                       number>=startNumber && number<startNumber+range?<li className="page-item" key={index}>
                            <a className="page-link" style={pageNumber==number?{backgroundColor:"#9bc8da",color:"black"}:{}} onClick={()=>{
                                setPageNumber(number);
                                paginate(number)
                                }} href="#">
                                {number}
                            </a>
                        </li>:<></>
                    ))}

                    <li className="page-item" key="next">
                        <a className="page-link" href="#" aria-label="Next"  onClick={()=>{
                            pageNumber+1<=pageNumbers.length && pageNumber+1<startNumber+range?paginate(pageNumber+1):paginate(startNumber);
                            pageNumber+1<=pageNumbers.length && pageNumber+1<startNumber+range?setPageNumber(pageNumber+1):setPageNumber(startNumber)
                                }}>
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
                <ul style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",padding:"0"}}>


                    <li style={{margin:"10px",listStyle:"none"}} key="older" >
                        <button className='btn btn-primary'  onClick={()=>{
                            startNumber-range>=1?setStartNumber(startNumber-range):setStartNumber(range*(Math.ceil(pageNumbers.length / range)-1)+1)
                            setPageNumber(startNumber-range>=1?startNumber-range:range*(Math.ceil(pageNumbers.length / range)-1)+1);
                            paginate(startNumber+range<=pageNumbers.length?startNumber+range:1)
                          }}>Older</button>
                    </li>



                    <li style={{margin:"10px",listStyle:"none"}}  key="newer">
                          <button className='btn btn-primary'onClick={()=>{
                            startNumber+range<=pageNumbers.length?setStartNumber(startNumber+range):setStartNumber(1) 
                            setPageNumber(startNumber+range<=pageNumbers.length?startNumber+range:1);
                            paginate(startNumber+range<=pageNumbers.length?startNumber+range:1)
                          }}>Newer</button>          

                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default PaginationBar
