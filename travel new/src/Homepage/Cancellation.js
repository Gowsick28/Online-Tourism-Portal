import React from "react";
import Navbarhome from "./Navbar";
import Footerhome from "./footerhome";
function Cancellation() {
  return (
    <>
      <Navbarhome />

      <h1 style={{ textAlign: "center", paddingTop: "50px", color: "black" }}>
        Cancellations
      </h1>
      <hr></hr>
      <br></br>
      <div
        style={{paddingRight:'5px',fontSize: "20px",paddingBottom: "150px",color: "black"}}>
        <ul>
          <li>
            <p>
              ​Once a booking has been made, you can reschedule your booking to
              any future date of your choice (depending on availability) or
              transfer your booking to a person of your choice. We follow a
              strict no-cancellation policy so we would request you to book only
              if you are sure about your travel.
            </p>
          </li>
          <li>
            <p>
              Rescheduling your trip is absolutely free of charge unless you
              book special dates which are valid only for particular dates (Eg.
              Christmas / Diwali / New Year etc.). For special dates, there are
              no cancellations or refunds.
            </p>
          </li>
        </ul>
      </div>
      <Footerhome />
    </>
  );
}
export default Cancellation;
