import React, { Component } from 'react';
import API from '../../utils/API';
import Card from '../Card'

export default class Search extends Component {

    state = {
        result: [],
        list: [],
        getDogBreed: ""
    };

    searchBreed = breed => {
        API.getDogBreed(breed)
            .then(res => {
                if (res.data.message.length > 10) {
                    this.setState({
                        result: res.data.message.splice(0, 10)
                    })
                }
            })
            .catch(err => console.log(err));
    };

    getBreed = () => {
        API.getBreedList()
            .then(res => {
                this.setState({ list: Object.values(res.data.message) })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        this.setState({
            getDogBreed: event.target.value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBreed(this.state.getDogBreed);
    };

    render() {
        this.getBreed();
        return (
            <div>
                <h1>Search By Breed!</h1>
                <form className="form-inline">
                    <input onChange={this.handleInputChange} value={this.state.getDogBreed} list="breed-list" type="text" className="form-control" placeholder="Breed Name" />
                    <datalist id="breed-list">
                        {this.state.list.map(breed => <option value={breed} />)}
                    </datalist>
                    <button onClick={this.handleFormSubmit} className="btn btn-primary mb-2">Search</button>
                </form>
                {this.state.result.map(url => <Card url={url} />)}
            </div>
        )
    }
}
