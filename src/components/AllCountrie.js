import react, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import CardCountry from './CardCountry'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import ReactPaginate from 'react-paginate';
import '../assets/css/styles.css'
const AllCountrie=()=>{
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(8);
    const [pageCount, setPageCount] = useState(0)

    const getData = async() => {
        const res = await axios.get(`http://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag`)
        const data = res.data;
                  const slice = data.slice(offset, offset + perPage)
                  const postData = (<MDBRow >{
                    slice.map(pd =>
                        <MDBCol md='4' className='col-example'>
                          <CardCountry detail={pd} />
                      </MDBCol>
                    )
                      }</MDBRow>)
                  setData(postData)
                  setPageCount(Math.ceil(data.length / perPage))
    }
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };
    
     useEffect(() => {
       getData()
     }, [offset])

     return (
        <div className="App">
          {data}
           <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}/>
        </div>
      );
    

}
export default AllCountrie