import react, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import CardCountry from './CardCountry'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
class AllCountrie extends Component {
    state = {
        country: []
    }

    componentDidMount() {
        axios.get('http://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag')
            .then(res => {
                console.log(res)
                this.setState({ country: res.data });
            })
    }
    render() {
        return ( <MDBRow>
            {
                this.state.country.map(person => (
                    <MDBCol md='4' className='col-example'>
                        <CardCountry detail={person} />
                    </MDBCol>
                ))
            }
         </MDBRow>)
    }

}
export default AllCountrie