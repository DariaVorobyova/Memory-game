import React, { Component }  from 'react';
import initGame from '../initGame';


class Button extends Component {
    render() {
        return (
            <button 
             className="start-button" 
             onClick={()=>initGame()}>Go</button>
        )}}
export default Button