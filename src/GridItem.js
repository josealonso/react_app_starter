import React from 'react'
import { Card,CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShareIcon from '@material-ui/icons/Share';
const useStyles = makeStyles(() => ({

    cardImage:{
        height:300
    }
}));
export default function GridItem(props)
{

    const classes = useStyles();
    
    return (

        <Card>
            <CardHeader 

               title={props.title}
               subheader={props.subheader}
          
          />
            <CardMedia 
            className={classes.cardImage}
               image={props.image}
                title={props.title}
            />
            <CardContent>

                <Typography>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>

                <IconButton aria-label="visit page">
                     <ShareIcon/>
                          
                </IconButton>
            </CardActions>
        </Card>


    );
}