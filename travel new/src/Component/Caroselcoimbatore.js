import Carousel from 'react-bootstrap/Carousel';
import '../App.css'
function CarouselCoimbatore() {
  return (
    <Carousel className='size' style={{paddingTop:'0px'}} >
      
      <Carousel.Item>
        <img className="d-block  heightw" src="https://www.adotrip.com/public/images/city/master_images/5f7eb4c75f951-Coimbatore_Attractions.jpg" alt="Coimbatore" />
            <Carousel.Caption>
             <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Coimbatore</h1>
            </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block  heightw" src="  https://wallpapercave.com/wp/wp8845481.jpg  " alt="Coimbatore" />
            <Carousel.Caption>
             <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Coimbatore</h1>
            </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img className="d-block  heightw" src=" https://images.static-collegedunia.com/public/college_data/images/campusimage/15826952126.jpg" alt="Coimbatore" />
            <Carousel.Caption>
             <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Coimbatore</h1>
            </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselCoimbatore;