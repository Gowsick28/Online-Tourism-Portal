import React from "react";
import Navbarhome from "./Navbar";
import Footerhome from "./footerhome";

function Termsandconditions() {
  return (
    <>
      <Navbarhome />
      <h1 style={{ textAlign: "center", color: "black", paddingTop: "50px" }}>
        Terms and Conditions
      </h1>
      <hr></hr>
      <br></br>
      <div
        style={{
          paddingLeft: "10px",paddingLeft:'20px', fontSize: "20px",justifyContent:'center',
          color: "black",
          paddingBottom: "00px",
        }}
      >
        <p>
          Though all efforts have been made to ensure the accuracy and currency
          of the content on this website, this should not be construed as a
          statement of law or used for any legal purposes. Incase of any
          ambiguity or doubts, users are advised to verify/check with the
          Ministry and/or other sources, and to obtain appropriate professional
          advice.
        </p>
        <p>
          Under no circumstances will this Ministry be liable for any expense,
          loss or damage including, without limitation, indirect or
          consequential loss or damage, or any expense, loss or damage , or loss
          of use, of data, arising out of or in connection with the use of this
          website.
        </p>
        <p>
          These terms and conditions shall be governed by and construed in
          accordance with the Indian Laws. Any dispute arising under these terms
          and conditions shall be subject to the jurisdiction of the courts of
          India.
        </p>
        <p>
          The information posted on these website could include hypertext links
          or pointers to information created and maintained by
          non-Government/private organizations. Ministry of Tourism is providing
          these links and pointers solely for your information and convenience.
          When you select a link to an outside website, you are leaving the
          TRIPTY website and are subject to the privacy and security policies of
          the owners/sponsors of the outside website.
        </p>
        <p>
          Tripty does not guarantee the availability of such linked pages at all
          times.
        </p>
        <p>
          Tripty cannot authorise the use of copyrighted materials contained in
          linked websites. Users are advised to request such authorisation from
          the owner of the linked website.
        </p>
        <p>
          Tripty does not guarantee the linked websites comply with Indian
          Government Web Guidelines.
        </p>
      </div>
      <br></br>

      <Footerhome />
    </>
  );
}

export default Termsandconditions;
