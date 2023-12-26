// import { Box, Typography } from '@mui/material'
// import React from 'react'

// function Home() {
  
//   return (
// <>
// <Box style={{ backgroundColor:" rgb(246, 232, 213)"}}>

// <Box  style={{width:"30%",marginLeft:"14%",marginTop:"10%"}}>  
// <Typography variant="h3"><b>Pray daily with Sri Mandir
// One App for all your devotional needs.</b></Typography>



// <br/>
// Set up Temples. Listen to Devotional music. Get free Panchang and Kundali. Updates on every Fasts and Festivals. Trusted by 10 million+ people.
// </Box></Box>


// </>
//   )
// }

// export default Home



import React from 'react';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    height: '100vh', // 100% of the viewport height
  };

  const contentContainerStyle = {
    flex: 1,
    padding: '20px',
    boxSizing: 'border-box',
  };

  const imageContainerStyle = {
    flex: 1,
// 100% of the container's height
width:"30%",height:"30%"
  };

  const bigImageStyle = {
    width: '100%',
    height: '100%'// 100% of the container's height
, // Maintain aspect ratio and cover the container
  };

  return (
    <div style={containerStyle}>
      <div style={contentContainerStyle}>
        <h1>Pray daily with Sri Mandir
One App for all your devotional needs.</h1>
        <p>
          Your content goes here. You can add paragraphs, images, or any other
          HTML elements as needed.
        </p>
      </div>
      <div style={imageContainerStyle}>
        <img src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_hero_artwork_en.8c70e7a9.webp&w=1920&q=75" alt="Big Image" style={bigImageStyle} />
      </div>
    </div>
  );
};

export default Home;
