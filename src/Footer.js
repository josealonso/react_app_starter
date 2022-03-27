import { Container, makeStyles, Typography } from '@material-ui/core';
import React   from 'react';
import Link from '@material-ui/core/Link';

function Copyright()
{
    return (
        <Typography>
            {"Copyright "}
     
            <Link href="https://more-xtech.com">

Website             

   </Link>

   {" " + new Date().getFullYear()}
        </Typography>
    );
}

const useStyles = makeStyles( (theme) => ({

    footer:{
        padding: theme.spacing(6)
    }
}));
export default function Footer()
{


    const classes = useStyles();

      return (

             <footer className={classes.footer}>
                    
                    <Container>

                        <Typography variant="h6">
                            Morekolodi Motsumi
                        </Typography>

                        <Typography variant="subtitle1" color="textSecondary">
                             
                             Become a tech Expert for Free..
                        </Typography>


                        <Copyright/>
                    </Container>
             </footer>
      );
}