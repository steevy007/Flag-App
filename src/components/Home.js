import react from 'react'
import AllCountrie from './AllCountrie'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';
const Home=()=>{
    return(
        < MDBContainer className='mt-4'>
            <AllCountrie/>
        </MDBContainer>
    )
}
export default Home