import React from "react";
import Aboutpage from "../About/Aboutpage";
import Navbarhome from "./Navbar";
import Footerhome from "./footerhome";
function Privacypolicy() {
  return (
    <>
      <Navbarhome />
      <h1 style={{ paddingTop: "50px",paddingLeft:'20px',paddingRight:'20px', textAlign: "center", color: "black" }}>
        Privacy policy
      </h1>
      <hr></hr>
      <div
        style={{
          paddingLeft: "5px",
          fontSize: "20px",
          color: "black",
          paddingBottom: "200px",
        }}
      >
        <p>
          This Privacy Policy governs the manner in which Mantra Surfing &
          Adventure Sports Center collects, uses, maintains, and discloses
          information collected from users (each, a “User”) of the
          www.surfingindia.net website. This privacy policy applies to the Site
          and all products and services offered by Mantra Surfing & Adventure
          Sports Center.
        </p>
        <h3>Personal identification information</h3>
        <p>
          We may collect personal identification information from Users in a
          variety of ways, including, but not limited to, when Users visit our
          site, register on the site, place an order, subscribe to the
          newsletter, fill out a form, and in connection with other activities,
          services, features or resources we make available on our Site. Users
          may be asked for, as appropriate, name, email address, mailing
          address, phone number, credit card information. Users may, however,
          visit our Site anonymously. We will collect personal identification
          information from Users only if they voluntarily submit such
          information to us. Users can always refuse to supply personally
          identification information, except that it may prevent them from
          engaging in certain Site related activities.
        </p>
        <h3>Non-personal identification information</h3>
        <p>
          We may collect non-personal identification information about Users
          whenever they interact with our Site. Non-personal identification
          information may include the browser name, the type of computer, and
          technical information about Users’ means of connection to our Site,
          such as the operating system and the Internet service providers
          utilized, and other similar information.
        </p>
        <h3>Web browser cookies</h3>
        <p>
          Our Site may use “cookies” to enhance User experience. User’s web
          browser places cookies on their hard drive for record-keeping purposes
          and sometimes to track information about them. Users may choose to set
          their web browser to refuse cookies or to alert you when cookies are
          being sent. If they do so, note that some parts of the Site may not
          function properly.
        </p>
        <h3>How we use collected information</h3>
        <p>
          <ul>
            <li>
              To improve customer service: The information you provide helps us
              respond to your customer service requests and support needs more
              efficiently.
            </li>
            <li>
              To personalize user experience: We may use information in the
              aggregate to understand how our Users as a group use the services
              and resources provided on our Site.
            </li>
            <li>
              To improve our Site: We may use feedback you provide to improve
              our products and services.
            </li>
            <li>
              To run a promotion, contest, survey, or other Site feature: To
              send Users information they agreed to receive about topics we
              think will be of interest to them.
            </li>
          </ul>
        </p>
      </div>
      <Footerhome />
    </>
  );
}
export default Privacypolicy;
