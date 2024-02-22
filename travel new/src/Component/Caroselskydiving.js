import Carousel from 'react-bootstrap/Carousel';
import '../App.css'
function Carouselskydiving() {
  return (
    <Carousel className='size' style={{paddingTop:'0px'}} > 
      <Carousel.Item>
          <img className="d-block  heightw" src="https://wallpaperaccess.com/full/492167.png" alt="First slide" />
           <Carousel.Caption>
             <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Skydiving</h1>
           </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block heightw"src="https://wallpapercave.com/wp/wp2025638.jpg"alt="Second slide"/>
         <Carousel.Caption>
           <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Skydiving</h1>
         </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block  heightw"src="https://th.bing.com/th/id/R.c29f2bd95cb86d11322cbdc73a6cbf10?rik=ugCA82zvp%2fVmow&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-2%2fSky-Diving-Wallpaper-HD-06375.jpg&ehk=awLWdZLAXKSoqaxd0snuEvZ6rfPFAL9oyfu7sW0cdvg%3d&risl=&pid=ImgRaw&r=0"alt="First slide"/>
         <Carousel.Caption>
           <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Skydiving</h1>  
         </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Carouselskydiving;