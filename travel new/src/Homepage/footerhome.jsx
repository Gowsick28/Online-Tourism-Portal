import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export default function Footerhome() {
  const navigate=useNavigate();
  return (
  <>
    <div className='footerhome' >
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block' style={{color:'black'}}>
          <span><b>Get connected with us on social networks:</b></span>
        </div>

        <div style={{color:'black'}}>
          <a href='' className='me-4 text-reset'>
            <MDBIcon className='iconhover facebook' fab icon="facebook-f" />           
          </a>

          <a href='' className='me-4 text-reset'>
            <MDBIcon className='iconhover ' fab icon="twitter" />
          </a>

          <a href='' className='me-4 text-reset'>
            <MDBIcon className='iconhover' fab icon="google" />
          </a>

          <a href='' className='me-4 text-reset'>
            <MDBIcon className='iconhover' fab icon="instagram" />
          </a>

          <a href='' className='me-4 text-reset'>
            <MDBIcon className='iconhover' fab icon="linkedin" />
          </a>
          
          <a href='' className='me-4 text-reset'>
            <MDBIcon className='iconhover' fab icon="github" />
          </a>
        </div>
      </section>

      <section >
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3' style={{color:'black'}}>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p style={{paddingLeft:'60px'}}>
               Trip<sub>ty</sub>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Places</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Ooty
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Yercaud
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Kodaikanal
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Kerala
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Kolli Hills
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Coimbatore
                </a>
              </p>
            
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Policies</h6>
              <p>
                <a href='#!' className='text-reset' onClick={()=> navigate('/privacypolicy')}>
                  Privicy policy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' onClick={()=>navigate('/termsandconditions')}>
                  Terms and Conditions
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' onClick={() => navigate('/cancellation')}>
                Cancellations
                </a>
              </p>
            
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                3/65 Ukkadam,Coimbatore - 647302
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                tripty@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 94 894 461 65
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 64 987 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section><hr></hr>
{/* 
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)',color:'black' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div> */}
    </MDBFooter>
    </div>
    </>
  );
}