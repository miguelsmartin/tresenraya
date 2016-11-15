var React = require('react');
var ReactDOM = require('react-dom');
var Contador = React.createClass({
 render: function () {
   return (
     <p>
      Número de movimientos: {this.props.texto}
    </p>
   )
 }
});
module.exports = Contador;
