import {BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Service from "./components/Service";




import "./style/App.scss";
import "./style/HeaderStyle.scss";
import "./style/HomeStyle.scss";
import "./style/FooterStyle.scss";
import "./style/ContactStyle.scss";
import "./style/Mediaquery.scss";






function App() {
  return (
    
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/service" element={<Service/>}/>


          </Routes>
          <Footer/>
      </Router>
    
  );
}

export default App;
