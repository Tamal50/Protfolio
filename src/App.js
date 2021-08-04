import Header from "./component/Header/Header";
import Project from "./component/Project/Project";
import Protfolio from "./component/Protfolio/Protfolio";
import Topbar from "./component/Topbar/Topbar"
import "./Style/app.scss"
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
      <Protfolio></Protfolio>
      <Project></Project>
      </div>
    </div>
  );
}

export default App;
