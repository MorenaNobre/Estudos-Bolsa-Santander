import React from "react";

class App extends React.Component {
  render() {
    return (
      //como usar js dentro deste HTML
      <>
        <h1>Meow-llo!</h1>
        <p>You freak meow!</p>
        <p>
          {new Date().toLocaleString('pt-BR')}
        </p>
      </>
    );
  }
}

//Vamos contruir um componente utilizando classe
// class App extends React.Component {
//   //é solicitado que o objeto App tenha um método render
//   //que é para saber o que ele precisa renderizar na tela ao usar esse componente
//   render() {
//     return (
//       //JSX
//       <>
//         <h1>Meow -llo!</h1>
//         <p>Lets meow on the roof tops!</p>
//       </>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       Hello Meow!
//     </div>
//   );
// }

export default App;
