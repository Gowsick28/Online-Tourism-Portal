import '../App.css'
import React from 'react';
import Card from 'react-bootstrap/Card';
import Navbarhome from '../Homepage/Navbar'
import Caroselooty from './Caroselooty';
import { useNavigate } from 'react-router-dom';
import Footerhome from '../Homepage/footerhome';
function Ooty(){
 const navigate=useNavigate();
    return(
        <>
          <Navbarhome/>
          <Caroselooty/>     
            <div className='cardsize' style={{padding:'3%'}}>
              <div className='card_slogan'>
                <h2 style={{color:'black'}}><i> She is charming, she is classy, she is unique – she is the Queen of Hill Stations in India. </i></h2> 
              </div>
            </div> <br></br>
            <h1 style={{color:'black',paddingLeft:'80px'}}>Top Attraction:-</h1> <br></br>
         {/* card */}
          <div className='container pb-5 '>
            <div className='row'>
              <div className='col-12 col-lg-4 mb-5'  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top"  className='imghover' alt='Government Botanical Garden' src="https://www.tamilnadutourism.tn.gov.in/img/pages/mobile/government-botanical-garden-ooty-1655270241_9f0726bf8b407dbb1de6.webp" style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Government Botanical Garden</Card.Title>
                  </Card.Body>  
                </Card>
              </div>
                
              <div className='col-12 col-lg-4 mb-8'  >
               <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover'alt='ooty lake' src="https://www.tamilnadutourism.tn.gov.in/img/pages/mobile/ooty-1653923887_fd00a9fb86e344ef04b5.webp"  style={{width: '350px',height:'330px'}} />
                    <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Ooty Lake</Card.Title>
                   </Card.Body>               
                </Card>
              </div>

              <div className='col-12 col-lg-4 mb-5'  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top"  className='imghover' alt='deer park' src="https://wallpapercave.com/wp/wp6962219.jpg" style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Deer Park</Card.Title>
                   </Card.Body>  
              </Card>
              </div>

              <div className='col-12 col-lg-4 '  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' alt='doddabetta' src="https://www.tamilnadutourism.tn.gov.in/img/pages/mobile/doddabetta-ooty-1656163788_a24340ce55bc4a38a24b.webp"  style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Doddabetta</Card.Title>
                   </Card.Body>  
                </Card>
              </div>

              <div className='col-12 col-lg-4 '  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' alt='pine forest' src="https://www.tamilnadutourism.tn.gov.in/img/pages/mobile/pine-forest-1656503986_7b36f5f4d1525acd0498.webp" style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Pine Forest</Card.Title>
                   </Card.Body>       
                </Card>
              </div>

              <div className='col-12 col-lg-4 '  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' alt='Needle Rock View-point' src="https://tse3.mm.bing.net/th?id=OIP.OAVTCZ6SHLCDs3KXE1l5swHaD8&pid=Api&P=0&h=180"  style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Needle Rock View-point</Card.Title>
                   </Card.Body>      
                </Card>
              </div>
            </div>
          </div>
                
         <div className='pagebutton' style={{textAlign:'center'}}>
            <div style={{color:'black'}}><h4>These are the places to visit in Ooty.Guide will help you to visit above the places.</h4></div> 
              <div style={{paddingBottom:'20px',paddingTop:'15px'}}>
                <button style={{backgroundColor:'#848484',borderRadius:'5px',width:'100px'}} onClick={() => navigate('/Ootyguide')}>View Guide</button>
              </div>
          </div>
          <hr></hr>
          <Footerhome/>
        </>
      );
    }
export default Ooty;