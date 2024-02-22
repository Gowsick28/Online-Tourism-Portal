import '../App.css'
import React from 'react';
import Navbarhome from '../Homepage/Navbar'
import Card from 'react-bootstrap/Card'
import Caroselsikiing from './Caroselsikiing';
import { useNavigate } from 'react-router-dom';
 function Sikiing() {
 const navigate = useNavigate();
    return(
        <> 
         <Navbarhome/>
         <Caroselsikiing/>
           <div className='cardsize' style={{padding:'2%'}}>
              <div className='card_slogan'>
                <h2><i> A snow-covered mountain, a set of skis, and a sense of adventure.Skiing is an experience that goes beyond the thrill of downhill descent or the competition of racing against the clock. </i></h2> 
              </div>
           </div> <br></br>
           <h1 style={{paddingLeft:'90px',color:'black'}}>Top Attractions</h1>
           <div className='container pt-5'>
            <div className='row'>
                <div className='col-12 col-lg-4 pb-4'>
                    <Card style={{ width: '350px',height:'520px' }}>
                      <Card.Img variant="top"  className='imghover' src="https://images2.alphacoders.com/568/568496.jpg"alt='Pahalgam, Jammu and Kashmir' style={{width: '350px',height:'400px'}}/>
                        <Card.Body>
                           <Card.Title style={{textAlign:'center'}}>Pahalgam, Jammu and Kashmir</Card.Title>
                           <ul>
                            <li>
                              Best time to sikiing: October to <br/>February
                            </li>
                            <li>
                              Price: (Per Person)
                              <p>INR 17,000</p>
                            </li>
                            <li>
                              Time: 6AM - 9AM
                            </li>
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
                      <Card.Img variant="top"  className='imghover' src="http://blog.thomascook.in/wp-content/uploads/2013/12/himachal.jpg"alt='Solang Nala, Himachal Pradesh' style={{width: '350px',height:'220px'}}/>
                        <Card.Body>
                           <Card.Title style={{textAlign:'center'}}>Solang Nala, Himachal Pradesh</Card.Title>
                           <ul>
                            <li>
                              Best time to sikiing: October to <br/>March
                            </li>
                            <li>
                              Price: (Per Person)
                              <p>INR 13,000</p>
                            </li>
                            <li>
                              Time: 7AM - 10AM
                            </li>
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
                      <Card.Img variant="top"  className='imghover' src="https://www.skibasics.com/news/wp-content/uploads/28190476659_a66ca98ea9_o-scaled.jpg"alt='Tawang, Arunachal Pradesh' style={{width: '350px',height:'220px'}}/>
                        <Card.Body>
                           <Card.Title style={{textAlign:'center'}}>Tawang, Arunachal Pradesh</Card.Title>
                           <ul>
                            <li>
                              Best time to sikiing: December to February
                            </li>
                            <li>
                              Price: (Per Person)
                              <p>INR 15,000</p>
                            </li>
                            <li>
                              Time: 8AM - 11AM
                            </li>
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
                      <Card.Img variant="top"  className='imghover' src="https://img.grouponcdn.com/deal/48BAoMkW9FJuMmhytTzL/27-960x582/v1/c870x524.jpg"alt='Yumthang, Sikkim' style={{width: '350px',height:'230px'}}/>
                        <Card.Body>
                           <Card.Title style={{textAlign:'center'}}>Yumthang, Sikkim</Card.Title>
                           <ul>
                            <li>
                              Best time to sikiing: December to February
                            </li>
                            <li>
                              Price: (Per Person)
                              <p>INR 17,000</p>
                            </li>
                            <li>
                              Time: 11AM - 2PM
                            </li>
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
                      <Card.Img variant="top"  className='imghover' src="https://th.bing.com/th/id/R.fd36aaa12fa80b9cb3a2548aedaa97cc?rik=%2bLElxmiMcXVXVg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-TMr-j-eWY-4%2fT-kXj5CdzbI%2fAAAAAAAAEmU%2f5QkCHpqS9sc%2fs1600%2fFree%2bSkiing%2bWallpapers%2b9.jpg&ehk=hdPaS134FDR3DwmPicnEgC3gxjbe1Ksb4fAEyyCH33I%3d&risl=&pid=ImgRaw&r=0"alt=' Munsiyari, Uttarakhand' style={{width: '350px',height:'220px'}}/>
                        <Card.Body>
                           <Card.Title style={{textAlign:'center'}}> Munsiyari, Uttarakhand</Card.Title>
                           <ul>
                            <li>
                              Best time to sikiing: October to <br/>February
                            </li>
                            <li>
                              Price: (Per Person)
                              <p>INR 16,000</p>
                            </li>
                            <li>
                              Time: 2PM - 5PM
                            </li>
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
                      <Card.Img variant="top"  className='imghover' src="https://boulderweekly.com/wp-content/uploads/2016/11/JMA_BywayAndPow_0015.jpg"alt='Kufri, Himachal Pradesh' style={{width: '350px',height:'220px'}}/>
                        <Card.Body>
                           <Card.Title style={{textAlign:'center'}}>Kufri, Himachal Pradesh</Card.Title>
                           <ul>
                            <li>
                              Best time to sikiing: December to February
                            </li>
                            <li>
                              Price: (Per Person)
                              <p>INR 14,000</p>
                            </li>
                            <li>
                              Time: 3PM - 6PM
                            </li>
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
 export default Sikiing;