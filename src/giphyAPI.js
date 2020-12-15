import axios from 'axios';
export default axios.create({
    baseURL:'https://api.giphy.com/v1/gifs',
    params:{
        api_key:'PZvJvffopnmNjquo6xZs6gG4C1TCTZfW'
    }
})