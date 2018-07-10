import React from 'react';

const Header = (props) => {
    return(
        <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper teal lighten-2" >
              <a href="#!" className="brand-logo center">{props.user}'s NotePad</a>
          </div>
        </nav>
      </div>
    )
}

export default Header;

