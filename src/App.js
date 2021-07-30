import Header from "./component/Header/Header";
import Intro from "./component/Intro/Intro";
import Protfolio from "./component/Protfolio/Protfolio";
import Work from "./component/Work/Work";
import Topbar from "./component/Topbar/Topbar"
import "./app.scss"
import { useState } from "react";
import Menu from "./component/Menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div  className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} ></Topbar>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} ></Menu>
      <div className="section">
      <Header></Header>
      <Intro></Intro>
      <Protfolio></Protfolio>
      <Work></Work>
      </div>
    </div>
  );
}

export default App;
