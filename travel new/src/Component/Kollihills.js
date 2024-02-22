import '../App.css'
import React from 'react';
import Card from 'react-bootstrap/Card';
import Navbarhome from '../Homepage/Navbar'
import { useNavigate } from 'react-router-dom';
import Footerhome from '../Homepage/footerhome';
import Carouselkollihills from './Caroselkollihills';
function Kollihills(){
 const navigate=useNavigate();
    return(
        <>
          <Navbarhome/>
          <Carouselkollihills/>     
            <div className='cardsize' style={{padding:'3%'}}>
              <div className='card_slogan'>
                <h2 style={{color:'black'}}><i> kolli Hills named as "Mountain of death" does sound a bit scary well it's nothing but 70 hairpin bends which is a must ride destination for bikers. </i></h2> 
              </div>
            </div> <br></br>
            <h1 style={{color:'black',paddingLeft:'80px'}}>Top Attraction:-</h1> <br></br>
         {/* card */}
          <div className='container pb-5 '>
            <div className='row'>
              <div className='col-12 col-lg-4 mb-5'  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top"  className='imghover' src="https://i.pinimg.com/736x/52/17/72/521772e6896aa60ab2c8232bf47c15aa.jpg" alt='Agaya gangai water falls' style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Agaya Gangai Waterfall</Card.Title>
                  </Card.Body>  
                </Card>
              </div>
                
              <div className='col-12 col-lg-4 mb-8'  >
               <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' src="https://live.staticflickr.com/7039/6844232551_2bc3493284_b.jpg" alt="Tampcol Medicinal Farm" style={{width: '350px',height:'330px'}} />
                    <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Tampcol Medicinal Farm</Card.Title>
                   </Card.Body>               
                </Card>
              </div>

              <div className='col-12 col-lg-4 mb-5'  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top"  className='imghover' src="https://2.bp.blogspot.com/-DZn5iqC97p4/WK_yRjNDUaI/AAAAAAAAIEQ/N999tn5doMEix-crPQdXduiVvPCgJQY-gCEw/s1600/Marian%2BOrchard%2B20.jpg" alt='Botanical Garden' style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Botanical Garden</Card.Title>
                   </Card.Body>  
              </Card>
              </div>

              <div className='col-12 col-lg-4 '  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' src=" https://hblimg.mmtcdn.com/content/hubble/img/sakleshpur/mmt/activities/t_ufs/m_activities_sakleshpur_bisle_view_point_l_356_534.jpg" alt="View Point" style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Kolli Hills Viewpoint </Card.Title>
                   </Card.Body>  
                </Card>
              </div>

              <div className='col-12 col-lg-4 '  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' src="https://th.bing.com/th/id/R.41cbe22be287fe1afb72bb2d2f0c702b?rik=bEoWxym8XRXF1A&riu=http%3a%2f%2fkedaravillage.com%2fassets%2fimages%2fblog%2fpookode-lake.jpg&ehk=escjCR%2fwU1OlCtd10vsyWJlKzyolkaEyKQtUrF5%2f1wY%3d&risl=&pid=ImgRaw&r=0" alt="Vasalurpatty Boat House" style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Vasalurpatty Boat House</Card.Title>
                   </Card.Body>       
                </Card>
              </div>

              <div className='col-12 col-lg-4 '  >
                <Card style={{ width: '350px',height:'430px' }}>
                  <Card.Img variant="top" className='imghover' src="https://www.nativeplanet.com/photos/929x523x90/2018/11/photo-91-154743-1.jpg " alt="Seekuparai & Selur Nadu" style={{width: '350px',height:'330px'}}/>
                   <Card.Body>
                     <Card.Title style={{textAlign:'center'}}>Seekuparai & Selur Nadu</Card.Title>
                   </Card.Body>      
                </Card>
              </div>
            </div>
          </div>
                
         <div className='pagebutton' style={{textAlign:'center'}}>
            <div style={{color:'black'}}><h4>These are the places to visit in Kollihills.Guide will help you to visit above the places.</h4></div> 
              <div style={{paddingBottom:'20px',paddingTop:'15px'}}>
                <button style={{backgroundColor:'#848484',borderRadius:'5px',width:'100px'}} onClick={() => navigate('/kollihillsguide')}>View Guide</button>
              </div>
          </div>
          <hr></hr>
          <Footerhome/>
        </>
      );
    }
export default Kollihills;