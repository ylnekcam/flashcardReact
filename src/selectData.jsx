import React from 'react';
import GetData from './getDataFromSheets'

export default class selectData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ""
    }
  }
/*
  handleInputChanged(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }*/

  handleButtonClicked() {
   <GetData getdata={this.state.searchQuery} />
  }

  render() {
    return  (
      <div>
        <input type="text" value={this.state.searchQuery}/>
        <button onClick={this.handleButtonClicked.bind(this)}>
          Submit
        </button>
      </div>
    );
  }
}

