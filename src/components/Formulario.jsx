import {useState, useEffect} from 'react'
import styled from '@emotion/styled';
import selectMonedas from '../hooks/useSelectMoneda';
import { monedas } from '../data/monedas';
import Alerta from './Alerta';


const Input = styled.input`
    padding: 10px;
    display: block;
    width: 100%;
    font-size: 25px;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 10px;
    border: none;
    background-color: rgb(52, 105, 22);
    color: #FFF;
    border-radius: 10px;
`

const Form = styled.form`
    background-color:  rgba(245, 244, 244, 0.123);
    padding: 15px;
`

const Formulario = ({setMonedas}) => {
    const [criptos, setCriptos] = useState([]);
    const [moneda, SelectMonedas] = selectMonedas('Seleccione su moneda: ', monedas);
    const [criptomoneda, SelectCriptomoneda] = selectMonedas('Seleccione su Criptomoneda', criptos);
    const [error, setError] = useState(false);



    useEffect(()=>{

        const consultaAPI = async () =>{

            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            const objetoCriptos = resultado.Data.map( cripto =>{
                
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }

                return objeto;
            })
            setCriptos(objetoCriptos)
           
            
        }

        consultaAPI();
    }, []);

    const validacionCampos = e =>{
        e.preventDefault();

        if([moneda, criptomoneda].includes('')){
            setError(true);

            return;
        }

        setError(false);

        setMonedas({
            moneda,
            criptomoneda
        })
    }


    return (
        <>
            <Form action="" onSubmit={validacionCampos}>

                
                <SelectMonedas/>

                <SelectCriptomoneda/>

                <Input type="submit" value="Cotizar" />
                

            </Form>

            {error && <Alerta>Alguno, o todos los campos estan vacios</Alerta>}
        </>
    )
}

export default Formulario
