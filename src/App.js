import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import dataApi from './giphyAPI'
import ImageData from './ImageData';
import SearchBar from './SearchBar';




class App extends React.Component{

    state = {gifs: [], offset:0, totalLength:1, more:true, term:'silicon valley' };

    fetchMoreData = async(value)=>{

        if(this.state.gifs.length >= this.state.totalLength ){
                console.log(true);
             this.setState({more:false})
        }

        let response = await dataApi.get('/search',{
            params:{
                q:this.state.term,
                limit:25,
                offset:this.state.offset
            }
        });
        console.log(response.data);
        this.setState({
            gifs:this.state.gifs.concat(response.data.data), 
            offset:this.state.offset + 25,
            totalLength:response.data.pagination.total_count
        });
    }


    componentDidMount= async ()=>{
       this.fetchMoreData();
    }



    onSearchSubmit = async(term) =>{
        await this.setState({
            gifs:[],
            offset:0,
            totalLength:1,
            term:term
        })
        this.fetchMoreData()
    } 

    render(){
        console.log(this.state);
        return(
            <div className="ui container">
                <div className="ui segment">
                    <SearchBar onSearchSubmit={this.onSearchSubmit} />
                    <InfiniteScroll
                        dataLength={this.state.gifs.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.more}
                        loader={<h4>loading...</h4>}
                        endMessage={<h4>End of search result</h4>}

                    >
                        <ImageData gifs = {this.state.gifs } />
                    </InfiniteScroll>
                </div>
            </div>
        )
    }
}


export default App;