import react from 'react'
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import '../assets/css/styles.css'

const CardCountry = (props) => {
    return (<div>

        <MDBCard className='mb-4 mt-4 ' style={{ width: '100%' }}>
            <MDBCardImage className='img' src={props.detail.flag} alt='...' position='top' />
            <MDBCardBody >
                <MDBCardText>
                    <center><h5>{props.detail.name}</h5></center>
                    <center><span><i>{props.detail.region}</i></span></center>
                    <center><span><i>{props.detail.capital}</i></span></center>
                    <center><span><i>{props.detail.population}</i></span></center>
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    </div>)
}

export default CardCountry