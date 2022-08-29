import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css'

function App() {
  const [recepients, setRecepients] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [subject, setSubject] = React.useState('');

  const send_email = () => {
    fetch('https://guvi-bulk-email.herokuapp.com/send', {method: 'POST', headers: {'Content-Type': 'application/json'}, body:JSON.stringify({emails: recepients, subject:subject, message: message})})}
  //   console.log(recepients)
  // console.log(message) 
  return (
    <div className="App">
      <h3>Bulk Email Sender using Node</h3>
      <div className="email-container">
        <TextField
            id="standard-helperText"
            label="To"
            helperText="comma seperated email ids"
            variant="standard"
            value = {recepients}
            sx ={{ width : '100%'}}
            onChange={e => setRecepients(e.target.value)}
          />
          <br/>
          <TextField
            id="standard-helperText"
            label="Subject"
            helperText=""
            variant="standard"
            value = {subject}
            sx ={{ width : '100%'}}
            onChange={e => setSubject(e.target.value)}
          />
          <br/>
          <TextField
            id="outlined-multiline-static"
            label="Message body"
            multiline
            rows={10}
            sx ={{ width : '100%'}}
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <br/>
        <Button variant="contained" onClick= {() => send_email()} >send</Button>
      </div>
    </div>
  );
}

export default App;
