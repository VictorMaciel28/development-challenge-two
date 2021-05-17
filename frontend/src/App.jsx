import './App.css';
import React, { useRef, useEffect, useState, useCallback } from "react";
import {Grid, Toolbar, Button} from '@material-ui/core';
import Modal from './components/Modal';
import UserContent from './components/UserContent';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';



function App() {
  const [users, setUsers] = useState([]);

  const [formNameUser, setFormNameuser] = useState([]);
  const [formAge, setFormAge] = useState([]);
  const [formSymptom, setformSymptom] = useState([]);
  const [formDiagnostic, setformDiagnostic] = useState([]);
  const [formMedications, setformMedications] = useState([]);
  const [formRecommendations, setformRecommendations] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const getUsers = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(`https://43a45gdrtj.execute-api.us-east-2.amazonaws.com/getUsers`);
    const data = await response.json();
    const result = data.Items;

    setUsers(result)
    setIsLoading(false);
    return result;
  },[]);

  useEffect(()=>{
    getUsers();
  },[]);

  const formSubmissionHandler = event =>{
    event.preventDefault();
  }
  const handleNameUserChange = event => {
    setFormNameuser(event.target.value)
  }
  const handleAgeChange = event => {
    setFormAge(event.target.value)
  }
  const handleformSymptomChange = event => {
    setformSymptom(event.target.value)
  }
  const handleformDiagnosticChange = event => {
    setformDiagnostic(event.target.value)
  }
  const handleformMedicationsChange = event => {
    setformMedications(event.target.value)
  }
  const handleformRecommendations = event => {
    setformRecommendations(event.target.value)
  }
 
  const submitForm = () => {
    fetch('https://lh92scf3o8.execute-api.us-east-2.amazonaws.com/putUser', {
      method:'POST',
      body: JSON.stringify({
        //"age": "" + formAge + "",
        "name": `'formNameUser'`
        //"symptom": formSymptom,
        //"diagnostic": formDiagnostic,
        //"medications": formMedications,
        //"recommendations": formRecommendations
      }),
      contentType:"application/json"
    }
  )}
  const modalForm = (
      <form onSubmit={formSubmissionHandler}>
        <h3>Preencha as informações</h3>
        <TextField fullWidth onChange={handleNameUserChange}  label="Nome e Sobrenome" required />
        <TextField fullWidth onChange={handleAgeChange} label="Idade" />
        <TextField fullWidth onChange={handleformSymptomChange} label="Sintomas"/>
        <TextField fullWidth onChange={handleformDiagnosticChange} label="Diagnóstico"/>
        <TextField fullWidth onChange={handleformMedicationsChange} label="Medicacoes"/>
        <TextField fullWidth onChange={handleformRecommendations} label="Recomendacoes"/>
        <button onClick={submitForm}>Enviar</button>
      </form>
  );

  return (
    <div>
      <Toolbar className="app-header">Lista de informação de clientes</Toolbar>
      <Grid container className="container" justify="center">
        {isLoading ? <p>Um momentinho...</p> :
        users ? <UserContent content={users}></UserContent> :
        <p>Insira algum usuário</p>}
      </Grid>
      <div className="button-session">
        <Modal value="Adicionar cliente" content={modalForm}></Modal>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
