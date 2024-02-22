
import Card from 'react-bootstrap/Card';
import fivestar from '../images/fivestar.png';
import kabil from '../images/kabil.jpg'
import threestar from '../images/threestar.png'
import fourstar from '../images/fourstar.png'
import Harish from '../images/Harish.jpeg'
import Dinesh from '../images/Dinesh.jpg'
import Navbarhome from '../Homepage/Navbar'
import { useNavigate } from 'react-router-dom';
import Footerhome from '../Homepage/footerhome';


function Coimbatoreguide() {
  const navigate=useNavigate();
  return (
    <>
      
     <Navbarhome/>    
     <h1 style={{marginTop:'80px',textAlign:'center',color:'black',paddingTop:'50px'}}>Our Guide</h1>
     <div className='container'>
      <div className='row'>
       <Card style={{width:'250px'}} className='col-lg-4 m-5'>
        <Card.Body>
          <Card.Text>
           <Card.Img variant="top" src={kabil}alt='kabil' style={{width:'200px',height:'220px',borderRadius:'4px'}} />
            <div style={{width:'300px',height:'300px',color:'black'}}><br></br>
                    <p>Name:kabil</p>
                    <p>e-mail:kabil@gmail.com</p> 
                    <p>  Experience:17Years</p>
                    <p> Packages:
                      <select style={{width:'110px'}}>
                        <option>Click to see</option>
                        <option>Resort 🏩</option>
                        <option>Food 🍝</option>
                        <option>Turking 🛻</option>
                        <option>Air balloon ride 🪂</option>
                        <option>Fire camp 🔥</option>
                        <option>Night DJ🕺🏻</option>

                      </select>
                    </p>
                    <p>Per person :INR 6,000</p>
                    <p>Ratings: <img src={fivestar}alt="fivestar ratings"style={{height:'20px',width:'100px'}}></img> </p>
                    <button className='guide' style={{borderRadius:'5px',backgroundColor:'#BDCDCE'}}> Book Now</button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{width:'300px'}} className='col-lg-4 m-5'>
        <Card.Body>
          <Card.Text>
           <Card.Img variant="top" src={Harish}alt='harish' style={{width:'200px',height:'220px',borderRadius:'4px'}} />
            <div style={{width:'300px',height:'300px'}}><br></br>
                    <p>Name:Harish</p>
                    <p>e-mail:harish@gmail.com</p> 
                    <p>  Experience:15Years</p>
                    <p> Packages:
                      <select style={{width:'110px'}}>
                        <option>Click to see</option>
                        <option>Resort 🏩</option>
                        <option>Food 🍝</option>
                        <option>Air balloon ride 🪂</option>
                        <option>Night DJ🕺🏻</option>
                      </select>
                    </p>
                    <p>Per person :INR 5,500</p>
                    <p>Ratings: <img src={fourstar} alt="fourstar ratings" style={{height:'20px',width:'100px'}}></img> </p>
                    <button className='guide' style={{borderRadius:'5px',backgroundColor:'#BDCDCE'}}> Book Now</button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>

      
      <Card style={{width:'300px'}} className='col-lg-4 m-5'>
        <Card.Body>
          <Card.Text>
          <Card.Img variant="top" src={Dinesh}alt='dinesh' style={{width:'200px',height:'220px',borderRadius:'4px'}} />
            <div style={{width:'300px',height:'300px'}}><br></br>
                    <p>Name:Dinesh</p>
                    <p>e-Mail:dinesh@gmail.com</p> 
                    <p>  Experience:10Years</p>
                    <p> Packages:
                      <select style={{width:'110px'}}>
                        <option>Click to see</option>
                        <option>Resort 🏩</option>
                        <option>Food 🍝</option>
                        <option>Fire camp 🔥</option>
                        <option>Night DJ🕺🏻</option>
                      </select>
                    </p>
                    <p>Per person :INR 5,000</p>
                    <p>Ratings: <img src={threestar} alt="threestar ratings" style={{height:'20px',width:'100px'}}></img> </p>
                    <button className='guide' style={{borderRadius:'5px',backgroundColor:'#BDCDCE'}}> Book Now</button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
      <div style={{textAlign:'center',paddingBottom:'20px'}}>
       <button onClick={() => navigate('/coimbatore')} style={{height:'30px',width:'80px',borderRadius:'4px',backgroundColor:'black',color:'whitesmoke'}}>Back</button>
      </div><hr></hr>
      <Footerhome/>
</>
  );
}

export default Coimbatoreguide;
