import axios from 'axios';
import { FETCH_USER} from './types.js';
console.log('axios', axios);

const fetchUser = () => {
    return function (dispatch) {
        axios.get('/api/current_user/')
            .then(res => dispatch({type: FETCH_USER,  payload: res }))
        
    }
    
}






// import axios
// import fetchUser

// create function fetchUser
//     get request to route api/current_user

// create types fils in actions folder 
    
//     create const FETCH_USER

// package.json client add additional proxy rule for api/current_user
