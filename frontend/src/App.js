import "./App.css";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";

function App() {
  
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>);
}

export default App;
