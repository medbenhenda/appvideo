/**
 * Created by viasyst on 15/04/2017.
 */
import React, {Component} from 'react';

// Define a new class calles SearchBar and give it access to all of the functionality that re-act component has
class SearchBar extends Component{
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    render() {
       return (
           <div>

                <input value={this.state.term}
                       onChange={event => this.setState({ term: event.target.value})}
                />
           </div>
        );
    }

    onInputChange(event) {
        this.setState({ term: event.target.value});
    }
}

export default SearchBar;


