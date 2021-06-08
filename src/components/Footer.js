import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter backgroundColor='dark' className='text-center text-lg-left'>
      <div className='text-center p-3 text-light' style={{ backgroundColor: '#222' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light' href='https://mdbootstrap.com/'>
          SteeveL'informaticien
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer