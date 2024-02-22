import '../App.css'
import React from 'react';
import Card from 'react-bootstrap/Card';
import Navbarhome from '../Homepage/Navbar'
import { useNavigate } from 'react-router-dom';
import Footerhome from '../Homepage/footerhome';
import CarouselCoimbatore from './Caroselcoimbatore';
function Coimbatore(){
 const navigate=useNavigate();
    return(
        <>
          <Navbarhome/>
          <CarouselCoimbatore/>     
            <div className='cardsize' style={{padding:'3%'}}>
              <div className='card_slogan'>
                <h2 style={{color:'black'}}><i>Coimbatore is known as the “Manchester of South India”.Kovai is one of the major metropolitan cities in the Indian state of Tamil Nadu. Coimbatore is the second largest city in Tamil Nadu. </i></h2> 
              </div>
            </div> <br></br>
            <h1 style={{color:'black',paddingLeft:'80px'}}>Top Attraction:-</h1> <br></br>
         {/* card */}
          <div className='container pb-5 '>
            <div className='row'>
              <div className='col-12 col-lg-4 mb-5'  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top"  className='imghover' src="https://pbs.twimg.com/media/DfuycdCVAAAJszI.jpg " alt='Adiyogi Shiva Statue' style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Adiyogi Shiva Statue</Card.Title>
                  </Card.Body>  
                </Card>
              </div>
                
              <div className='col-12 col-lg-4 mb-8'  >
               <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' src="https://3.bp.blogspot.com/-JDXTU_EwgH0/Vgza74d0KOI/AAAAAAAAKTE/dr-HMaOzkOI/s1600/IMAGE_738.jpg " alt="Siruvani Waterfalls" style={{width: '350px',height:'330px'}} />
                    <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Siruvani Waterfalls</Card.Title>
                   </Card.Body>               
                </Card>
              </div>

              <div className='col-12 col-lg-4 mb-5'  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top"  className='imghover' src="https://www.trawell.in/admin/images/upload/42821271VOC_Zoo.jpg " alt='VOC Park and Zoo' style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>VOC Park and Zoo</Card.Title>
                   </Card.Body>  
              </Card>
              </div>

              <div className='col-12 col-lg-4 '  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' src=" https://th.bing.com/th/id/OIP.UY3xctqqiqsDwhsZQw0mxAHaFj?rs=1&pid=ImgDetMain" alt="Marudhamalai Hill Temple" style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}> Marudhamalai Hill Temple</Card.Title>
                   </Card.Body>  
                </Card>
              </div>

              <div className='col-12 col-lg-4 '  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' src=" https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/b7/55/15/near-water-falling-location.jpg?w=1200&h=-1&s=1" alt="Kodiveri Dam" style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Kodiveri Dam</Card.Title>
                   </Card.Body>       
                </Card>
              </div>

              <div className='col-12 col-lg-4 '  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' src="https://www.ultimatecarpage.com/images/gallery/technoclassica2014/Alfa-Romeo-Giulietta-SS-85613.jpg" alt="Gedee Car Museum" style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Gedee Car Museum</Card.Title>
                   </Card.Body>      
                </Card>
              </div>
            </div>
          </div>
                
         <div className='pagebutton' style={{textAlign:'center'}}>
            <div style={{color:'black'}}><h4>These are the places to visit in Coimbatore.Guide will help you to visit above the places.</h4></div> 
              <div style={{paddingBottom:'20px',paddingTop:'15px'}}>
                <button style={{backgroundColor:'#848484',borderRadius:'5px',width:'100px'}} onClick={() => navigate('/coimbatoreguide')}>View Guide</button>
              </div>
          </div>
          <hr></hr>
          <Footerhome/>
        </>
      );
    }
export default Coimbatore;