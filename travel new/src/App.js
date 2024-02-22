import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepagecontent from "./Homepage/Homepagecontent";
import Aboutpage from "./About/Aboutpage";
import Ooty from "./Component/Ooty";
import Ootyguide from "./Component/Ootyguide";
import Yercaud from "./Component/Yercaud";
import Yercaudguide from "./Component/Yercaudguide";
import Kodaikanal from "./Component/Kodaikanal";
import Kodaikanalguide from "./Component/Kodaikanalguide";
import Kerala from "./Component/Kerala";
import Keralaguide from "./Component/Keralaguide";
import Kollihills from "./Component/Kollihills";
import Kollihillsguide from "./Component/Kollihillsguide";
import Sufringplaces from "./Component/Sufringplaces";
import Skydiving from "./Component/Skydiving";
import Sikiing from "./Component/Sikiing";
import Cancellation from "./Homepage/Cancellation";
import Privacypolicy from "./Homepage/Privacypolicy";
import Adminpage from "./Homepage/Adminpage";
import ScrollToTop from "./Component/Scrolltotop";
import Coimbatore from "./Component/Coimbatore";
import Coimbatoreguide from "./Component/Coimbatoreguide";
import Termsandconditions from "./Homepage/Termsandconditions";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route Component={Homepagecontent} path="/"></Route>
        <Route Component={Aboutpage} path="/about"></Route>
        <Route Component={Ooty} path="/ooty"></Route>
        <Route Component={Ootyguide} path="/Ootyguide"></Route>
        <Route Component={Yercaud} path="/yercaud"></Route>
        <Route Component={Yercaudguide} path="/yercaudguide"></Route>
        <Route Component={Kodaikanal} path="/kodaikanal"></Route>
        <Route Component={Kodaikanalguide} path="/kodaikanalguide"></Route>
        <Route Component={Kerala} path="/Kerala"></Route>
        <Route Component={Keralaguide} path="/Keralaguide"></Route>
        <Route Component={Kollihills} path="/kollihills"></Route>
        <Route Component={Kollihillsguide} path="/kollihillsguide"></Route>
        <Route Component={Coimbatore} path="/coimbatore"></Route>
        <Route Component={Coimbatoreguide} path="/coimbatoreguide"></Route>
        <Route Component={Sufringplaces} path="/sufringplaces"></Route>
        <Route Component={Skydiving} path="/skydiving"></Route>
        <Route Component={Sikiing} path="/sikiing"></Route>
        <Route Component={Cancellation} path="/cancellation"></Route>
        <Route Component={Privacypolicy} path="/privacypolicy"></Route>
        <Route Component={Adminpage} path="/adminpage"></Route>
        <Route
          Component={Termsandconditions}
          path="/termsandconditions"
        ></Route>
      </Routes>
    </>
  );
}

export default App;
