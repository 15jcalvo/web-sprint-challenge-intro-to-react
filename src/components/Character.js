import React from 'react';

const Character = props => {
    const { char } = props;
    return (
    <h2>{char.name}</h2>
    )
}
export default Character