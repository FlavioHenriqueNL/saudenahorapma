import React, {useState, useEffect} from 'react';
import {Container, Button, Grid } from '@material-ui/core';
import firebase from '../../Database/Connection';
import AddAtendimento from './AdicionarAtendimento';
import TabelaAtendimento from './TabelaAtendimento';
import Header from '../../Components/Header/Header.js';
import moment from 'moment';

const Tabela = () => {

  const [nome, setNome] = useState('');
  const [ubs, setUbs] = useState('');
  const [atendimentos, setAtendimentos] = useState([]);

  useEffect(()=>{
    firebase.auth.onAuthStateChanged((logged) => {
      if(logged){
        firebase.db.collection('usuarios').doc(logged.uid).get().then(
          snap => {
            setUbs(snap.data().ubs);
            setNome(snap.data().nomeProfissional);           
          }
        );             
      }
    }) 
  },[]);

  useEffect(()=>{
    firebase.db.collection('atendimentos').where("ubs",'==',ubs).where("dataAtendimento", '==', moment().format('L')).get().then(
      snap => {
        let handleAtendimentos = [];
        snap.forEach(atendimento=>{
          
          handleAtendimentos.push({
            key: atendimento.id,
            nome: atendimento.data().nomePaciente,
            procedencia: atendimento.data().procedencia,
            motivo: atendimento.data().motivo,
            atendimento: atendimento.data().tipoAtendimento
          })
          
        })
        return setAtendimentos(handleAtendimentos);
      }
    );
  },[atendimentos, setAtendimentos, ubs]);

  return(
    <>
    <Header/>
    <Container>
      <Grid className="tituloSecao" container spacing={3} alignItems="center">
        <Grid item xs={9} >
            <h1>Lista de Atendimentos
            da Unidade: <span>{ubs}</span> </h1>
            <h2>Realizados no dia: <span>{moment().format('DD[/]MM[/]YYYY')}</span> </h2>
        </Grid>
        <Grid item xs={3} >
          <AddAtendimento className="atendimentoComponent"/>
        </Grid>
      </Grid>

      <TabelaAtendimento lista={atendimentos} />

    </Container>
    </>

  );
}

export default Tabela;


