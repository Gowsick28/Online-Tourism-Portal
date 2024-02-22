import Carousel from 'react-bootstrap/Carousel';
import '../App.css'
function Carouselsufring() {
  return (
    <Carousel className='size' style={{paddingTop:'0px'}} > 
      <Carousel.Item>
          <img className="d-block  heightw" src="https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-Wave-Picture.jpg" alt="First slide" />
           <Carousel.Caption>
             <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Sufring</h1>
           </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block heightw"src="https://getwallpapers.com/wallpaper/full/a/2/b/1321712-free-hd-wave-wallpaper-1920x1280-for-ipad-2.jpg"alt="Second slide"/>
         <Carousel.Caption>
           <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Sufring</h1>
         </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block  heightw"src="https://th.bing.com/th/id/OIP.l4TOc93J6ms2ylxKyTxH1wHaE8?w=600&h=400&rs=1&pid=ImgDetMain"alt="First slide"/>
         <Carousel.Caption>
           <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Sufring</h1>  
         </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Carouselsufring;