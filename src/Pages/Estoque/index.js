import React,{useEffect, useState} from 'react';
import Firebase from '../../Database/Connection';

const Estoque = () => {

  const [lista, setListaEpis] = useState([]);
  useEffect(()=>{
    const query = Firebase.db.collection("epi").get().then(
      snap => {
        const listaEpi = [];
        snap.forEach(
          doc => {
            //console.log(doc);
            listaEpi.push({
              id: doc.id,
              nome: doc.data().nome,
              quantidade: doc.data().quantidade,
            })    
          }
        );
        setListaEpis(listaEpi);
      }, err => console.log(err)
    );
    return () => query;
  },[lista])

  return(
    <div className="container">
      <h1>Estoque Atual</h1>
      <table className="tableEstoque">
        <thead>
          <tr>
            <td id="nome">EPI</td>
            <td id="quantidade">Quantidade em Estoque</td>
            <td id="Situação">Situação</td>
          </tr>
        </thead>
       
        <tbody>
          {
            lista.map((epi) =>
              <tr key={epi.id}>
                <td>{epi.nome}</td>
                <td>{epi.quantidade}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default Estoque;