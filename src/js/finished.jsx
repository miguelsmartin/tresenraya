var React = require('react');
var ReactDOM = require('react-dom');
finished: function(){
  var winner = 0;
  for(var f =0; i < valores.length; f++){
    if(valores[f][0] == valores[f][1] == valores[f][2]){
      winner = this.state.turno;
    }
  }
   for(var c; c < valores[0][0].length; f++){
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
   if(winner !== 0){alert("Terminado");}
};
