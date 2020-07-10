import React, {useState, useEffect} from 'react';
import {Container, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody,Paper, TextField,Radio, RadioGroup, FormControlLabel} from '@material-ui/core';
import firebase from '../../Database/Connection';
import moment from 'moment';


import Header from '../../Components/Header/Header';

const Ocorrencias = () => {

    const [ubs, setUbs] = useState('');
    const [data, setData] = useState(moment().format('L'));

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
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                        <TableHead className="tableHead">
                            <TableRow>
                                <TableCell className="tableCell" align="left">Atendimento</TableCell>
                                <TableCell className="tableCell" align="center">Nome do Profissional</TableCell>
                                <TableCell className="tableCell" align="center">Atendimento Normal</TableCell>
                                <TableCell className="tableCell" align="right">Jusrificativa</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Médico</TableCell>
                                <TableCell> <TextField id="filled-basic" fullWidth variant="outlined" label="Nome do Profissional" /> </TableCell>
                                <TableCell> 
                                    <RadioGroup aria-label="gender" name="gender1"> 
                                        {/* value={} onChange={} */}
                                        <FormControlLabel value="female" control={<Radio />} label="Sim" />
                                        <FormControlLabel value="male" control={<Radio />} label="Não" />  
                                    </RadioGroup>
                                </TableCell>
                                <TableCell>
                                    <TextField xs={12}
                                        id="outlined-multiline-static"
                                        label="Observações"
                                        multiline
                                        fullWidth
                                        rows={4}
                                        variant="outlined"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Enfermagem</TableCell>
                                <TableCell> <TextField id="filled-basic" fullWidth variant="outlined" label="Nome do Profissional" /> </TableCell>
                                <TableCell> 
                                    <RadioGroup aria-label="gender" name="gender1"> 
                                        {/* value={} onChange={} */}
                                        <FormControlLabel value="female" control={<Radio />} label="Sim" />
                                        <FormControlLabel value="male" control={<Radio />} label="Não" />  
                                    </RadioGroup>
                                </TableCell>
                                <TableCell>
                                    <TextField xs={12}
                                        id="outlined-multiline-static"
                                        label="Observações"
                                        multiline
                                        fullWidth
                                        rows={4}
                                        variant="outlined"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Téc. Enfermagem 1</TableCell>
                                <TableCell> <TextField id="filled-basic" fullWidth variant="outlined" label="Nome do Profissional" /> </TableCell>
                                <TableCell> 
                                    <RadioGroup aria-label="gender" name="gender1"> 
                                        {/* value={} onChange={} */}
                                        <FormControlLabel value="female" control={<Radio />} label="Sim" />
                                        <FormControlLabel value="male" control={<Radio />} label="Não" />  
                                    </RadioGroup>
                                </TableCell>
                                <TableCell>
                                    <TextField xs={12}
                                        id="outlined-multiline-static"
                                        label="Observações"
                                        multiline
                                        fullWidth
                                        rows={4}
                                        variant="outlined"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Téc. Enfermagem 2</TableCell>
                                <TableCell> <TextField id="filled-basic" fullWidth variant="outlined" label="Nome do Profissional" /> </TableCell>
                                <TableCell> 
                                    <RadioGroup aria-label="gender" name="gender1"> 
                                        {/* value={} onChange={} */}
                                        <FormControlLabel value="female" control={<Radio />} label="Sim" />
                                        <FormControlLabel value="male" control={<Radio />} label="Não" />  
                                    </RadioGroup>
                                </TableCell>
                                <TableCell>
                                    <TextField xs={12}
                                        id="outlined-multiline-static"
                                        label="Observações"
                                        multiline
                                        fullWidth
                                        rows={4}
                                        variant="outlined"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Odontologico</TableCell>
                                <TableCell> <TextField id="filled-basic" fullWidth variant="outlined" label="Nome do Profissional" /> </TableCell>
                                <TableCell> 
                                    <RadioGroup aria-label="gender" name="gender1"> 
                                        {/* value={} onChange={} */}
                                        <FormControlLabel value="female" control={<Radio />} label="Sim" />
                                        <FormControlLabel value="male" control={<Radio />} label="Não" />  
                                    </RadioGroup>
                                </TableCell>
                                <TableCell>
                                    <TextField xs={12}
                                        id="outlined-multiline-static"
                                        label="Observações"
                                        multiline
                                        fullWidth
                                        rows={4}
                                        variant="outlined"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>ASB</TableCell>
                                <TableCell> <TextField id="filled-basic" fullWidth variant="outlined" label="Nome do Profissional" /> </TableCell>
                                <TableCell> 
                                    <RadioGroup aria-label="gender" name="gender1"> 
                                        {/* value={} onChange={} */}
                                        <FormControlLabel value="female" control={<Radio />} label="Sim" />
                                        <FormControlLabel value="male" control={<Radio />} label="Não" />  
                                    </RadioGroup>
                                </TableCell>
                                <TableCell>
                                    <TextField xs={12}
                                        id="outlined-multiline-static"
                                        label="Observações"
                                        multiline
                                        fullWidth
                                        rows={4}
                                        variant="outlined"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Administrativo 1</TableCell>
                                <TableCell> <TextField id="filled-basic" fullWidth variant="outlined" label="Nome do Profissional" /> </TableCell>
                                <TableCell> 
                                    <RadioGroup aria-label="gender" name="gender1"> 
                                        {/* value={} onChange={} */}
                                        <FormControlLabel value="female" control={<Radio />} label="Sim" />
                                        <FormControlLabel value="male" control={<Radio />} label="Não" />  
                                    </RadioGroup>
                                </TableCell>
                                <TableCell>
                                    <TextField xs={12}
                                        id="outlined-multiline-static"
                                        label="Observações"
                                        multiline
                                        fullWidth
                                        rows={4}
                                        variant="outlined"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Administrativo 2</TableCell>
                                <TableCell> <TextField id="filled-basic" fullWidth variant="outlined" label="Nome do Profissional" /> </TableCell>
                                <TableCell> 
                                    <RadioGroup aria-label="gender" name="gender1"> 
                                        {/* value={} onChange={} */}
                                        <FormControlLabel value="female" control={<Radio />} label="Sim" />
                                        <FormControlLabel value="male" control={<Radio />} label="Não" />  
                                    </RadioGroup>
                                </TableCell>
                                <TableCell>
                                    <TextField xs={12}
                                        id="outlined-multiline-static"
                                        label="Observações"
                                        multiline
                                        fullWidth
                                        rows={4}
                                        variant="outlined"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Serviços Gerais</TableCell>
                                <TableCell> <TextField id="filled-basic" fullWidth variant="outlined" label="Nome do Profissional" /> </TableCell>
                                <TableCell> 
                                    <RadioGroup aria-label="gender" name="gender1"> 
                                        {/* value={} onChange={} */}
                                        <FormControlLabel value="female" control={<Radio />} label="Sim" />
                                        <FormControlLabel value="male" control={<Radio />} label="Não" />  
                                    </RadioGroup>
                                </TableCell>
                                <TableCell>
                                    <TextField xs={12}
                                        id="outlined-multiline-static"
                                        label="Observações"
                                        multiline
                                        fullWidth
                                        rows={4}
                                        variant="outlined"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Vigilante</TableCell>
                                <TableCell> <TextField id="filled-basic" fullWidth variant="outlined" label="Nome do Profissional" /> </TableCell>
                                <TableCell> 
                                    <RadioGroup aria-label="gender" name="gender1"> 
                                        {/* value={} onChange={} */}
                                        <FormControlLabel value="female" control={<Radio />} label="Sim" />
                                        <FormControlLabel value="male" control={<Radio />} label="Não" />  
                                    </RadioGroup>
                                </TableCell>
                                <TableCell>
                                    <TextField xs={12}
                                        id="outlined-multiline-static"
                                        label="Observações"
                                        multiline
                                        fullWidth
                                        rows={4}
                                        variant="outlined"
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

                <Grid item xs={12}>
                    <TextField xs={12}
                        id="outlined-multiline-static"
                        label="Observações"
                        multiline
                        fullWidth
                        rows={4}
                        variant="outlined"
                    />
                </Grid>
            </Grid>

        </Container>
        </>
    
      );




}

export default Ocorrencias;