var React = require('react');
var ReactDOM = require('react-dom');
var Boton = React.createClass({
 manejaClick: function(){
   this.props.nuevaPartidaClick();
 },
 render: function () {
   return (
     <button className="clickable" onClick={this.manejaClick}>
       Nueva partida
     </button>
   )
 }
});
module.exports = Boton;
