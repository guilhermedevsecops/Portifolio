import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TelaDeAbertura from './TelaDeAbertura';
import OutraPagina from './OutraPagina';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TelaDeAbertura} />
        <Route path="/home" component={OutraPagina} />
        {/* Adicione mais rotas conforme necessário */}
      </Switch>
    </Router>
  );
};

export default App;