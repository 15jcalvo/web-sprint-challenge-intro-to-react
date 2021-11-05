import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    margin: 10%;
`

const Character = props => {
    const { char } = props;
    return (
    <h2>{char.name}</h2>
    )
}
export default Character