import React from 'react'
import styled from '@emotion/styled'

const ContenidoInfo = styled.div`
 
    column-gap: 10px;
    background-color: rgba(236, 227, 227, 0.151);
    padding: 20px;
`
const Precio = styled.p`
    font-size: 35px;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;

`
const TextosResultados = styled.p`
    font-size: 20px;
    margin-bottom: 0;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
`
const SPAN = styled.span`

`
const ContenidoIMG = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
`

const IMG = styled.img`

    width: 200px;

`

const ResultadosConexion = ({resultados}) => {

    const {
        CHANGEPCT24HOUR,
        PRICE,
        LOWDAY,
        HIGHDAY,
        IMAGEURL
    } = resultados;

    
    return (
        <ContenidoInfo>
            <ContenidoIMG>
                <IMG
                    src={`https://cryptocompare.com/${IMAGEURL}`}
                    alt={'Imagen de critomonedas'}
                />
            </ContenidoIMG>
          

            <div>
                <Precio>Su precio es de: <SPAN>{PRICE}</SPAN></Precio>
                <TextosResultados>El precio mas bajo del dia es de: <SPAN>{LOWDAY}</SPAN></TextosResultados>
                <TextosResultados>El precio mas bajo del dia es de: <SPAN>{HIGHDAY}</SPAN></TextosResultados>
                <TextosResultados>Porcentaje de Cambio: <SPAN>{CHANGEPCT24HOUR}%</SPAN></TextosResultados>

            </div>
            

        </ContenidoInfo>
    )
}

export default ResultadosConexion
