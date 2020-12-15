import {useState, useEffect} from 'react';
import dataApi from './giphyAPI';

const loadData = (searchTerm) => {

    const [response, changeResponse ] = useState([]);

    useEffect(()=>{
        (async()=>{

        let data = await dataApi.get('/search',{
            params:{
                q:searchTerm ? searchTerm : 'silicon valley'
            }
        })
            
        })();

    },
    [response]
    )


    return response
}

export default loadData;