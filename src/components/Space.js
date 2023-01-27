import React from 'react';

export default funcion Space({ onClick, value }) {
    return (
        <button onClick={onClick}>{value}</button>
        );
    }