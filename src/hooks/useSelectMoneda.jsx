import {useState, useEffect} from 'react'
import styled from '@emotion/styled';

const Label = styled.label`
    display: block;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 5px;
`

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px;
    
`

const Option = styled.option`
    color: #000;
    font-size: 20px;
`;


const selectMonedas = (label, opciones) => {
   
    const [state, setState] = useState('');

    const SelectMonedas = () =>(
        <>
            <Label htmlFor="">{label}</Label>
            <Select
                value={state}
                onChange={e => setState(e.target.value)}
            >
                <Option value="">-- Seleccione --</Option>
                {
                    opciones.map(opcion => (
                        <Option
                            key={opcion.id}
                            value={opcion.id}
                        >
                            {opcion.nombre}
                        </Option>
                    ))
                }

            </Select>
        
        </>

        
    )

    return [state, SelectMonedas];
}



export default selectMonedas
