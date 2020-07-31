import React, {useState} from 'react';
import {Paper, TableContainer, Table, TableHead, TableRow, 
        TableBody, TableCell, TextField, Button, Accordion, AccordionSummary, 
        AccordionDetails, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './style.scss';
import moment from 'moment';
import firebase from '../../Database/Connection';

const TabelaEscalas  = () => {

  const [tabelaProfissionais, setTabelaProfissionais] = useState([
    {profissional: "Médico", segunda: "", terca: "", quarta: "", quinta: "", sexta: ""},
    {profissional: "Enfermagem", segunda: "", terca: "", quarta: "", quinta: "", sexta: ""},
    {profissional: "Téc. Enfermagem 1", segunda: "", terca: "", quarta: "", quinta: "", sexta: ""},
    {profissional: "Téc. Enfermagem 2", segunda: "", terca: "", quarta: "", quinta: "", sexta: ""},
    {profissional: "Dentista", segunda: "", terca: "", quarta: "", quinta: "", sexta: ""},
    {profissional: "ASB", segunda: "", terca: "", quarta: "", quinta: "", sexta: ""},
    {profissional: "Administrativo 1", segunda: "", terca: "", quarta: "", quinta: "", sexta: ""},
    {profissional: "Administrativo 2", segunda: "", terca: "", quarta: "", quinta: "", sexta: ""},
    {profissional: "Serviços Gerais", segunda: "", terca: "", quarta: "", quinta: "", sexta: ""},
    {profissional: "Vigilante", segunda: "", terca: "", quarta: "", quinta: "", sexta: ""},
  ]);

  const [profissionaisTarde, setProfissionaisTarde] = useState(tabelaProfissionais);
  const [profissionaisNoite, setProfissionaisNoite] = useState(tabelaProfissionais);

  const updateFieldTarde = index => e => {
    let handleTabela = [...profissionaisTarde];
    let valor = e.target.value;
    let dia = e.target.name;

    handleTabela[index][dia] = valor;

    console.log(e.target.value);    
    setProfissionaisTarde(handleTabela);
  }
  const updateFieldNoite = index => e => {
    let handleTabela = [...profissionaisNoite];
    let valor = e.target.value;
    let dia = e.target.name;

    handleTabela[index][dia] = valor;

    console.log(e.target.value);    
    setProfissionaisNoite(handleTabela);
  }

  const enviarEscala = e => {
    let confirm = window.confirm("Uma vez enviada, não poderá mais ser modificada. Deseja enviar escala?");
    if(confirm){
      console.log(profissionaisTarde);
      firebase.db.collection("escalas").add({
        data: moment().add('3','d').day(1).format('DD[/]MM[/]YYYY'),
        escala: profissionaisTarde,
        ubs: "Teste",
        turno: "Tarde"
      }).then(
        firebase.db.collection("escalas").add({
          data: moment().add('3','d').day(1).format('DD[/]MM[/]YYYY'),
          escala: profissionaisNoite,
          ubs: "Teste",
          turno: "Noite"
        })
      ).then(
        alert("Escala enviada com sucesso!")
      ).catch((err) => alert(err));          
    }
  }

  return(
    <>
    <Accordion className="acordeao">
      <AccordionSummary className="acordeao-summary"
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Turno da Tarde</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer id="tabelaEscala" component={Paper}>
          <Table aria-label="simple table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell className="tableCell">Profissionais</TableCell>
                <TableCell className="tableCell" align="right">Segunda-Feira</TableCell>
                <TableCell className="tableCell" align="right">Terça-Feira</TableCell>
                <TableCell className="tableCell" align="right">Quarta-Feira</TableCell>
                <TableCell className="tableCell" align="right">Quinta-Feira</TableCell>
                <TableCell className="tableCell" align="right">Sexta-Feira</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
              {tabelaProfissionais.map((row, index) => (
                <TableRow key={index}>
                  
                  <TableCell align="left">{row.profissional}</TableCell>
                  <TableCell align="left"><TextField name="segunda" label="Nome do profissional" variant="outlined" onBlur={updateFieldTarde(index)} /></TableCell>
                  <TableCell align="left"><TextField name="terca" label="Nome do profissional" variant="outlined" onBlur={updateFieldTarde(index)}  /></TableCell>
                  <TableCell align="left"><TextField name="quarta" label="Nome do profissional" variant="outlined" onBlur={updateFieldTarde(index)} /></TableCell>
                  <TableCell align="left"><TextField name="quinta" label="Nome do profissional" variant="outlined" onBlur={updateFieldTarde(index)} /></TableCell>
                  <TableCell align="left"><TextField name="sexta" label="Nome do profissional" variant="outlined" onBlur={updateFieldTarde(index)} /></TableCell>
                  
                </TableRow>
              ))}

            
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>

    <Accordion className="acordeao">
      <AccordionSummary className="acordeao-summary"
        expandIcon={<ExpandMoreIcon className="icone" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Turno da Noite</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer id="tabelaEscala" component={Paper}>
          <Table aria-label="simple table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell className="tableCell">Profissionais</TableCell>
                <TableCell className="tableCell" align="right">Segunda-Feira</TableCell>
                <TableCell className="tableCell" align="right">Terça-Feira</TableCell>
                <TableCell className="tableCell" align="right">Quarta-Feira</TableCell>
                <TableCell className="tableCell" align="right">Quinta-Feira</TableCell>
                <TableCell className="tableCell" align="right">Sexta-Feira</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
              {tabelaProfissionais.map((row, index) => (
                <TableRow key={index}>
                  
                  <TableCell align="left">{row.profissional}</TableCell>
                  <TableCell align="left"><TextField name="segunda" label="Nome do profissional" variant="outlined" onBlur={updateFieldNoite(index)} /></TableCell>
                  <TableCell align="left"><TextField name="terca" label="Nome do profissional" variant="outlined" onBlur={updateFieldNoite(index)}  /></TableCell>
                  <TableCell align="left"><TextField name="quarta" label="Nome do profissional" variant="outlined" onBlur={updateFieldNoite(index)} /></TableCell>
                  <TableCell align="left"><TextField name="quinta" label="Nome do profissional" variant="outlined" onBlur={updateFieldNoite(index)} /></TableCell>
                  <TableCell align="left"><TextField name="sexta" label="Nome do profissional" variant="outlined" onBlur={updateFieldNoite(index)} /></TableCell>
                  
                </TableRow>
              ))}

            
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
    
    <Button onClick={enviarEscala} type="submit" variant="contained" className="btn-escala" color="primary">Adicionar Escala</Button></>
   
  );
};

export default TabelaEscalas;