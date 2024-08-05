
//      
//         {/* left side */}
//        

//        
//      
//     


import React from 'react';
import "./Footer.css";
import { Group, Anchor, Text, Container } from '@mantine/core';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="f-wrapper">
     <div className="paddings innerWidth flexCenter f-container">

     <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={80} />
           <span className="secondaryText">
             Our vision is to make all people <br />
             the best place to live for them.
           </span>
         </div>
 
         <div className="flexColStart f-right">
           <span className="primaryText">Information</span>
           <span className="secondaryText">Uttar Pradesh , INDIA</span>
           <div className="flexCenter f-menu">
           {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '1rem' }}>
            </div> */}
           </div>
         </div>
         

     </div>
    <footer style={styles.footer}>
      <Container>
        <Group position="apart" style={styles.group}>
          {/* Left side - Social Icons */}
          <Group spacing="md" style={styles.socialIcons}>
            <Anchor
              href="https://github.com/Sitto2002"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.icon}
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </Anchor>
            <Anchor
              href="https://www.instagram.com/your-username/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.icon}
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </Anchor>
            <Anchor
              href="https://www.linkedin.com/in/shrey-yadav-412324228/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.icon}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </Anchor>
            <Anchor
              href="mailto:shreyyadav123000@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.icon}
              aria-label="Email"
            >
              <MdEmail size={24} />
            </Anchor>
          </Group>

          {/* Right side - Copyright Text */}
          <Text style={styles.text}>
          Created and hosted by SHREY YADAV
            - &copy; {new Date().getFullYear()}.   No rights reserved.
          </Text>
        </Group>
      </Container>
    </footer>

    </div>

  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem 0',
    position: 'relative',
    width: '100%',
  },
  group: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  socialIcons: {
    display: 'flex',
    gap: '1rem',
  },
  icon: {
    color: 'inherit',
    textDecoration: 'none',
  },
  text: {
    margin: 0,
  },
};

export default Footer;
