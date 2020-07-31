import React from 'react';
import Firebase from '../../Database/Connection';
import {Link} from 'react-router-dom';
import Header from '../../Components/Header/Header';
import {Container, Grid} from "@material-ui/core";
import moment from 'moment';

import "./style.scss";

const Dashboard = () => (
  <>
    <Header/>

    <main className="dashboard">
      <Container>
        <Grid container alignItems="center" spacing={3}>
          <Grid className="titulo" item sm={6} xs={12}>
            <h1>Dashboard</h1>
            <h2>Data: <span>{moment().format('DD[/]MM[/]YYYY')}</span></h2>
          </Grid>
          <Grid className="ubs" item sm={6} xs={12}>
            <h1>Unidade básica de saúde:</h1>
            <h2>Primavera{}</h2>
          </Grid>
        </Grid>
        <Grid container spacing={3} justify="center">
          <Grid item md={4} sm={6} xs={12}>
            <Link className="link-box" to="/atendimentos">Atendimentos</Link>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Link className="link-box" to="/ocorrencias">Ocorrencias</Link>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Link className="link-box" to="/escalas">Escalas</Link>
          </Grid>
        </Grid>
      </Container>
    </main>

  </>
)

export default Dashboard;