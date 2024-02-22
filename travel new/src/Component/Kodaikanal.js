import '../App.css'
import React from 'react';
import Card from 'react-bootstrap/Card';
import Navbarhome from '../Homepage/Navbar'
import Caroselkodaikanal from './Caroselkodaikanal';
import { useNavigate } from 'react-router-dom';
import Footerhome from '../Homepage/footerhome';

function Kodaikanal(){
  const navigate=useNavigate();
    return(
        <>
          <Navbarhome/>
          <Caroselkodaikanal/>     
            <div className='cardsize' style={{padding:'3%'}}>
              <div className='card_slogan'>
                <h2 style={{color:'black'}}><i>  Kodaikanal is one of the most sought-after hill station destinations in Tamil Nadu  and is referred to as the "Princess of Hill stations". </i></h2> 
              </div>
            </div> <br></br>
            <h1 style={{color:'black',paddingLeft:'90px'}}>Top Attraction:-</h1> <br></br>
         {/* card */}
          <div className='container pb-5 '>
            <div className='row'>
              <div className='col-12 col-lg-4 mb-5'  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top"  className='imghover'alt='Kodaikanal Lake' src="https://www.goingindiaa.com/wp-content/uploads/2019/04/kodaikanal.jpg" style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Kodaikanal Lake</Card.Title>
                  </Card.Body>  
                </Card>
              </div>
                
              <div className='col-12 col-lg-4 mb-8'  >
               <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' alt='Pine Forest' src="http://wallpapercave.com/wp/xy8Ov5o.jpg" style={{width: '350px',height:'330px'}} />
                    <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Pine Forest</Card.Title>
                   </Card.Body>                
                </Card>
              </div>

              <div className='col-12 col-lg-4 '  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' alt='Bryant Park' src="https://image3.mouthshut.com/images/imagesp/925752731s.jpg" style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Bryant Park</Card.Title>
                   </Card.Body>      
                </Card>
              </div>

              <div className='col-12 col-lg-4 mb-5'  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top"  className='imghover' alt='Dolphins Nose' src="https://1.bp.blogspot.com/-WezY4tgE4Ak/VrjmkkdCcmI/AAAAAAAAZog/KztLQy3PZ6o/s1600/side-view-of-dolphins-nose.jpg" style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Dolphin's Nose</Card.Title>
                   </Card.Body>  
              </Card>
              </div>

              <div className='col-12 col-lg-4 '  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' alt='Shembaganur Museum ' src="https://www.worldatlas.com/r/w1200-q80/upload/2a/f5/01/shutterstock-688284097.jpg"  style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Shembaganur Museum </Card.Title>
                   </Card.Body>  
                </Card>
              </div>

              <div className='col-12 col-lg-4 '  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' alt='Perumal Peak' src="https://media-cdn.tripadvisor.com/media/photo-s/08/bc/3b/f0/perumal-peak.jpg"  style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Perumal Peak</Card.Title>
                   </Card.Body>       
                </Card>
              </div>

            
            </div>
          </div>
                
         <div className='pagebutton' style={{textAlign:'center'}}>
            <div style={{color:'black'}}><h4>These are the places to visit in Kodaikanal.Guide will help you to visit above the places.</h4></div> 
              <div style={{paddingBottom:'20px',paddingTop:'15px'}}>
                <button style={{backgroundColor:'#848484',borderRadius:'5px',width:'100px',}} onClick={() => navigate('/Kodaikanalguide')}>View Guide</button>
              </div>
          </div>
          <hr></hr>          
          <Footerhome/>
        </>
      );
    }
export default Kodaikanal;