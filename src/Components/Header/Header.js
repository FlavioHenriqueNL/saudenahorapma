import React, {useState} from "react";
import {AppBar, Toolbar, Container} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import firebase from '../../Database/Connection';
import Logout from '../Logout';
import MenuLateral from './Drawer';
import logo from './img/logo.png';

export default function HeaderNavbar() {
  const classes = useStyles();
  const [administrador, setAdministrador] = useState(false);

  firebase.auth.onAuthStateChanged((logged) => {
    if(logged){
      firebase.db.collection('usuarios').doc(logged.uid).get().then(
        snap => {
          setAdministrador(snap.data().administrador)
        }
      )             
    }
  })  

  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position="static">
        <Container>
          <Toolbar className={classes.toolbar}>
            <div className={classes.menuContainer}>
              {administrador ? <MenuLateral/> : null}
              <div>
                <img src={logo} alt="Saúde na Hora" width="150px" height="auto" />
              </div>
            </div>
            <Logout/>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  header:{
    background: '#fff'
  },
  root: {
    flexGrow: 1,
  },
  menuContainer:{
    display: 'flex',
    alignItems: 'center',
  },
  toolbar:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  menuButton: {
    color: '#53CC7D',
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'blue'
  },
  MenuIcon:{
    fontSize: '3.0rem'
  },
}));