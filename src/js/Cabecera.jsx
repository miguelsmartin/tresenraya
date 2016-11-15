var React = require('react');
var ReactDOM = require('react-dom');
import { Panel } from 'react-bootstrap';

var Cabecera = React.createClass({
 render: function () {
   if (this.props.estado == false) {
     return (
     <header className="cabecera">
       <Panel header="Fin del Juego. Pulse el boton de Nueva Partida" bsStyle="warning">
    </Panel>
     </header>
   )
   }
    else if (this.props.turno === "jugador 2 - los 0") {
     return (
     <header className="cabecera">
       <Panel header={this.props.texto} bsStyle="danger">
    </Panel>
     </header>
   )
   }else{
     return (
   <header className="cabecera">
     <Panel header={this.props.texto} bsStyle="primary">
  </Panel>
   </header>
 )
 }
}});
module.exports = Cabecera;
