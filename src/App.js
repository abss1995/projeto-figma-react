import React from "react";
import "./styles.css";
import SVGbutton from "./Components/buttonSVG";
//import SVGconfig from "./Components/congifSVG"

import barData from "./Components/Bars/data.json";
import pieData from "./Components/Pies/data1.json";

import MyResponsivePie from "./Components/Pies/Pie1";
//import MyResponsivePie from "./Components/Pies/Pie2";
//import MyResponsivePie from "./Components/Pies/Pie3";
import MyResponsiveBar from "./Components/Bars/Bar";
import SearchBar from "./Components/searchbar";
import SVGdropdown from "./Components/dropdownSVG";
import SVGctrlpanel from "./Components/ctrlpanelSVG";

export default function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <SVGbutton />
      </div>
      <div className="canvas">
        <SVGctrlpanel />
        <p>Painel de controle</p>
        <div>
          <h1 style={{ textAlign: "center" }}>Painel de Controle</h1>
        </div>
        <div className="bar-container">
          <MyResponsiveBar data={barData} />
        </div>
        <div className="pie-container">
          <MyResponsivePie data={pieData} />
        </div>

        <div className="pie-container2">
          <MyResponsivePie data={pieData} />
        </div>
        <div className="pie-container3">
          <MyResponsivePie data={pieData} />
        </div>
        <div className="search-container">
          <p style={{ paddingLeft: "10px" }}>Inspeções agendadas</p>
          <SearchBar />
        </div>
        <div className="atuali-container">
          <SVGdropdown />
        </div>
      </div>
    </div>
  );
}
