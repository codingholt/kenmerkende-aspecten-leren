import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="terminal-nav">
    <div className="terminal-logo">
      <div className="logo terminal-prompt"><Link to="/">Kenmerkende Aspecten</Link></div>
    </div>
    <nav className="terminal-menu">
      <ul>
        <li><Link to="/">Oefen</Link></li>
        
        <li><Link to="/answeroptions">Antwoord mogelijkheden</Link></li>
        <li><Link to="/qanda">Vragen en Antwoorden</Link></li>
      </ul>
    </nav>
</div>
  )
}

export default Header