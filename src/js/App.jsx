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
   this.didFinish();
   this.setState({
     turno: this.state.turno === JUGADORX ? JUGADOR0 : JUGADORX,
     valores: this.state.valores
   });
 },

 didFinish: function(){
   var winner = null;
   for(var f =0; i < valores.length; f++){
     if(valores[f][0] == valores[f][1] == valores[f][2]){
       winner = this.state.turno;
     }
   }
    for(var c; c < valores[0][0].length; c++){
      if(valores[0][c] == fila[1][c] == fila[2][c]){
        winner = this.state.turno;
      }
    }
    if((valores[0][0] == valores[1][1] == valores[2][2])){
      winner = this.state.turno;
    }
    if(valores[2][0]== valores[1][1]==valores[0][2]){
      winner = this.state.turno;
    }
    if(winner){alert("Terminado");}
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
