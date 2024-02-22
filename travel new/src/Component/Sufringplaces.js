import '../App.css'
import React from 'react';
import Navbarhome from '../Homepage/Navbar'
import Card from 'react-bootstrap/Card'
import Caroselsufring from './Caroselsufring';
import { useNavigate } from 'react-router-dom';
 function Sufringplaces() {
 const navigate =useNavigate();
    return(
        <> 
         <Navbarhome/>
         <Caroselsufring/>
           <div className='cardsize' style={{padding:'2%'}}>
              <div className='card_slogan'>
                <h2><i> Surfing is one of those rare sports that seem to consume participants in a complete fashion. When surfers surf, they don’t just tip their toes in.</i></h2> 
              </div>
           </div> <br></br>
           <h1 style={{paddingLeft:'90px',color:'black'}}>Top Attractions</h1>
         <div className='container pt-5'>
            <div className='row'>
                <div className='col-12 col-lg-4 pb-4'>
                    <Card style={{ width: '350px',height:'520px' }}>
                      <Card.Img variant="top"  className='imghover' src="https://th.bing.com/th/id/R.fdb3aa540304d31de01a32ca9d5be8ae?rik=eDqEUpZ3LG8cEw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f5%2fa%2f8%2f276197.jpg&ehk=y1UW%2bv3s52MiX%2fTpA%2baVW7m%2fqHftZG7fIirjpqylG2U%3d&risl=&pid=ImgRaw&r=0" alt='covelong point,Chennai' style={{width: '350px',height:'330px'}}/>
                        <Card.Body>
                           <Card.Title style={{textAlign:'center'}}>Covelong point,Chennai</Card.Title>
                           <ul>         
                              <li>Best time to surf: April to <br/> September</li>       
                              <li>Price: INR 12,000  </li>
                              <li>
                                <form>
                                  <label for="birthday">Date: </label>
                                    <input type="date" style={{borderRadius:'4px'}} />                      
                                </form>
                              </li> 
                            </ul>
                            <div style={{textAlign:'center'}}>
                             <button style={{backgroundColor:'#848484',textAlign:'center',borderRadius:'5px',height:'30px',width:'90px'}}>Book</button>
                            </div>
                        </Card.Body>  
                    </Card>
                </div>

                <div className='col-12 col-lg-4 pb-4'>
                    <Card style={{ width: '350px',height:'520px' }}>
                      <Card.Img variant="top"  className='imghover' src="https://th.bing.com/th/id/R.0c9615698debdb5dfa5f064af420cd7b?rik=TpARwPUozxikTw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fDesktop-Surfing-HD-Wallpapers-Free-Download.jpg&ehk=2VQ2IlFmIpEc56jSegVLiUSo4y%2faWwOWX97Dou1Itp0%3d&risl=&pid=ImgRaw&r=0" alt='Goa' style={{width: '350px',height:'330px'}}/>
                        <Card.Body>
                           <Card.Title style={{textAlign:'center'}}>Goa</Card.Title>
                           <ul>         
                              <li>Best time to surf: May to <br/> October</li>       
                              <li>Price: INR 10,000 </li>
                              <li>
                                <form>
                                  <label for="birthday">Date: </label>
                                    <input type="date" style={{borderRadius:'4px'}} />                      
                                </form>
                              </li>
                            </ul>
                            <div style={{textAlign:'center'}}>
                             <button style={{backgroundColor:'#848484',textAlign:'center',borderRadius:'5px',height:'30px',width:'90px'}}>Book</button>
                            </div>
                        </Card.Body>  
                    </Card>
                </div>

                <div className='col-12 col-lg-4 pb-4'>
                    <Card style={{ width: '350px',height:'520px' }}>
                      <Card.Img variant="top"  className='imghover' src="https://th.bing.com/th/id/R.890b950dbed3af8c8b97815b2df4936e?rik=uXWueaU384RELw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fDownload-Surfing-Backgrounds.jpg&ehk=lfhP7XAzu8m8eanT96Plmto%2fLw8cedoeacZ1Xv77jiE%3d&risl=&pid=ImgRaw&r=0" alt='Varkala, Kerala' style={{width: '350px',height:'330px'}}/>
                        <Card.Body>
                           <Card.Title style={{textAlign:'center'}}>Varkala, Kerala</Card.Title>
                           <ul>         
                              <li>Best time to surf: March to <br/> October</li>       
                              <li>Price: INR 9,000  </li>
                              <li>
                                <form>
                                  <label for="birthday">Date: </label>
                                    <input type="date" style={{borderRadius:'4px'}} />                      
                                </form>
                              </li>
                            </ul>
                            <div style={{textAlign:'center'}}>
                             <button style={{backgroundColor:'#848484',textAlign:'center',borderRadius:'5px',height:'30px',width:'90px'}}>Book</button>
                            </div>
                        </Card.Body>  
                    </Card>
                </div>

                <div className='col-12 col-lg-4 pb-4'>
                    <Card style={{ width: '350px',height:'520px' }}>
                      <Card.Img variant="top"  className='imghover' src="https://www.davaocatholicherald.com/wp-content/uploads/2017/03/Dahican-Surf.jpg" alt='Mahabalipuram, Tamil Nadu' style={{width: '350px',height:'330px'}}/>
                        <Card.Body>
                           <Card.Title style={{textAlign:'center'}}>Mahabalipuram, Tamil Nadu</Card.Title>
                           <ul>         
                              <li>Best time to surf: May to <br/> August </li>       
                              <li>Price: INR 10,000 </li>
                              <li>
                                <form>
                                  <label for="birthday">Date: </label>
                                    <input type="date" style={{borderRadius:'4px'}} />                      
                                </form>
                              </li>
                            </ul>
                            <div style={{textAlign:'center'}}>
                             <button style={{backgroundColor:'#848484',textAlign:'center',borderRadius:'5px',height:'30px',width:'90px'}}>Book</button>
                            </div>
                        </Card.Body>  
                    </Card>
                </div>

                <div className='col-12 col-lg-4 pb-4'>
                    <Card style={{ width: '350px',height:'520px' }}>
                      <Card.Img variant="top"  className='imghover' src="https://i.pinimg.com/736x/08/0f/cb/080fcb08a795fa5acaa788a53b7f0d85--paddles-surf.jpg" alt='Pondicherry' style={{width: '350px',height:'330px'}}/>
                        <Card.Body>
                           <Card.Title style={{textAlign:'center'}}>Pondicherry</Card.Title>
                           <ul>         
                              <li>Best time to surf: March to September</li>       
                              <li>Price: INR 7,000 </li>
                              <li>
                                <form>
                                  <label for="birthday">Date: </label>
                                    <input type="date" style={{borderRadius:'4px'}} />                      
                                </form>
                              </li>
                            </ul>
                            <div style={{textAlign:'center'}}>
                             <button style={{backgroundColor:'#848484',textAlign:'center',borderRadius:'5px',height:'30px',width:'90px'}}>Book</button>
                            </div>
                        </Card.Body>  
                    </Card>
                </div>

                <div className='col-12 col-lg-4 pb-4'>
                    <Card style={{ width: '350px',height:'520px' }}>
                      <Card.Img variant="top"  className='imghover' src="https://media.licdn.com/dms/image/C5612AQFJOjmhBn0gMw/article-cover_image-shrink_600_2000/0/1520200586632?e=2147483647&v=beta&t=n0lIfC5LGoGzRcZti2K7InKmE8ngjG1RN6KSF8Qck3Q" alt='Kovalam Beach, Kerala' style={{width: '350px',height:'330px'}}/>
                        <Card.Body>
                           <Card.Title style={{textAlign:'center'}}>Kovalam Beach, Kerala</Card.Title>
                           <ul>         
                              <li>Best time to surf: February to September</li>       
                              <li>Price: INR 8,000 </li>
                              <li>
                                <form>
                                  <label for="birthday">Date: </label>
                                    <input type="date" style={{borderRadius:'4px'}} />                      
                                </form>
                              </li>
                            </ul> 
                            <div style={{textAlign:'center'}}>
                             <button style={{backgroundColor:'#848484',textAlign:'center',borderRadius:'5px',height:'30px',width:'90px'}}>Book</button>
                            </div>
                        </Card.Body>  
                    </Card>
                </div>
            </div>
         </div>
         <div style={{textAlign:'center',paddingBottom:'10px',paddingTop:'10px'}}>
           <button onClick={() => navigate('/')} style={{height:'30px',width:'80px',borderRadius:'4px',backgroundColor:'black',color:'whitesmoke'}}>Back</button>
         </div>
         <hr></hr>
        </>
    );
 }
 export default Sufringplaces;