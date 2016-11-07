(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Cabecera = require('./Cabecera.jsx');
var Tablero = require('./Tablero.jsx');
var Boton = require('./Boton.jsx');
var ContadorMov = require('./ContadorMov.jsx');

var JUGADORX = "jugador 1 - las X";
var JUGADOR0 = "jugador 2 - los 0";
var VALORES = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];

var App = React.createClass({
  displayName: 'App',

  getInitialState: function getInitialState() {
    return {
      turno: JUGADORX,
      valores: VALORES,
      playingGame: true,
      numberMov: 0
    };
  },

  appClick: function appClick(numeroFila, numberoColumna) {
    var valores = this.state.valores;
    var nuevoValor = this.state.turno === JUGADORX ? 'X' : '0';
    valores[numeroFila][numberoColumna] = nuevoValor;
    this.setState({
      turno: this.state.turno === JUGADORX ? JUGADOR0 : JUGADORX,
      valores: this.state.valores,
      numberMov: this.state.numberMov + 1
    });
    var gameWinner = this.didFinish(this.state.turno, valores);
    if (gameWinner) {
      alert("Ganó el: " + gameWinner);
      this.setState({
        playingGame: false
      });
    }
  },
  //Función que comprueba si ganó algún usuario y lo devuelve
  didFinish: function didFinish(turno, valores) {
    var winner = null;
    for (var f = 0; f < valores.length; f++) {
      if (valores[f][0] == valores[f][1] && valores[f][0] == valores[f][2]) {
        if (valores[f][0] != '-') {
          winner = turno;
        }
      }
    }
    for (var c = 0; c < valores[0].length; c++) {
      if (valores[0][c] == valores[1][c] && valores[0][c] == valores[2][c]) {
        if (valores[0][c] != '-') {
          winner = turno;
        }
      }
    }
    if (valores[0][0] == valores[1][1] && valores[1][1] == valores[2][2]) {
      if (valores[1][1] != '-') {
        winner = turno;
      }
    }
    if (valores[2][0] == valores[1][1] && valores[1][1] == valores[0][2]) {
      if (valores[1][1] != '-') {
        winner = turno;
      }
    }
    return winner;
  },
  nuevaPartidaClick: function nuevaPartidaClick() {
    this.setState({
      turno: JUGADORX,
      valores: [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']],
      playingGame: true,
      numberMov: 0
    });
  },
  render: function render() {
    var texto = "Turno del " + this.state.turno;
    return React.createElement(
      'div',
      null,
      React.createElement(Cabecera, { texto: texto }),
      React.createElement(ContadorMov, { texto: this.state.numberMov }),
      React.createElement(Tablero, { valores: this.state.valores, manejadorTableroClick: this.appClick, playingGame: this.state.playingGame }),
      React.createElement(Boton, { nuevaPartidaClick: this.nuevaPartidaClick })
    );
  }
});
module.exports = App;

},{"./Boton.jsx":2,"./Cabecera.jsx":3,"./ContadorMov.jsx":5,"./Tablero.jsx":6}],2:[function(require,module,exports){
"use strict";

var Boton = React.createClass({
  displayName: "Boton",

  manejaClick: function manejaClick() {
    this.props.nuevaPartidaClick();
  },
  render: function render() {
    return React.createElement(
      "button",
      { className: "clickable", onClick: this.manejaClick },
      "Nueva partida"
    );
  }
});
module.exports = Boton;

},{}],3:[function(require,module,exports){
"use strict";

var Cabecera = React.createClass({
  displayName: "Cabecera",

  render: function render() {
    return React.createElement(
      "header",
      { className: "cabecera" },
      this.props.texto
    );
  }
});
module.exports = Cabecera;

},{}],4:[function(require,module,exports){
'use strict';

var casillaStyle = {
  height: '100px',
  width: '100px'
};

var Casilla = React.createClass({
  displayName: 'Casilla',

  casillaClick: function casillaClick() {
    if (this.props.valor === "-" && this.props.playingGame) {
      this.props.manejadorClick(this.props.indiceFila, this.props.indiceColumna);
    }
  },
  render: function render() {
    return React.createElement(
      'button',
      { style: casillaStyle, className: this.props.valor === "-" && this.props.playingGame ? "clickable" : "no_clickable", onClick: this.casillaClick },
      this.props.valor,
      ' '
    );
  }
});
module.exports = Casilla;

},{}],5:[function(require,module,exports){
"use strict";

var Contador = React.createClass({
  displayName: "Contador",

  render: function render() {
    return React.createElement(
      "p",
      null,
      this.props.texto
    );
  }
});
module.exports = Contador;

},{}],6:[function(require,module,exports){
"use strict";

var Casilla = require("./Casilla.jsx");

var Tablero = React.createClass({
  displayName: "Tablero",

  tableroClick: function tableroClick(numeroFila, numeroColumna) {
    this.props.manejadorTableroClick(numeroFila, numeroColumna);
  },
  render: function render() {
    var tablero = this.props.valores.map(function (valoresFila, indiceFila) {
      var fila = valoresFila.map(function (valor, indiceColumna) {
        var mykey = "" + indiceFila + indiceColumna;
        return React.createElement(Casilla, { valor: valor, indiceFila: indiceFila,
          indiceColumna: indiceColumna, key: mykey, manejadorClick: this.tableroClick, playingGame: this.props.playingGame });
      }, this);
      return React.createElement(
        "div",
        null,
        fila
      );
    }, this);
    return React.createElement(
      "div",
      null,
      tablero
    );
  }
});
module.exports = Tablero;

},{"./Casilla.jsx":4}],7:[function(require,module,exports){
"use strict";

var App = require("./App.jsx");
ReactDOM.render(React.createElement(App, null), document.getElementById('contenedor'));

},{"./App.jsx":1}]},{},[7]);
