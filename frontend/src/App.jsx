import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Grid, Toolbar, Button} from '@material-ui/core'
import SimpleModal from './components/Modal'

function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      maxHeight: 300,
      marginRight: "2%",
      marginBottom: "2%"
    }    
  }));

  const classes = useStyles();
  
  const modalContent = (
      <div>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
      </div>      
  );

  return (
    <div>
      <Toolbar className="app-header">Lista de informação de clientes</Toolbar>
      <Grid container className="container" justify="center">
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Victor Marques
            </Typography>
            <Typography color="textSecondary" component="p">
              <p><b>Idade:</b> 24</p>
              <p><b>Sintomas:</b> Dores de cabeça e náuseas </p>
              <p><b>Diagnóstico:</b> Virose e febre alta</p>
              <p><b>Medicações:</b> Paracetamol, tylenol ou dipirona</p>
              <p><b>Recomentações:</b> Repouso de 3 a 7 dias</p>
            </Typography>
          </CardContent>
        </Card> 
        
      </Grid>
      <div className="button-session">
        <SimpleModal value="Adicionar cliente" content={modalContent}></SimpleModal>
      </div>
      <div className="footer"></div>

    </div>
  );
}

export default App;
