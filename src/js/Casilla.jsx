var React = require('react');
var ReactDOM = require('react-dom');
import { Button } from 'react-bootstrap';

const casillaStyle = {
   height: '100px',
   width: '100px'
};

let Casilla = React.createClass({
   casillaClick: function () {
     if ((this.props.valor === "-") && this.props.playingGame) {
      this.props.manejadorClick(this.props.indiceFila, this.props.indiceColumna);
     }
   },
   render: function () {
     if (this.props.valor === "-") {

       return (
         <Button bsStyle="success" style={casillaStyle}  className={((this.props.valor === "-") && this.props.playingGame) ?
           "clickable" : "no_clickable"} onClick={this.casillaClick}>
           {this.props.valor} </Button>
       )
     }
     else if (this.props.valor === "0") {

       return (
         <Button bsStyle="danger"  style={casillaStyle}  className={((this.props.valor === "-") && this.props.playingGame) ?
           "clickable" : "no_clickable"} onClick={this.casillaClick}>
           {this.props.valor} </Button>
       )

     }
   else {
     return (
       <Button bsStyle="primary"  style={casillaStyle}  className={((this.props.valor === "-") && this.props.playingGame) ?
         "clickable" : "no_clickable"} onClick={this.casillaClick}>
         {this.props.valor} </Button>
     )

   }
}});
module.exports = Casilla;
