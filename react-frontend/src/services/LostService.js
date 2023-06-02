import axios from 'axios'

const LOST_REST_API_URL = 'http://localhost:8080/api/itemonroads';

class LostService {

    getLosts(){
        return axios.get(LOST_REST_API_URL);
        
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new LostService();