import '../App.css'
import React from 'react';
import Card from 'react-bootstrap/Card';
import Navbarhome from '../Homepage/Navbar'
import { useNavigate } from 'react-router-dom';
import Footerhome from '../Homepage/footerhome';
import Carouselkerala from './Caroselkerala';
function Kerala(){
 const navigate=useNavigate();
    return(
        <>
          <Navbarhome/>
          <Carouselkerala/>     
            <div className='cardsize' style={{padding:'3%'}}>
              <div className='card_slogan'>
                <h2 style={{color:'black'}}><i> Kerala has earned the title of “God’s Own Country” due to its breathtaking scenery and plenty of recreational opportunities </i></h2> 
              </div>
            </div> <br></br>
            <h1 style={{color:'black',paddingLeft:'80px'}}>Top Attraction:-</h1> <br></br>
         {/* card */}
          <div className='container pb-5 '>
            <div className='row'>
              <div className='col-12 col-lg-4 mb-5'  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top"  className='imghover' src="https://images.pexels.com/photos/13691355/pexels-photo-13691355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"alt='Munnar' style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Munnar</Card.Title>
                  </Card.Body>  
                </Card>
              </div>
                
              <div className='col-12 col-lg-4 mb-8'  >
               <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' src="https://wallpapercave.com/wp/wp7526812.jpg" alt="Kochi" style={{width: '350px',height:'330px'}} />
                    <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Kochi</Card.Title>
                   </Card.Body>               
                </Card>
              </div>

              <div className='col-12 col-lg-4 mb-5'  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top"  className='imghover' src="https://luxoticholidays.com/backend/web/destinations/varkala-beach-kerala-1483460469.jpg"alt='Varkala' style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Varkala</Card.Title>
                   </Card.Body>  
              </Card>
              </div>

              <div className='col-12 col-lg-4 '  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' src="https://i.pinimg.com/originals/d2/06/e5/d206e524b05e192bf82bef9dcd62cc36.jpg" alt="Vagamon" style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Vagamon</Card.Title>
                   </Card.Body>  
                </Card>
              </div>

              <div className='col-12 col-lg-4 '  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' src="https://images.yourstory.com/cs/wordpress/2017/01/kerala-carbon-neutral-panchayat.jpg" alt="Alappuzha" style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Alappuzha</Card.Title>
                   </Card.Body>       
                </Card>
              </div>

              <div className='col-12 col-lg-4 '  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' src="https://irisholidays.com/keralatourism/wp-content/uploads/2021/07/wayanad.jpg" alt="Wayanad" style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Wayanad</Card.Title>
                   </Card.Body>      
                </Card>
              </div>
            </div>
          </div>
                
         <div className='pagebutton' style={{textAlign:'center'}}>
            <div style={{color:'black'}}><h4>These are the places to visit in Kerala.Guide will help you to visit above the places.</h4></div> 
              <div style={{paddingBottom:'20px',paddingTop:'15px'}}>
                <button style={{backgroundColor:'#848484',borderRadius:'5px',width:'100px'}} onClick={() => navigate('/keralaguide')}>View Guide</button>
              </div>
          </div>
          <hr></hr>
          <Footerhome/>
        </>
      );
    }
export default Kerala;