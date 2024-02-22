import Carousel from 'react-bootstrap/Carousel';

function Carouselhome() {
  return (
    <Carousel className='size'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.yudaah.com/demo/bootstrap-travel-website-templates/assets/images/slider/slid_2.jpg"
          alt="First slide"
        />
        <Carousel.Caption >
          <h1 style={{fontSize:'100px',color:'#334960',animation: '3s ease-in 1s'}}>Enjoy your trip </h1>
          <p style={{paddingBottom:'300px',fontSize:'20px',color:'lightcyan'}}>There's no place like home, but we can help make it feel that way...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.yudaah.com/demo/bootstrap-travel-website-templates/assets/images/slider/slid_1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption >
          <h1 style={{fontSize:'100px',color:'#334960'}}>Enjoy your trip </h1>
          <p style={{paddingBottom:'300px',fontSize:'20px',color:'lightblue'}}>There's no place like home, but we can help make it feel that way...</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.yudaah.com/demo/bootstrap-travel-website-templates/assets/images/slider/slid_2.jpg"
          alt="First slide"
        />
        <Carousel.Caption >
          <h1 style={{fontSize:'100px',color:'#334960',animation: '3s ease-in 1s'}}>Enjoy your trip </h1>
          <p style={{paddingBottom:'300px',fontSize:'20px',color:'lightcyan'}}>There's no place like home, but we can help make it feel that way...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.yudaah.com/demo/bootstrap-travel-website-templates/assets/images/slider/slid_1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption >
          <h1 style={{fontSize:'100px',color:'#334960'}}>Enjoy your trip </h1>
          <p style={{paddingBottom:'300px',fontSize:'20px',color:'lightblue'}}>There's no place like home, but we can help make it feel that way...</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Carouselhome;