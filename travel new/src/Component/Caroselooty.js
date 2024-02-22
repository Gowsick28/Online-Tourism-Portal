import Carousel from "react-bootstrap/Carousel";
import "../App.css";
function Carouselooty() {
  return (
    <Carousel className="size" style={{ paddingTop: "0px" }}>
      <Carousel.Item>
        <img
          className="d-block  heightw"
          src="https://wallpaperaccess.com/full/2851952.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Ooty</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block heightw"
          src="https://wallpaperaccess.com/full/2851947.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Ooty</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block  heightw"
          src="https://wallpaperaccess.com/full/2852215.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 style={{ paddingBottom: "150px", fontSize: "60px" }}>Ooty</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Carouselooty;
