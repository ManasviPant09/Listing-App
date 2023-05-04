import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
  MDBInput
} from 'mdb-react-ui-kit';
const Footer = () => {
  return (
    <MDBFooter className='bg-light text-center text-white' style={{marginTop: "50px"}}>
      <MDBContainer className='p-4 pb-0'>      
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          ><MDBIcon fab icon='facebook-f' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          ><MDBIcon fab icon='twitter' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          ><MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          ><MDBIcon fab icon='instagram' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          ><MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          ><MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: "black"}}>
        <form action='' style={{padding: "10px"}}>
            <MDBRow className='d-flex justify-content-center'>
                <MDBCol size='auto' className='mb-4 mb-md-0'>
                    <p className='pt-2' style={{ fontStyle: "italic" }}>Get notified about latest deals and exciting offers!</p>
                </MDBCol>
                <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
                    <MDBInput type='text' id='form5Example2' label='Email address' contrast />
                </MDBCol>
                <MDBCol size='auto' className='mb-4 mb-md-0'>
                    <MDBBtn outline color='light'>Subscribe</MDBBtn>
                </MDBCol>
            </MDBRow>
        </form>
      </div>
    </MDBFooter>
  );
}

export default Footer;