import React, {Component, useState, useEffect} from 'react';
import firebase from '../../Database/Connection';
import {Grid, TextField, Button, Modal, InputLabel, FormControl, Select, MenuItem} from '@material-ui/core';
import * as moment from 'moment/moment';

import './style.css';

const AdcAtendimento = () => {

    const [nomeProfissional, setNomeProfissional] = useState('');
    const [ubs, setUbs] = useState('');
    const [nomePaciente, setNomePaciente] = useState('');
    const [procedencia, setProcedencia] = useState('');
    const [motivo, setMotivo] = useState('');
    const [atendimento, setAtendimento] = useState('');
    const [data, setData] = useState(moment().format('L'));
    const [modal, setModal] = useState(false);
    const [listaAtendimentos, setListaAtendimentos] = useState(['Médico', 'Enfermagem', 'Odontológico', 'Vacinas',
    'Curativos', 'Citologia', 'Teste rápido', 'Outros']);

    
    
    useEffect(()=>{
        
        firebase.auth.onAuthStateChanged((user)=>{
            firebase.db.collection('usuarios').doc(user.uid).get().then(
              snap => {
                setNomeProfissional(snap.data().nomeProfissional);
                setUbs(snap.data().ubs);
              }
            )
          });
    },[])

    const abrirModal = () => {
        setModal(true);
        setAtendimento(listaAtendimentos[0]);
    }
    const fecharModal = () => {
        setModal(false);
    }

    const cadastrarAtendimento = (e) =>{
        e.preventDefault();
        firebase.db.collection('teste').add({
            nomeFuncionario : nomeProfissional,
            ubs,
            nomePaciente,
            procedencia,
            motivo,
            tipoAtendimento: atendimento,
            dataAtendimento: data
        })
        e.target.reset();
    }

    return(
        <div className="atendimentoComponent">
        <Button type="button" onClick={abrirModal} variant="contained" color="primary">Adicionar Atendimento</Button>
        <Modal 
          open={modal}
          onClose={fecharModal}
          aria-labelledby="Adicionar atendimento"
          aria-describedby="Formulário de inscrição de atendimento"
        >
           

            <form className="formulario" onSubmit={cadastrarAtendimento}>
            <h1>Adicionar atendimento</h1>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField fullWidth required label="Nome do Paciente" variant="outlined" margin="normal" onChange = {e => setNomePaciente(e.target.value)  } />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth required label="Procedência" variant="outlined" margin="normal" onChange = {e => setProcedencia(e.target.value)} />
                </Grid>
                <Grid item sm={6}xs={12}>
                  <TextField fullWidth required label="Motivo" variant="outlined" margin="normal" onChange = {e => setMotivo(e.target.value)} />
                </Grid>
                <Grid item sm={6}xs={12}>
                  <FormControl required label="Atendimento" variant="filled" fullWidth margin="normal">
                    <InputLabel id="atendimentoLabel">Atendimento</InputLabel>
                    <Select
                      labelId = "atendimentoLabel"
                      id="atendimento"
                      onChange = {e => setAtendimento(e.target.value)}
                      value={atendimento}
                    >
                      {listaAtendimentos.map(tipo => (
                        <MenuItem value={tipo}>{tipo}</MenuItem>
                      ))}
                    
                    </Select>
                  </FormControl>
                </Grid>
                <Button type="submit" variant="contained" color="primary">Adicionar </Button>
              </Grid>
            </form>

        </Modal>
        
      </div>
    );
}
export default AdcAtendimento;