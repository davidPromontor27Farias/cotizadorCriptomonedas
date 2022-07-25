import React from 'react'
import styled from '@emotion/styled';

const TextoAlerta = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    background-color: rgb(143, 14, 14);
    padding: 15px;
    text-transform: uppercase;
`

const Alerta = ({children}) => {
  return (
    <div>
      <TextoAlerta>{children}</TextoAlerta>
    </div>
  )
}

export default Alerta
