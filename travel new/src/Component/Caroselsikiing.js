import Carousel from 'react-bootstrap/Carousel';
import '../App.css'
function Carouselsikiing() {
  return (
    <Carousel className='size' style={{paddingTop:'0px'}} > 
      <Carousel.Item>
          <img className="d-block  heightw" src="https://www.tripsavvy.com/thmb/6F6BCH0iSZsqRu6ecalX4T8IwPM=/5306x3537/filters:fill(auto,1)/mid-adult-man-skiing-down-mountain--golden--british-columbia--canada-480984215-5b50d2f2c9e77c005b1b87be.jpg" alt="First slide" />
           <Carousel.Caption>
             <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Sikiing</h1>
           </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block heightw"src="https://www.snowbus.co.uk/Media/shutterstock_1254779362.jpg"alt="Second slide"/>
         <Carousel.Caption>
           <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Sikiing</h1>
         </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block  heightw"src="https://www.ispo.com/sites/default/files/styles/facebook/public/2018-12/000135870.jpg?h=881f65d3&itok=gegm9H8G"alt="First slide"/>
         <Carousel.Caption>
           <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Sikiing</h1>  
         </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Carouselsikiing;