import React, { Component }  from 'react';
import TableColumn from './TableColumn'


class Table extends Component {
    render() {
        return (
    <table className="game-field" id="table">
        <TableColumn/>
        <TableColumn/>
        <TableColumn/>
        <TableColumn/>
        <TableColumn/>
    </table>
        )}}
export default Table