import React from "react";
import "./App.css";
import Profil from "./assets/profil.png";
import Sidebar from "./component/Sidebar";
import Category from "./component/Category";
import Games from "./component/Games";

function App() {
  return (
    <div className="App">
      <div className="kiri">
        <div className="profil">
          <img src={Profil} alt="profil" className="profil-images" />
          <h6>John Doe</h6>
        </div>
        <Sidebar />
        <div className="premium">
          Go <br /> Premium
        </div>
      </div>
      <div className="kanan">
        <h3>
          Game <span>Store</span>
        </h3>
        <Category />
        <Games />
      </div>
    </div>
  );
}

export default App;
