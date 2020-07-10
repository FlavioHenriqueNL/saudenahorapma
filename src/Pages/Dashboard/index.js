import React from 'react';
import Firebase from '../../Database/Connection';
import {Link} from 'react-router-dom';
import Header from '../../Components/Header/Header';

import StorageIcon from '@material-ui/icons/Storage';

import "../../Assets/css/style.css";

const Dashboard = () => (
  <>
    <Header/>

    <main className="dashboard">
      <div className="container">
        <h1>Controle de dispensação de EPI'S</h1>

        <div className="box-options">
          <div className="estoqueatual-box">

            <Link to="/atendimentos">Atendimentos</Link>
            <Link to="/ocorrencias">Ocorrencias</Link>
            <Link to="/escalas">Escalas</Link>

          </div>
        </div>


      </div>
    </main>

  </>
)

export default Dashboard;