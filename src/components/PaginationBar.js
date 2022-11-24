import React, { useState } from 'react'
import './main.css'
export const PaginationBar = ({ loading, repoPerPage, totalRepo, paginate }) => {

    const pageNumbers = []
    const [pageNumber, setPageNumber] = useState(1);

    const [range, setRange] = useState(4);
    const [startNumber, setStartNumber] = useState(1);


    if (loading) {
        return (
            <h1></h1>
        )
    }

    for (let i = 1; i <= Math.ceil(totalRepo / repoPerPage); i++) {
        pageNumbers.push(i);
    }



    return (
        <div>

            <nav aria-label="Page navigation example" style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                <ul className="pagination">
                    <li className="page-item" key="Previous">


                        <a className="page-link" aria-label="Previous" onClick={() => {

                            pageNumber - 1 >= 1 ? paginate(pageNumber - 1) : paginate(1);
                            pageNumber - 1 >= 1 ? setPageNumber(pageNumber - 1) : setPageNumber(1);

                            if (pageNumber - 1 <= 0) {
                                setPageNumber(1);

                                setStartNumber(1);
                            }
                            if (pageNumber - 1 < startNumber && pageNumber > 1) {

                                setStartNumber(pageNumber - range)
                            }


                        }}>
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>


                    </li>

                    {pageNumbers.map((number, index) => (
                        number >= startNumber && number < startNumber + range ? <li className="page-item" key={index}>
                            <a className="page-link" style={pageNumber == number ? { backgroundColor: "#9bc8da", color: "black" } : {}} onClick={() => {
                                setPageNumber(number);
                                paginate(number)
                            }} >
                                {number}
                            </a>
                        </li> : <></>
                    ))}

                    <li className="page-item" key="next">
                        <a className="page-link" aria-label="Next" onClick={() => {

                            pageNumber + 1 <= pageNumbers.length ? paginate(pageNumber + 1) : paginate(1);
                            pageNumber + 1 <= pageNumbers.length ? setPageNumber(pageNumber + 1) : setPageNumber(1);


                            if (pageNumber + 1 > pageNumbers.length) {
                                setPageNumber(1);
                                setStartNumber(1);
                            }
                            if (pageNumber + 1 >= startNumber + range) {
                              
                                setStartNumber(pageNumber + 1)
                            }


                        }}>
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
                <ul style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: "0" }}>


                    <li style={startNumber == 1 ? { margin: "10px", listStyle: "none", display: "none" } : { margin: "10px", listStyle: "none" }} key="older" >
                        <button className='btn btn-primary' onClick={() => {
                           
                            let x = startNumber - range;
                            if (x < 1) {
                                setStartNumber(1);
                                paginate(1);
                                setPageNumber(1);
                            } else {
                                setStartNumber(x);
                                setPageNumber(x);
                                paginate(x);
                            }
                           
                        }}>Older</button>
                    </li>



                    <li style={startNumber + range >= pageNumbers.length ? { margin: "10px", listStyle: "none", display: "none" } : { margin: "10px", listStyle: "none" }} key="newer">
                        <button className='btn btn-primary' onClick={() => {
                       
                            let x = startNumber + range;
                            if (x > pageNumbers.length) {
                                setStartNumber(startNumber);
                                setPageNumber(startNumber);
                                paginate(startNumber);
                            } else {
                                setStartNumber(x);
                                setPageNumber(x);
                                paginate(x);
                            }
                           
                        }}>Newer</button>

                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default PaginationBar
