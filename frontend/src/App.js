import { Provider } from "react-redux";
import "./App.css";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import store from "./component/store";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
