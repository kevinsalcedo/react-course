import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class  App extends React.Component {
    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID d95e012656017d9817264a92a0efea91a756ca4d0ebc541a96ff20e8804c40e9'
            }
        });

    console.log(response.data.results);
    }
    render() {
        return (
            <div className='ui container' style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }

}

export default App;
