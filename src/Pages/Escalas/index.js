import React, {useState, useEffect} from 'react';
import {Container, Grid} from "@material-ui/core";
import moment from 'moment';
import firebase from '../../Database/Connection';

import TabelaEscalas from './TabelaEscalas';
import Header from '../../Components/Header/Header'

const Escalas = () => {
  const [ubs, getUbs] = useState("");

  useEffect(()=>{
    alert(administrador);
  },[])

  return(
    <main>
      <Header/>
      <Container>
        <Grid className="tituloSecao" container spacing={3} alignItems="center">
          <Grid item xs={9} >
              <h1>Tabela de escala</h1>
              <h2>Escala do dia: <span>{moment().day(1).format('DD[/]MM[/]YYYY')}</span> ao dia: <span>{moment().day(5).format('DD[/]MM[/]YYYY')}</span> </h2>
          </Grid>
        </Grid>
        {
          
          moment().format('DD[/]MM[/]YYYY') === moment().day(4).format('DD[/]MM[/]YYYY')
          ||
          moment().format('DD[/]MM[/]YYYY') === moment().day(5).format('DD[/]MM[/]YYYY')
          ||
          moment().format('DD[/]MM[/]YYYY') === moment().day(6).format('DD[/]MM[/]YYYY')
          ||
          moment().format('DD[/]MM[/]YYYY') === moment().day(7).format('DD[/]MM[/]YYYY')
          &&
          true
          ? 
          <TabelaEscalas/> 
          : 
          "Nadie aqui."
        }
        
      </Container>
    </main>
  )
}
export default Escalas;