import React from "react";
import ReactDOM from "react-dom";
import Formulario from "./components/Formulario";
// import Lista from "./components/Lista";
// import {Lista2, Item } from "./components/Lista2";
// import App from "./components/App";
// import App2 from "./components/App2";
// import App3 from "./components/App3";
// import App4 from "./components/App4";
// import App5 from "./components/App5";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 title="MewoLis" text="My name is Katz and I love meowling!"/> */}
    {/* <App2 title="MewoLis">My name is Katz and I love meowling!</App2>

    <App2 title="MewoLis2">My name is Katz and I love meowling2!</App2> */}
    {/* <App3 /> */}
    {/* <App4 /> */}
    {/* <App5 /> */}
    {/* <Lista /> */}
    {/* <Lista2>
      Texto1
      <Item key={999} id={999} completo={false}>
        Teste1
      </Item>
      <Item key={998} id={998} completo={true}>
        Teste2
      </Item>
      <Item />
    </Lista2> */}
    <Formulario />

  </React.StrictMode>,
  document.getElementById("root")
);
