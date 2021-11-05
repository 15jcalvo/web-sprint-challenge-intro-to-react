import React from 'react';
// import styled from 'styled-components';

const Character = props => {
    const { char } = props;
    return (
    <h2>{char.name}</h2>
    )
}
export default Character