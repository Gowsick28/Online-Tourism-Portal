import Carousel from 'react-bootstrap/Carousel';
import '../App.css'
function Carouselkollihills() {
  return (
    <Carousel className='size' style={{paddingTop:'0px'}} >
      
      <Carousel.Item>
        <img className="d-block  heightw" src=" https://www.adequatetravel.com/blog/wp-content/uploads/2020/09/Kolli-Hill-Road.jpg " alt="Kolli Hills" />
            <Carousel.Caption>
             <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Kolli Hills</h1>
            </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block  heightw" src=" https://static.javatpoint.com/tourist-places/images/tourist-places-in-kolli-hills3.png " alt="Kolli Hills"  />
            <Carousel.Caption>
             <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Kolli Hills</h1>
            </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img className="d-block  heightw" src=" https://media.gadventures.com/media-server/cache/db/27/db27ccfa79809679e16856f91cb2f85e.jpg " alt="Kolli Hills"  />
            <Carousel.Caption>
             <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Kolli Hills</h1>
            </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Carouselkollihills;