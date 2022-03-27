import  Container  from '@material-ui/core/Container';
import  Toolbar  from '@material-ui/core/Toolbar';
import  Typography  from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import  {makeStyles} from '@material-ui/core/styles';
import React,{useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { MenuItem } from '@material-ui/core';
import { Drawer } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    siteTitle:{

        fontWeight:'bold',
        letterSpacing: 2
       

    },

    menuIcon:{
        color:'white'
    },

    toobar:{
        display:'flex',
        flexDirection:'column',
        [theme.breakpoints.up('md')]:{
            flexDirection:'row',
            alignItems:'flex-end',
            justifyContent:'space-between'
        }

    },

    menuBox:{

        display:"flex",
        flexDirection:"column",
        [theme.breakpoints.up('md')]: {
            flexDirection:'row' 
        }

    },
    menuOption:{

        padding: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(3)
        },
        color:'white'
    }
}))
export default function NavigationBar()
{

    const [state, setState] = useState({
        toggleMenu: false,
        toggleMenuOpen: false
    })

    const {toggleMenu, toggleMenuOpen} = state;

    useEffect(() =>{

        const setResponsiveness = () =>{

            return window.innerWidth < 900
            ? setState((prevState) =>({ ...prevState, toggleMenu: true}) )
            : setState((prevState) => ({...prevState, toggleMenu: false}))

        
        }
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());


    },[]);
    const classes =  useStyles();

    const displayToggleMenu = () =>
    {


        const handleToggleMenuOpen = () => setState((prevState) => ({ 
            
            ...prevState, toggleMenuOpen : true
        })) ;



        const handleToggleMenuClose= ()=> setState((prevState) =>({

           ...prevState, toggleMenuOpen : false
        }))
         return (

            <Toolbar>
                <IconButton
                    {...{
                        onClick: handleToggleMenuOpen
                    }}
                    >



                  <MenuIcon className={classes.menuIcon}/>
                    </IconButton>

                    <Drawer 
                    {...{
                        anchor: 'left',
                        open: toggleMenuOpen,
                        onClose: handleToggleMenuClose
                    }}>

                        <div>{ getToggleMenuOptions() }</div>
                    </Drawer>
            </Toolbar>
         );
    }


    const getToggleMenuOptions = () =>{

        return (

            <Box>
            {['home', 'courses', 'sign up'].map((menuOption)=> (

             <MenuItem>
             {menuOption}
             </MenuItem>
        ))}

        </Box>        
        );
    }
    const displayLargeMenu = () =>
    {


        return(
        <Toolbar className={classes.toobar}>
                 
        
        
          <Typography 
           
           component='h1'
           variant ='h6'
          className={classes.siteTitle}>
              Morex Computer Solutions

          </Typography>

          <Box className={classes.menuBox}>
               {['home', 'courses', 'sign up'].map((menuOption)=> (

                   <Link 
                     component='button'
                     varient='body1'
                     className={classes.menuOption}
                   >
                      {menuOption.toUpperCase()}
                   </Link>
               ))}
          </Box>
      </Toolbar>
        );

    }


    
    return (

        <Container>

            <AppBar>
                {toggleMenu ? displayToggleMenu() : displayLargeMenu()}
            </AppBar>
        </Container>
    );
}