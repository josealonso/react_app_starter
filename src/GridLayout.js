import React        from 'react';
import Grid         from '@material-ui/core/Grid'
import MainGridItem from './MainGridItem'
import GridItem from './GridItem'

export default function GridLayout()
{


    return (

        <Grid container spacing={3}> 

              <Grid item lg={12} sm={12} xs={12}>




                   <MainGridItem/>

               
              </Grid>

              <Grid  item lg={6} md={12} sm={12} xs={12}> 


                <GridItem title="Advanced Java Development"
                 subheader="Recommended for you.!" 
                image="https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_960_720.jpg"
                description="Java is an object oriented language and some concepts may be new. Take breaks when needed, and go over the examples as many times as needed.
                "
                />
              </Grid>

              <Grid item  lg={6} sm={12}  md={12}  xs={12}>
              <GridItem title="C++ Beginners Edition" 
              image="https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405_960_720.png"
              subheader="Recommended for you.!" 
              description="Java is an object oriented language and some concepts may be new. Take breaks when needed, and go over the examples as many times as needed.
              "/>

              </Grid>


            <Grid item  lg={4}  md={12}  sm={12} xs={12}>

            <GridItem title="Python Beginners Edition" 
            image="https://cdn.pixabay.com/photo/2021/11/14/19/04/programming-6795536_960_720.png"
            subheader="Most Popular!"
            description="Java is an object oriented language and some concepts may be new. Take breaks when needed, and go over the examples as many times as needed.
            "  />

            </Grid>

            <Grid item lg={4}  md={12} sm={12} xs={12}>

            <GridItem title="Machine Learning, Expert Edition" 
            image="https://cdn.pixabay.com/photo/2021/03/08/18/41/machine-learning-6079971_960_720.png"
            subheader="Most Popular!" 

            description="Java is an object oriented language and some concepts may be new. Take breaks when needed, and go over the examples as many times as needed.
            "/>

            </Grid>

            <Grid item lg={4} md={12} sm={12} xs={12}>
            <GridItem
            
            title="Advanced Java Development" 
            subheader="Recommended for you.!" 
                image="https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_960_720.jpg"
                description="Java is an object oriented language and some concepts may be new. Take breaks when needed, and go over the examples as many times as needed.
                "
            />

            </Grid>

        </Grid>

    );
} 