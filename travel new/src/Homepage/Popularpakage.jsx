
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function Popularpackage() {
  const navigate = useNavigate();
  return (
    <div className=" bgimage" >
    <h3  className=" pt-5  text-center" style={{color:'black'}}>Adventure Packages</h3>
    <p className=" pb-5 text-center" style={{color:'black'}}>Jobs fill your pocket, but adventures fill your soul.</p>

    <div className='container pb-5 '>
      <div className='row'>
        <div className='col-12 col-lg-4 mb-5'  >
      <Card style={{ width: '350px',height:'430px' }} onClick={()=>navigate('/sufringplaces')}>
        <Card.Img variant="top" src="http://getwallpapers.com/wallpaper/full/5/a/8/276197.jpg" style={{height:'500px'}} alt='sufring' />
        <Card.Body>
          <Card.Title>Surfing</Card.Title>
          <Card.Text>
          You can't stop the waves, but you can learn to surf.
          
          </Card.Text>
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
      <Card style={{ width: '350px',height:'430px' }} onClick={()=>navigate('/skydiving')}>
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.6nv2mTbBOe6LQ2XMDyc_TQHaFj?w=248&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"style={{height:'235px'}} />
        <Card.Body>
          <Card.Title>Sky Diving</Card.Title>
          <Card.Text>
          Hold on your breath daredevils ’cause you could go skydiving
          
          </Card.Text>
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
      <Card style={{ width: '350px',height:'430px' }}  onClick={()=>navigate('/sikiing')}>
        <Card.Img variant="top" src="https://www.wallpaperama.com/post-images/wallpapers/men/skiing.jpg" alt='sikiing' style={{height:'235px'}}/>
        <Card.Body>
          <Card.Title>Sikiing</Card.Title>
          <Card.Text>
          Skiing is a Dance, and the Mountain Always Leads.
          
          </Card.Text>
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

export default Popularpackage;


