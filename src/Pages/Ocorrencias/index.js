import React, {useState, useEffect} from 'react';
import {Container, Grid, TableContainer, Table, TableHead, TableRow, TableCell, 
        TableBody,Paper, TextField,Radio, RadioGroup, FormControlLabel, Accordion, 
        AccordionSummary, AccordionDetails, Typography} 
        from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import firebase from '../../Database/Connection';
import moment from 'moment';

import './style.scss';


import Header from '../../Components/Header/Header';

const Ocorrencias = () => {

    const [ubs, setUbs] = useState('');
    const [data, setData] = useState(moment().format('L'));
    const [tabelaProfissionais, setTabelaProfissionais] = useState([
        {profissional: "Médico", nome: "", atendimentoNomal: "sim", justificativa: ""},
        {profissional: "Enfermagem", nome: "", atendimentoNomal: "sim", justificativa: ""},
        {profissional: "Téc. Enfermagem 1", nome: "", atendimentoNomal: "sim", justificativa: ""},
        {profissional: "Téc. Enfermagem 2", nome: "", atendimentoNomal: "sim", justificativa: ""},
        {profissional: "Dentista", nome: "", atendimentoNomal: "sim", justificativa: ""},
        {profissional: "ASB", nome: "", atendimentoNomal: "sim", justificativa: ""},
        {profissional: "Administrativo 1", nome: "", atendimentoNomal: "sim", justificativa: ""},
        {profissional: "Administrativo 2", nome: "", atendimentoNomal: "sim", justificativa: ""},
        {profissional: "Serviços Gerais", nome: "", atendimentoNomal: "sim", justificativa: ""},
        {profissional: "Vigilante", nome: "", atendimentoNomal: "sim", justificativa: ""},
    ]);

    const [tabelaTarde, setTabelaTarde] = useState(tabelaProfissionais);
    const [tabelaNoite, setTabelaNoite] = useState(tabelaProfissionais);
    const [observacaoTarde, setObservacaoTarde] = useState("");
    const [observacaoNoite, setObservacaoNoite] = useState("");

    useEffect(()=>{
        firebase.auth.onAuthStateChanged((logged) => {
            if(logged){
              firebase.db.collection('usuarios').doc(logged.uid).get().then(
                snap => {
                  setUbs(snap.data().ubs);           
                }
              );             
            }
          })
    },[])

    const handleChangeField = (index,turno) => e => {
        e.preventDefault();
        let valor = e.target.value;
        let campo = e.target.id;

        if(turno === "Tarde"){
            let handleTabela = [...tabelaTarde];
            handleTabela[index][campo] = valor;
            setTabelaTarde(handleTabela);
            console.log("Executou, agora podendo.");
        }else{
            let handleTabela = [...tabelaNoite];
            handleTabela[index][campo] = valor;
            setTabelaNoite(handleTabela);
        }        
    }

    const handleSetObservacao = (turno) => e => {
        e.preventDefault();
        let valor = e.target.value;
        turno === "Tarde" ? setObservacaoTarde(valor) : setObservacaoNoite(valor);
        console.log("Executou, sem poder.");
    }

    return(
        <>
        <Header/>
        <Container className="ocorrencias">
            <Grid className="tituloSecao" container spacing={3} alignItems="center">
                <Grid item xs={12} >
                    <h1>Ocorrências</h1>
                    <h2>Realizada no dia: <span>{moment().format('DD[/]MM[/]YYYY')}</span> </h2>
                </Grid>              
            </Grid>
            
            <Grid className="ocorrencia" container spacing={3} alignItems="center">
                <Grid item xs={4}>
                    <h1>Data: <span>{moment().format('DD[/]MM[/]YYYY')}</span></h1> 
                </Grid>
                <Grid item xs={4}>
                    <h1>Ubs: <span>{ubs}</span></h1> 
                </Grid>
                <Grid item xs={4}>
                    <h1>Turno: <span>Tarde</span></h1> 
                </Grid>
                
                <Grid item xs={12}>
                <Accordion>
                    <AccordionSummary className="acordeao-summary"
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Turno da Tarde</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TableContainer component={Paper}>
                            <Table className="tableOcorrencias" aria-label="simple table">
                                <TableHead className="tableHead">
                                    <TableRow>
                                        <TableCell className="tableCell" align="left">Atendimento</TableCell>
                                        <TableCell className="tableCell" align="center">Nome do Profissional</TableCell>
                                        <TableCell className="tableCell" align="center">Atendimento Normal</TableCell>
                                        <TableCell className="tableCell" align="right">Justificativa</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {
                                    tabelaProfissionais.map((profissional, index) => 
                                    <TableRow key={index}>
                                        <TableCell>{profissional.profissional}</TableCell>
                                        <TableCell> 
                                            <TextField fullWidth variant="outlined" label="Nome do Profissional" 
                                                id="nome"
                                                onBlur={handleChangeField(index,"Tarde")} 
                                            /> 
                                        </TableCell>
                                        <TableCell> 
                                            <RadioGroup className="atendimento-radio" aria-label="atdnml" name="atdmnl" 
                                                id="atendimentoNormal"
                                            
                                                onChange={handleChangeField(index,"Tarde")}
                                            > 
                                                <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                                                <FormControlLabel value="não" control={<Radio />} label="Não" />  
                                            </RadioGroup>
                                        </TableCell>
                                        <TableCell>
                                            <TextField xs={12} label="Observações" multiline fullWidth rows={4} variant="outlined"
                                                id="outlined-multiline-static"
                                                onBlur={handleChangeField(index,"Tarde")}
                                            />
                                        </TableCell>
                                    </TableRow>
                                    )
                                }
                                    <TableRow>
                                        <TableCell colSpan={4}>
                                            <TextField xs={12} label="Observações" multiline fullWidth rows={4} variant="outlined"
                                                id="observacoes"
                                                onBlur={handleSetObservacao("Tarde")}
                                            />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>                        
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary className="acordeao-summary"
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Turno da Noite</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TableContainer component={Paper}>
                            <Table className="tableOcorrencias" aria-label="simple table">
                                <TableHead className="tableHead">
                                    <TableRow>
                                        <TableCell className="tableCell" align="left">Atendimento</TableCell>
                                        <TableCell className="tableCell" align="center">Nome do Profissional</TableCell>
                                        <TableCell className="tableCell" align="center">Atendimento Normal</TableCell>
                                        <TableCell className="tableCell" align="right">Justificativa</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {
                                    tabelaProfissionais.map((profissional, index) => 
                                    <TableRow key={index}>
                                        <TableCell>{profissional.profissional}</TableCell>
                                        <TableCell> 
                                            <TextField fullWidth variant="outlined" label="Nome do Profissional" 
                                                id="nome"
                                                onBlur={handleChangeField(index,"Tarde")} 
                                            /> 
                                        </TableCell>
                                        <TableCell> 
                                            <RadioGroup className="atendimento-radio" aria-label="atdnml" name="atdmnl" 
                                                id="atendimentoNormal"
                                            
                                                onChange={handleChangeField(index,"Tarde")}
                                            > 
                                                <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                                                <FormControlLabel value="não" control={<Radio />} label="Não" />  
                                            </RadioGroup>
                                        </TableCell>
                                        <TableCell>
                                            <TextField xs={12} label="Observações" multiline fullWidth rows={4} variant="outlined"
                                                id="outlined-multiline-static"
                                                onBlur={handleChangeField(index,"Tarde")}
                                            />
                                        </TableCell>
                                    </TableRow>
                                    )
                                }
                                    <TableRow>
                                        <TableCell colSpan={4}>
                                            <TextField xs={12} label="Observações" multiline fullWidth rows={4} variant="outlined"
                                                id="observacoes"
                                                onBlur={handleSetObservacao("Tarde")}
                                            />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>                        
                    </AccordionDetails>
                </Accordion>
                </Grid>

            </Grid>

        </Container>
        </>
    
      );




}

export default Ocorrencias;