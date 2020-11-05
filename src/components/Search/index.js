import React, { Component } from 'react'

export default class Search extends Component {

    state = {
        result: {},
        getDogBreed: ""
    };

    searchBreed = breed => {
        API.getDogBreed(breed)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBreed(this.state.search);
    };

    render() {
        return (
            <div>
                <h1>Search By Breed!</h1>
                <form class="form-inline">
                    <input type="text" class="form-control" placeholder="Bread Name"/>
                    <button type="submit" class="btn btn-primary mb-2">Search</button>
                </form>
            </div>
        )
    }
}
