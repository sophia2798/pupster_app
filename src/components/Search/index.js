import React, { Component } from 'react'

export default class Search extends Component {
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
