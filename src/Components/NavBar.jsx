import React from 'react';
import Link from '@mui/material/Link';
const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',

    color: 'white',
  };

  const logoContainerStyle = {
    flex: 1,
    marginLeft: '13%', // Added left margin for the logo
  };

  const logoStyle = {
    maxWidth: '100%',
    maxHeight: '50px',
  };

  const navLinksStyle = {
    display: 'flex',
marginRight:"40%"
  };

  const linkStyle = {
    marginRight: '20%',
    textDecoration: 'none',
    color: 'black',
  };

  return (
    <div style={navbarStyle}>
      <div style={logoContainerStyle}>
        <img src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_sm_logo_en_dark.749d0244.svg&w=384&q=75" alt="Logo" style={logoStyle} />
      </div>
      <div style={navLinksStyle}>
        <Link href="#" style={linkStyle}><b>Home</b></Link>
        <Link href="#" style={linkStyle}><b>Puja</b></Link>
        <Link href="#" style={linkStyle}><b>Panchang</b></Link>
        <Link to="#" style={linkStyle}><b>Temples</b></Link>

      </div>
    </div>
  );
};

export default Navbar;
