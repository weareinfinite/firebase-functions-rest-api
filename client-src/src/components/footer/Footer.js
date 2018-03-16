import React from 'react';
const Footer = () => {
    let now = new Date();
    return(
        <footer className="container">
            &copy; { now.getFullYear() } Sarath
        </footer>
    )
}


export default Footer;