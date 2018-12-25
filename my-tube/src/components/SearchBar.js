import React from 'react';
import '../static/SearchBar.css'

class SearchBar extends React.Component {
  state = {search: ''};

  onInputChange = (event) => {
    this.setState({search: event.target.value});
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.search);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              placeholder="Search"
              value={this.state.search}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}
// Without event listener state change on value of input, user input will not change the value.
export default SearchBar;
