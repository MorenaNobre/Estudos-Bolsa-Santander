import React from 'react';

class App2 extends React.Component {
  //está indicando useless constructor com relação a props - já deve estar atualizado para outra forma de utilização de props -> método legado e não deve ser utilizado em aplicações mais atualizadas (jun/2021). Está sendo utilizado aqui por indicação de estudo.
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <div className="box">
          <div id="title">{this.props.title}</div>
          {/* <div id="text">{this.props.text}</div> */}
          <div id="text">{this.props.children}</div>
        </div>
      </>
    )
  }
  //o children acessa o texto que foi colocado dentro do component App2 no arquivo index.js
}

export default App2