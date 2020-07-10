import React, {useEffect, useState} from 'react';
import Firebase from '../../Database/Connection';
import {useHistory} from 'react-router-dom';


export default class EntradaNew extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      epi: [],
      addEpi: []
    }
    this.updateFieldChanged = this.updateFieldChanged.bind(this);
    this.adicionarEpi = this.adicionarEpi.bind(this);


    Firebase.db.collection("epi").get().then(
      snap => {
        let s = this.state;
        snap.forEach(
          doc => {
            //console.log(doc);
            s.epi.push({
              id: doc.id,
              nome: doc.data().nome,
              quantidade: parseInt(doc.data().quantidade),
            }) 
            // s.addEpi.push({
            //   id: doc.id,
            //   nome: doc.data().nome,
            //   quantidade: parseInt(doc.data().quantidade),
            // }) 
          }
        );
        this.setState(s);
        this.setState({addEpi: this.state.epi});
        
      }, err => console.log(err)
    );
  }

  updateFieldChanged = index => e => {

    console.log('index: ' + index);
    console.log('property name: '+ e.target.id);
    console.log('property value: '+ e.target.value);
    
    let fieldValue = parseInt(e.target.value);
    let fieldIndex = index;
    console.log("Field Value:" + fieldValue);
    
    this.setState(prevState => ({

      // addEpi: prevState.addEpi.map(
      //   el => el.key === fieldIndex? { ...el, quantidade: fieldValue }: el
      // )

      addEpi: prevState.addEpi.map(
        (el, index) => index === fieldIndex ? { ...el, quantidade: fieldValue }: el
      )

    }));

    console.log(this.state.addEpi);
    console.log(this.state.addEpi);
    
  }

  adicionarEpi = e => {
    e.preventDefault();
    let s = this.state;
    for(let i = 0; i<this.state.epi.length; i++){
      console.log(s.epi[i].quantidade + "Quantidade de existente");
      console.log(s.addEpi[i].quantidade + "Quantidade adicionada");
      console.log(s.epi[i].quantidade + s.addEpi[i].quantidade + " : Quantidade resultante." )
    }
  }

  render(){
    return(
      <div className="container">
        <h1>Adicionar Estoque</h1>
  
        <form onSubmit={this.adicionarEpi}>
          <table>
            <thead>
              <tr>
                <th>Nome do EPI</th>
                <th>Estoque atual</th>
                <th>Quantidade a adicionar</th>
              </tr>
            </thead>
            <tbody>
              {
               
                this.state.epi.map((epi, index) => 
                <tr key={epi.id} >
                  <td>{epi.nome}</td>
                  <td>{epi.quantidade}</td>
                  <td><input type="number" id={epi.nome} min="0" onChange={this.updateFieldChanged(index)} /></td>
                </tr>
  
                )
              }
            </tbody>
          </table>
          <input type="submit" value="Adicionar"/>
        </form>
      </div>
    );
  }


}



// const Entrada = () => {

//   const [lista, setListaEpis] = useState([]);
//   const [listaAdicionar, setListaAdicionar] = useState([]);
//   const history = useHistory();

//   useEffect(()=>{
    
    
//   },[lista])

  
//   const adicionarEstoque = e =>{
//     e.preventDefault();
//     console.log(lista[0].quantidade + " - Valor da lista inicial");
//     console.log(listaAdicionar[0].quantidade + " - Valor da lista a adicionar");
//     console.log(lista[0].quantidade + listaAdicionar[0].quantidade + " - Valor da soma da lista");
//     // lista.map((epi,index) => {
//     //   console.log(listaAdicionar[index].quantidade);
//     //   console.log(" + ");
//     //   console.log(epi.quantidade);
//     //   console.log("=");
//     //   setListaAdicionar(listaAdicionar[index].quantidade = epi.quantidade + listaAdicionar[index].quantidade);
      
//     //   console.log(listaAdicionar[index].quantidade);
//     // }
      
//     // )
//     // listaAdicionar.map((epi) =>
//     //   Firebase.db.collection("epi").doc(epi.id).update({
//     //     nome: epi.nome,
//     //     quantidade: epi.quantidade
//     //   }).then(
//     //     history.push('/estoque')
//     //   )
//     // )
//   }

  

// }

// export default Entrada;
