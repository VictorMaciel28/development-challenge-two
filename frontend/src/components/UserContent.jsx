import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function UserContent(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: 345,
          maxHeight: 320,
          marginRight: "2%",
          marginBottom: "2%"
        }    
      }));
    const classes = useStyles();

  return (
    <Grid container justify="center">
        {props.content.map((content) => (
            <Card className={classes.root}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {content.name}
                    </Typography>
                    <Typography color="textSecondary">
                        <p><b>Idade:</b> {content.age}</p>
                        <p><b>Sintomas:</b> {content.symptom} </p>
                        <p><b>Diagnóstico:</b> {content.diagnostic}</p>
                        <p><b>Medicações:</b> {content.medications}</p>
                        <p><b>Recomentações:</b> {content.recommendations}</p>
                    </Typography>
                </CardContent>
            </Card> 
        ))}
    </Grid>
  );
}