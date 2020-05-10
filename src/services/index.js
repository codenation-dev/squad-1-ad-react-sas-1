import axios from 'axios';

const getData = () => {
    return axios.get('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
};

export default getData;