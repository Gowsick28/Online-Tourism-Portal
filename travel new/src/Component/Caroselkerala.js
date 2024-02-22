import Carousel from 'react-bootstrap/Carousel';
import '../App.css'
function Carouselkerala() {
  return (
    <Carousel className='size' style={{paddingTop:'0px'}} >
      
      <Carousel.Item>
        <img className="d-block  heightw" src=" http://motherindiatourtravels.in/wp-content/uploads/2017/04/Kerala-Image.jpg" alt="First slide" />
            <Carousel.Caption>
             <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Kerala</h1>
            </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block  heightw" src=" https://cdn.pixabay.com/photo/2016/03/27/17/26/water-1283199_1280.jpg" alt="First slide" />
            <Carousel.Caption>
             <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Kerala</h1>
            </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img className="d-block  heightw" src="https://3.bp.blogspot.com/-IKk-wHY12Vk/V4YjZpgYP1I/AAAAAAAABcE/GpO2zJHSlvUJ0TpR4LbXqux1QhVa7BrPgCLcB/s1600/kerala-tourism-photos2.jpg " alt="First slide" />
            <Carousel.Caption>
             <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Kerala</h1>
            </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Carouselkerala;