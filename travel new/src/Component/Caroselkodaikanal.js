import Carousel from 'react-bootstrap/Carousel';
import '../App.css'
function Carouselkodaikanal() {
  return (
    <Carousel className='size' style={{paddingTop:'0px'}}>
      
      <Carousel.Item>
        <img className="d-block  heightw" src="https://media-cdn.tripadvisor.com/media/photo-s/09/f3/4b/81/pillar-rocks.jpg" alt="First slide" />
            <Carousel.Caption>
             <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Kodaikanal</h1>
            </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block  heightw" src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1043311411_20191122105257.jpg" alt="First slide" />
            <Carousel.Caption>
             <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Kodaikanal</h1>
            </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img className="d-block  heightw" src="https://toptravelpost.com/wp-content/uploads/2022/08/poombarai-village-kodaikanal-popular-tourist-place.jpg" alt="First slide" />
            <Carousel.Caption>
             <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Kodaikanal</h1>
            </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Carouselkodaikanal;