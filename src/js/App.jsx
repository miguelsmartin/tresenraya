const Cabecera = require('./Cabecera.jsx');
const Tablero = require('./Tablero.jsx');

const JUGADORX = "jugador 1 - las X";
const JUGADOR0 = "jugador 2 - los 0";
const VALORES = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];

var App = React.createClass({
 getInitialState: function () {
   return {
     turno: JUGADORX,
     valores: VALORES
   };
  },

 appClick: function (numeroFila, numberoColumna) {
   let valores = this.state.valores;
   let nuevoValor = this.state.turno === JUGADORX ? 'X' : '0';
   valores[numeroFila][numberoColumna] = nuevoValor;
   var gameWinner = this.didFinish(this.state.turno, valores);
   this.setState({
     turno: this.state.turno === JUGADORX ? JUGADOR0 : JUGADORX,
     valores: this.state.valores
   });
   if(gameWinner){
     alert("Ganó el: "+gameWinner);
   }
 },

 didFinish: function(turno, valores){
   var winner = null;
  for(var f =0; f < valores.length -1 ; f++){
     if((valores[f][0] == valores[f][1]) && (valores[f][0] == valores[f][2])){
       if(valores[f][0] != '-'){
       winner = turno;}
     }
   }
  for(var c=0; c < valores[0].length -1; c++){
    if((valores[0][c] == valores[1][c]) && (valores[0][c] == valores[2][c])){
      if(valores[0][c] != '-'){
      winner = turno;}
    }
  }
  if((valores[0][0] == valores[1][1]) && (valores[1][1] == valores[2][2])){
    if(valores[1][1] != '-'){
    winner = turno;}
  }
  if((valores[2][0] == valores[1][1]) && (valores[1][1] == valores[0][2])){
    if(valores[1][1] != '-'){
    winner = turno;}
  }
  return winner;
 },
  render: function () {
   var texto = "Turno del " + this.state.turno;
   return (
     <div>
       <Cabecera texto={texto}/>
       <Tablero valores={this.state.valores} manejadorTableroClick={this.appClick}/>
     </div>
   )
 }
});
module.exports = App;
