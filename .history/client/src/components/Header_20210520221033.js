import React, {Component} from 'react';

class Header extends Component {
    render() { 
        return(
            <nav>
                <div className="nav-wrapper">
                    <a href="#" class="brand-logo">Logo</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="#">Login with Google</a></li>
                        <li><a href="#">Login with Facebook</a></li> 
                     </ul>
                </div>
            </nav>
            
        )
    }
}



export default Header;