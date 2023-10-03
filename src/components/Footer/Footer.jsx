import React, { useState, useEffect } from 'react';
import "./Footer.css"

import moment from 'moment-timezone';

const Footer = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
      const interval = setInterval(() => {
        const now = moment().tz('Australia/Brisbane').format('HH:mm z');
        setCurrentTime(now);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <footer>
        <div className="footerRight">
            <div className="version">
                <h5>Version</h5>
                <p>2023 © Edition</p>
            </div>
            <div className="time">
                <h5>Time</h5>
                <p>{currentTime}</p>
            </div>
            <div className="location">
                <h5>Location</h5>
                <p>West End, Brisbane</p>
            </div>
        </div>

        <div className="footerLeft">
            <h5>Designed and Built by</h5>
            <a className="nav-link" href="http://stevenyam.dev" target="_blank" rel="noreferrer">Steven Yam</a>
        </div>
    </footer>
  )
}

export default Footer