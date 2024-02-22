import '../App.css'
import React from 'react';
import Card from 'react-bootstrap/Card';
import Navbarhome from '../Homepage/Navbar'
import Caroselyercaud from './Caroselyercaud';
import { useNavigate } from 'react-router-dom';
import Footerhome from '../Homepage/footerhome';

function Yercaud(){
  const navigate=useNavigate();
    return(
        <>
          <Navbarhome/>
          
          <Caroselyercaud/>     
            <div className='cardsize' style={{padding:'3%'}}>
              <div className='card_slogan'>
                <h2 style={{color:'black'}}><i> Yercaud is situated nearly at the summit of the Shevaroys.The Shevaroys hills are a small group of hills in the Eastern Ghats. </i></h2> 
              </div>
            </div> <br></br>
            <h1 style={{color:'black',paddingLeft:'90px'}}>Top Attraction:-</h1> <br></br>
         {/* card */}
          <div className='container pb-5 '>
            <div className='row'>
              <div className='col-12 col-lg-4 mb-5'  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top"  className='imghover' src="https://www.tamilnadutourism.tn.gov.in/img/pages/mobile/government-botanical-garden-yercaud-1656230689_82bffcfe35d18aa384f7.webp"  alt='Government Botanical Garden' style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Government Botanical Garden</Card.Title>
                  </Card.Body>  
                </Card>
              </div>
                
              <div className='col-12 col-lg-4 mb-8'  >
               <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' src="https://media2.thrillophilia.com/images/photos/000/053/265/original/1526712123_shareiq_1358659797.810357.JPG?w=753&h=450&dpr=1.0" alt="Kiliyur waterfall" style={{width: '350px',height:'330px'}} />
                    <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Kiliyur waterfall</Card.Title>
                   </Card.Body>                
                </Card>
              </div>

              <div className='col-12 col-lg-4 mb-5'  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top"  className='imghover' src="https://media2.thrillophilia.com/images/photos/000/053/267/original/1568632061_More-Benefit-with-Sustainable-Teak-Plantation-1024x706.jpeg?w=753&h=450&dpr=1.0" alt='Kottachedu Teak Forest' style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Kottachedu Teak Forest</Card.Title>
                   </Card.Body>  
              </Card>
              </div>
              
              <div className='col-12 col-lg-4 '  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' src="https://storage.googleapis.com/namchey-gcs-asia-east/itinerary/5b01479a52565443d1cdb0ae/itinerary-5b01479a52565443d1cdb0ae-1526810809198-thm.jpeg" alt="Pagoda Point" style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Pagoda Point</Card.Title>
                   </Card.Body>  
                </Card>
              </div>
              
              <div className='col-12 col-lg-4 '  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' src="https://ae01.alicdn.com/kf/HTB1CYiKQXXXXXc0XVXXq6xXFXXXA/Deer-Horn-Tawny-Brown-Reindeer-Animal-Fabric-Silk-Poster-Print-Home-Decoration71658.jpg" alt="Deer Park" style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Deer Park</Card.Title>
                   </Card.Body>       
                </Card>
              </div>

              <div className='col-12 col-lg-4 '  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' src="https://th.bing.com/th/id/R.5d73ab142519000a30f919f30f2c6b59?rik=gS0QRYB2KKPshA&riu=http%3a%2f%2fwww.tourplan2india.com%2fwp-content%2fuploads%2f2017%2f02%2f32-km-loop-road-yercaud.jpg&ehk=B7FHL6gJaV2BYyGsCtXwDxlDpahU2D1MpTlbtvl6nbM%3d&risl=&pid=ImgRaw&r=0" alt="32-km Loop Road" style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>32-km Loop Road</Card.Title>
                   </Card.Body>      
                </Card>
              </div>
            </div>
          </div>
                
         <div className='pagebutton' style={{textAlign:'center'}}>
            <div style={{color:'black'}}><h4>These are the places to visit in Yercaud.Guide will help you to visit above the places.</h4></div> 
              <div style={{paddingBottom:'20px',paddingTop:'15px'}}>
                <button style={{backgroundColor:'#848484',borderRadius:'5px',width:'100px'}} onClick={() => navigate('/yercaudguide')}>View Guide</button>
              </div>
          </div>
          <hr></hr>
          <Footerhome/>
        </>
      );
    }
export default Yercaud;