import Grid from '@material-ui/core/Grid'
import  Typography  from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=> ({


    mainItem:{
        padding: theme.spacing(6),
        textAlign:'left',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    }
    ,
    mainContainer:{
        height: 400,
        backgroundImage:"url(https://cdn.pixabay.com/photo/2020/12/18/16/56/laptop-5842509_1280.jpg)",
        color: theme.palette.common.white,
        backgroundSize: 'cover'
    }
}));

export default function MainGridItem()
{

  
    const classes = useStyles();
    return (

        <Grid container className={classes.mainContainer}>

        <Grid item className={classes.mainItem} md={6}>

            <Typography component='h2' variant='h5' >

                Hello World Programming
            </Typography>


            <Typography variant='body1' paragraph>
            Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming languages, such as JavaScript, Python, and C++.  Created by Pamela Fox.            </Typography>
        </Grid>
             

        </Grid>
    );
}