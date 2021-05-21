import axios from 'axios';
import { FETCH_USER} from './types.js';
console.log('axios', axios);

const fetchUser = () => {
    return function (dispatch) {
        axios.get('/api/current_user/')
            .then(res => dispatch({type: FETCH_USER,  payload: res }))
            console.log('res:',res);
        
    }    
}
