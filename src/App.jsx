import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import IMGCripto from './img/criptoImg.jpg';
import ResultadosConexion from './components/ResultadosConexion';
import Spinner from './components/Spinner';



const Contenedor = styled.div`
  max-width: 90rem;
  width: 80%;
  margin: 40px auto;


  @media (min-width: 980px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;

  }
  
`;

const IMG = styled.img`
  display:block;
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
`;

const Heading = styled.p`
  text-align: center;
  font-size: 2.5rem;
  text-transform: uppercase;
`;

function App() {

  const [monedas, setMonedas] = useState({});
  const [resultados, setResultados] = useState({});
  const [cargando, setCargando] = useState(false);


  //Debe de ir dentro de un State para que escuche los cambios que se encuentren en el objeti de monedas

  useEffect(()=> {
    if(Object.keys(monedas).length > 0){
        
        const cotizarCriptomoneda = async () =>{

          //Activamos el spinner
          setCargando(true);

          const { moneda, criptomoneda} = monedas;

          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();

          setResultados(resultado.DISPLAY[criptomoneda][moneda]);

          setCargando(false);
        }

        cotizarCriptomoneda();
      }

  }, [monedas])

 
  return (
    <div className="App">
      <Contenedor>

        {Object.keys(monedas).length > 0 ? (
          <ResultadosConexion
            resultados={resultados}
          /> )
          : 
          (
          <IMG
            src={IMGCripto}
          />
        )}
        


        <div>
          <Heading>Cotizador de Criptomonedas</Heading>
          <Formulario
            setMonedas={setMonedas}
          />

        </div>

      </Contenedor>
      {cargando && <Spinner/>}

      
    </div>
  )
}

export default App
