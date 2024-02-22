
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Ourdestination() {
 const navigate=useNavigate();
  return (
    <div className=" bg-color-white">
      <h3  className=" pt-5  text-center" style={{color:'black'}}>Our Destination</h3>
        <p className=" pb-5 text-center" style={{color:'black'}}>“See the world. It's more fantastic than any dream made or paid for in factories. Ask for no guarantees, ask for no security.”</p>
        
        {/* ooty */}
        <div className='container pb-5 '>
          <div className='row'>
              <div className='col-12 col-lg-4 mb-5'  >
                <Card style={{ width: '350px',height:'350px' }} onClick={() => navigate('/ooty')}>
                  <Card.Img variant="top" src="https://th.bing.com/th?id=OIP.S1EYkq8D8lrzjXYypOr-VAHaEj&w=318&h=195&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt='Ooty' />
                    <Card.Body>
                    <Card.Title style={{textAlign:'center'}}>Ooty</Card.Title>             
                      <div className='text-center ' style={{borderTopStyle:"solid",borderTopColor:"black",borderTopWidth:"1px"}}>
                      <i class="fas fa-car m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i> 
                      <i class="fa-solid fa-martini-glass-citrus m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                      <i class="fab fa-fly m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                      <i class="fa-solid fa-umbrella-beach m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                      <i class="fa-solid fa-bell m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                      </div>
                    </Card.Body>     
                </Card>
              </div>
              {/* yercaud */}
            <div className='col-12 col-lg-4 mb-5'>
              <Card style={{ width: '350px',height:'350px' }} onClick={() => navigate('/yercaud')}>
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.1bUdu8db8ICq7XgbXd5wegHaE3?w=288&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt='Yercaud'/>
                <Card.Body>
                <Card.Title style={{textAlign:'center'}}>Yercaud</Card.Title>
                    <div className='text-center ' style={{borderTopStyle:"solid",borderTopColor:"black",borderTopWidth:"1px"}}>
                    <i class="fas fa-car m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i> 
                    <i class="fa-solid fa-martini-glass-citrus m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                    <i class="fab fa-fly m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                    <i class="fa-solid fa-umbrella-beach m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                    <i class="fa-solid fa-bell m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                    </div>
                </Card.Body>
              </Card>
            </div>
            {/* kodaikanal */}
            <div className='col-12 col-lg-4 mb-5'>
            <Card style={{ width: '350px',height:'350px'}} onClick={() => navigate('/kodaikanal')}>
              <Card.Img variant="top" src="https://kodaitrip.com/wp-content/uploads/2022/03/image3-1-1024x683.jpg"alt='kodaikanal' style={{height:'400px'}} />
              <Card.Body>
                <Card.Title style={{textAlign:'center'}} >Kodaikanal </Card.Title>        
                  <div className='text-center ' style={{borderTopStyle:"solid",borderTopColor:"black",borderTopWidth:"1px"}}>
                  <i class="fas fa-car m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i> 
                  <i class="fa-solid fa-martini-glass-citrus m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                  <i class="fab fa-fly m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                  <i class="fa-solid fa-umbrella-beach m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                  <i class="fa-solid fa-bell m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                  </div>
                </Card.Body>
              </Card>
            </div>     

            <div className='col-12 col-lg-4 mb-5'>
            <Card style={{ width: '350px',height:'350px'}} onClick={() => navigate('/kerala')}>
              <Card.Img variant="top" src="https://wallpaperset.com/w/full/e/c/7/92428.jpg"alt='Kerala'style={{height:'250px'}}/>
              <Card.Body>
                <Card.Title style={{textAlign:'center'}} >Kerala </Card.Title>        
                  <div className='text-center ' style={{borderTopStyle:"solid",borderTopColor:"black",borderTopWidth:"1px"}}>
                  <i class="fas fa-car m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i> 
                  <i class="fa-solid fa-martini-glass-citrus m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                  <i class="fab fa-fly m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                  <i class="fa-solid fa-umbrella-beach m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                  <i class="fa-solid fa-bell m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                  </div>
                </Card.Body>
              </Card>
            </div>  
            <div className='col-12 col-lg-4 mb-5'>
            <Card style={{ width: '350px',height:'350px'}} onClick={() => navigate('/kollihills')}>
              <Card.Img variant="top" src="https://www.holidify.com/images/bgImages/KOLLI-HILLS.jpg "alt='Kolli Hills' style={{height:'300px'}} />
              <Card.Body>
                <Card.Title style={{textAlign:'center'}} >Kolli Hills </Card.Title>        
                  <div className='text-center ' style={{borderTopStyle:"solid",borderTopColor:"black",borderTopWidth:"1px"}}>
                  <i class="fas fa-car m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i> 
                  <i class="fa-solid fa-martini-glass-citrus m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                  <i class="fab fa-fly m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                  <i class="fa-solid fa-umbrella-beach m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                  <i class="fa-solid fa-bell m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                  </div>
                </Card.Body>
              </Card>
            </div>  
            <div className='col-12 col-lg-4 mb-5'>
            <Card style={{ width: '350px',height:'350px'}} onClick={() => navigate('/coimbatore')}>
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.xaXirxF2i-mqp0TJyt_5owHaF-?w=226&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"alt='Coimbatore' style={{height:'220px'}} />
              <Card.Body>
                <Card.Title style={{textAlign:'center'}} >Coimbatore </Card.Title>        
                  <div className='text-center ' style={{borderTopStyle:"solid",borderTopColor:"black",borderTopWidth:"1px"}}>
                  <i class="fas fa-car m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i> 
                  <i class="fa-solid fa-martini-glass-citrus m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                  <i class="fab fa-fly m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                  <i class="fa-solid fa-umbrella-beach m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                  <i class="fa-solid fa-bell m-3" style={{borderRightStyle:"solid",borderRightColor:"black",borderRightWidth:"1px"}}></i>
                  </div>
                </Card.Body>
              </Card>
            </div>  
          </div>
        </div>
    </div>
  );
}

export default Ourdestination;


