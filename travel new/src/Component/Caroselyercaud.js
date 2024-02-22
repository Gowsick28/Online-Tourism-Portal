import Carousel from 'react-bootstrap/Carousel';
import '../App.css'
function Carouselyercaud() {
  return (
    <Carousel className='size' style={{paddingTop:'0px'}} >
      
      <Carousel.Item>
        <img className="d-block  heightw" src="https://i.ytimg.com/vi/DJTOajVEiV4/maxresdefault.jpg" alt="First slide" />
            <Carousel.Caption>
             <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}> Yercaud</h1>
            </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block  heightw" src="https://2.bp.blogspot.com/-cQW0Tu0h46k/T2s1fpPbbXI/AAAAAAAAZXY/IRuo476XkcE/s1600/VilangankunnuPark.jpg" alt="First slide" />
            <Carousel.Caption>
             <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Yercaud</h1>
            </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img className="d-block  heightw" src="https://cdn1.goibibo.com/voy_ing/t_g/1ec948028c4f11e6ae2c0a9df65c8753.jpg" alt="First slide" />
            <Carousel.Caption>
             <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Yercaud</h1>
            </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Carouselyercaud;