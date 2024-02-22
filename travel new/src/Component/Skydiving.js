import '../App.css'
import React from 'react';
import Navbarhome from '../Homepage/Navbar'
import Card from 'react-bootstrap/Card'
import Caroselskydiving from './Caroselskydiving';
import { useNavigate } from 'react-router-dom';
 function Skydiving() {
 const navigate =useNavigate();
    return(
        <> 
         <Navbarhome/>
         <Caroselskydiving/>
           <div className='cardsize' style={{padding:'2%'}}>
              <div className='card_slogan'>
                <h2><i> Skydiving is the ultimate adventure. It’s exhilarating, thrilling and a rush of adrenaline. But it’s also an experience that makes you feel small and insignificant in the face of something so monumental.</i></h2> 
              </div>
           </div> <br></br>
           <h1 style={{paddingLeft:'90px',color:'black'}}>Top Attractions</h1>
         <div className='container pt-5'>
            <div className='row'>
                <div className='col-12 col-lg-4 pb-4'>
                    <Card style={{ width: '350px',height:'560px' }}>
                      <Card.Img variant="top"  className='imghover' src="https://th.bing.com/th/id/OIP.6nv2mTbBOe6LQ2XMDyc_TQHaFj?rs=1&pid=ImgDetMain" alt='Pondicherry' style={{width: '350px',height:'241px'}}/>
                        <Card.Body>
                           <Card.Title style={{textAlign:'center'}}>Pondicherry – Tamil Nadu</Card.Title>
                            
                                <ul>
                                    <li>Height: 10,000 ft</li>
                                    <li>Time: 7AM - 10AM</li>
                                    <li>Price: (Per Person)
                                        <p>Static Line Jumps – INR 16,500 <br></br>
                                              Tandem Jumps – INR 33,500 <br></br>
                                              AFF – INR 37,500 </p>
                                    </li>
                                    <li>
                              <form>
                                <label for="birthday">Date: </label>
                                <input type="date" style={{borderRadius:'4px'}} />                      
                              </form>
                            </li>
                                </ul>
                            <div style={{textAlign:'center'}}>
                               <button className='allbuttonhover' style={{backgroundColor:'#848484',textAlign:'center',borderRadius:'5px',height:'30px',width:'90px'}}>Book</button>
                            </div>
                        </Card.Body>  
                    </Card>
                </div>

                <div className='col-12 col-lg-4 pb-4'>
                    <Card style={{ width: '350px',height:'560px' }}>
                      <Card.Img variant="top"  className='imghover' src="https://wallpapercave.com/wp/wp2025638.jpg" alt='Mysore - Karnataka' style={{width: '350px',height:'330px'}}/>
                        <Card.Body>
                           <Card.Title style={{textAlign:'center'}}>Mysore – Karnataka</Card.Title>
                           <ul>
                                    <li>Height: 8000 - 10000 ft.</li>
                                    <li>Time: 8AM - 11AM</li>
                                    <li>Price:(Per Person)
                                        <p>Static Line Jumps – INR 15,000 <br></br>
                                              Tandem Jumps – INR 31,500 <br></br>
                                              AFF – INR 35,500</p>
                                    </li>
                                    <li>
                              <form>
                                <label for="birthday">Date: </label>
                                <input type="date" style={{borderRadius:'4px'}} />                      
                              </form>
                            </li>
                                </ul>
                            <div style={{textAlign:'center'}}>
                             <button className='allbuttonhover' style={{backgroundColor:'#848484',textAlign:'center',borderRadius:'5px',height:'30px',width:'90px'}}>Book</button>
                            </div>
                        </Card.Body>  
                    </Card>
                </div>

                <div className='col-12 col-lg-4 pb-4'>
                    <Card style={{ width: '350px',height:'560px' }}>
                      <Card.Img variant="top"  className='imghover' src="https://images4.alphacoders.com/587/587655.jpg" alt='Aamby Valley – Maharashtra' style={{width: '350px',height:'330px'}}/>
                        <Card.Body>
                           <Card.Title style={{textAlign:'center'}}>Aamby Valley – Maharashtra</Card.Title>
                           <ul>
                                    <li>Height: 9000 ft</li>
                                    <li>Time: 10AM - 1PM</li>
                                    <li>Price:(Per Person)
                                        <p>Static Line Jumps – INR 14,500 <br></br>
                                              Tandem Jumps – INR 30,000 <br></br>
                                              AFF – INR 35,500</p>
                                    </li>
                                    <li>
                              <form>
                                <label for="birthday">Date: </label>
                                <input type="date" style={{borderRadius:'4px'}} />                      
                              </form>
                            </li>
                                </ul>
                            <div style={{textAlign:'center'}}>
                             <button className='allbuttonhover' style={{backgroundColor:'#848484',textAlign:'center',borderRadius:'5px',height:'30px',width:'90px'}}>Book</button>
                            </div>
                        </Card.Body>  
                    </Card>
                </div>

                <div className='col-12 col-lg-4 pb-4'>
                    <Card style={{ width: '350px',height:'560px' }}>
                      <Card.Img variant="top"  className='imghover' src="https://th.bing.com/th/id/R.5f9f35661bfcc66a05340f13464868a4?rik=RRRI%2fOZ8pY%2fJlg&riu=http%3a%2f%2ftraveluxemag.com%2fwp-content%2fuploads%2f2010%2f03%2fskydiving1.jpg&ehk=ndXs33uVv6whqko4%2bMgohCSOkE71Qo25D7IuhVRh2%2bk%3d&risl=&pid=ImgRaw&r=0"alt='Deesa – Gujarat' style={{width: '350px',height:'330px'}}/>
                        <Card.Body>
                           <Card.Title style={{textAlign:'center'}}>Deesa – Gujarat</Card.Title>
                           <ul>
                                    <li>Height: 7000 ft</li>
                                    <li>Time: 1PM - 5PM</li>
                                    <li>Price:(Per Person)
                                        <p>Static Line Jumps – INR 16,000 <br></br>
                                              Tandem Jumps – INR 32,500 <br></br>
                                              AFF – INR 36,500</p>
                                    </li>
                                    <li>
                              <form>
                                <label for="birthday">Date: </label>
                                <input type="date" style={{borderRadius:'4px'}} />                      
                              </form>
                            </li>
                                </ul>
                            <div style={{textAlign:'center'}}>
                             <button className='allbuttonhover' style={{backgroundColor:'#848484',textAlign:'center',borderRadius:'5px',height:'30px',width:'90px'}}>Book</button>
                            </div>
                        </Card.Body>  
                    </Card>
                </div>

                <div className='col-12 col-lg-4 pb-4'>
                    <Card style={{ width: '350px',height:'560px' }}>
                      <Card.Img variant="top"  className='imghover' src="https://images5.alphacoders.com/351/thumb-1920-351573.jpg"alt='Narnaul – Haryana' style={{width: '350px',height:'330px'}}/>
                        <Card.Body>
                           <Card.Title style={{textAlign:'center'}}>Narnaul – Haryana </Card.Title>
                           <ul>
                                    <li>Height: 5000 ft</li>
                                    <li>Time: 3PM - 6PM</li>
                                    <li>Price:(Per Person)
                                        <p>Static Line Jumps – INR 12,500 <br></br>
                                              Tandem Jumps – INR 20,500 <br></br>
                                              AFF – INR 25,500</p>
                                    </li>
                                    <li>
                              <form>
                                <label for="birthday">Date: </label>
                                <input type="date" style={{borderRadius:'4px'}} />                      
                              </form>
                            </li>
                                </ul>
                            <div style={{textAlign:'center'}}>
                             <button className='allbuttonhover' style={{backgroundColor:'#848484',textAlign:'center',borderRadius:'5px',height:'30px',width:'90px'}}>Book</button>
                            </div>
                        </Card.Body>  
                    </Card>
                </div>

                <div className='col-12 col-lg-4 pb-4'>
                    <Card style={{ width: '350px',height:'560px' }}>
                      <Card.Img variant="top"  className='imghover' src="https://media.licdn.com/dms/image/C5612AQHElRLdGVbvAA/article-cover_image-shrink_600_2000/0/1520107080429?e=2147483647&v=beta&t=l-KXIJxp0qrQizhqDre8v_-frAoEZZv00Qw1-1PKKH0"alt='Hyderabad – Telangana' style={{width: '350px',height:'330px'}}/>
                        <Card.Body>
                           <Card.Title style={{textAlign:'center'}}>Hyderabad – Telangana</Card.Title>
                           <ul>
                                    <li>Height: 4,000 ft</li>
                                    <li>Time: 4PM - 7PM</li>
                                    <li>Price:(Per Person)
                                        <p>Static Line Jumps – INR 10,700 <br></br>
                                              Tandem Jumps – INR 15,000 <br></br>
                                              AFF – INR 21,500</p>
                                    </li>
                                    <li>
                              <form>
                                <label for="birthday">Date: </label>
                                <input type="date" style={{borderRadius:'4px'}} />                      
                              </form>
                            </li>
                                </ul>
                            <div style={{textAlign:'center'}}>
                             <button className='allbuttonhover' style={{backgroundColor:'#848484',textAlign:'center',borderRadius:'5px',height:'30px',width:'90px'}}>Book</button>
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
 export default Skydiving;