import React from 'react';
import debounce from 'lodash.debounce';

import './Search.css';

/**
 * Search component that triggers a callback when the user finishes entering text.
 */
class Search extends React.PureComponent {
  constructor (props) {
    super(props);
    this.inputRef = React.createRef();
    this.triggerSearch = debounce(this.triggerSearch.bind(this), 300);
  }

  triggerSearch () {
    this.props.onSearch(this.inputRef.current.value);
  }

  render () {
    return (
      <div className="Search content">
        <p>Search by tags:</p>
        <div className="field">
          <div className="control">
            <input className="input Search__input" type="text" ref={this.inputRef} onChange={this.triggerSearch} placeholder="cats,dogs,bats"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;