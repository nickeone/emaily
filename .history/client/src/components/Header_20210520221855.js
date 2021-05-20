import React, {Component} from 'react';

class Header extends Component {
    render() { 
        return(
            <nav>
            <div className="nav-wrapper">
        
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">Login with Google</a></li>
                <li><a href="badges.html">Login with Facebook</a></li>
              </ul>
            </div>
          </nav>
        )
    }
}



export default Header;