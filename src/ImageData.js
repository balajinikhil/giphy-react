import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component'

let renderGifs = (gifs)=>{
    return gifs.map((e,i)=>{
            return(
                <LazyLoadImage key={i} 
                className="five wide column"
                src={e.images.original.url} alt={e.username} />
            )
    })
}

const ImageData = (data)=>{
    return(
        <div className="ui grid" style={{marginTop:'25px'}}>
                {renderGifs(data.gifs)}
        </div>
    )
};

export default ImageData;