import react, { Component, useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import emailjs from 'emailjs-com';
import swal from 'sweetalert'
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            email: '',
            subject: '',
            message: '',
            errorMessage: null
        }
    }

    handleChange = (event) => {
        this.setState({
            nom: event.target.value
        })
    }
    handleChangeMail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleChangeSubject = (event) => {
        this.setState({
            subject: event.target.value
        })
    }
    handleChangeMessage = (event) => {
        this.setState({
            message: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.nom == '' || this.state.email == '' || this.state.subject == '' || this.state.message == '') {
            this.setState({
                errorMessage: 'veuillez fournir tout les infos necessaire'
            })
        } else {
            const mailParam = [
                this.state.name,
                this.state.email,
                this.state.message
            ]
            emailjs.send(
                'service_7oza1pe',
                'template_2lrkbmq',
                mailParam,
                'user_aTlBLhGz0EOomhje3Cv6z'
            ).then((res) => {
                console.log(res.text)
            }, (success) => {
                swal({
                    title: "Message Recu",
                    text: "Message Recu avec succes",
                    icon: "success",
                });
            },(error)=>{
                console.log(error.text)
            })



            this.resetForm()
        }
    }





    resetForm = () => {
        this.setState({
            nom: '',
            email: '',
            subject: '',
            message: '',
            errorMessage: null
        })
    }









    render() {
        const echoError = <div class="alert alert-warning" role="alert">
            {this.state.errorMessage}
        </div>;
        return (
            <div className='mb-4 mt-4'>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="8" className='offset-lg-2'>
                            <MDBCard>
                                <MDBCardBody>
                                    <form onSubmit={this.handleSubmit}>
                                        <p className="h4 text-center mb-4">Write to us</p>
                                        <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                            Your name
                                     </label>
                                        <input type="text" id="defaultFormContactNameEx" onChange={this.handleChange} value={this.state.nom} name='name' id='name' className="form-control" />
                                        <br />
                                        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                            Your email
                                     </label>
                                        <input type="email" id="defaultFormContactEmailEx" onChange={this.handleChangeMail} value={this.state.email} className="form-control" />
                                        <br />
                                        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                            Subject
                                    </label>
                                        <input type="text" id="defaultFormContactSubjectEx" onChange={this.handleChangeSubject} value={this.state.subject} className="form-control" />
                                        <br />
                                        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                            Your message
                                     </label>
                                        <textarea type="text" id="defaultFormContactMessageEx" onChange={this.handleChangeMessage} value={this.state.message} className="form-control" rows="3" />
                                        <div className="text-center mt-4">

                                            {
                                                this.state.errorMessage !== null ? echoError : ''
                                            }

                                            <MDBBtn color="warning" outline type="submit">
                                                Send
                                        <MDBIcon far icon="paper-plane" className="ml-2" />
                                            </MDBBtn>
                                        </div>
                                    </form>

                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )


    }
}
export default Contact



