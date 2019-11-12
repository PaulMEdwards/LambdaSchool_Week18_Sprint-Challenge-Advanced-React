import React from 'react';
import Axios from 'axios';
import Display from './Display';

const api_uri = "http://localhost:5000/api/";
const api_players = "players";

export default class FetchData extends React.Component {
  constructor() {
    super();
    this.state = {
      playerData: []
    };
    this.fetchData = this.fetchData.bind(this);
    this.source = Axios.CancelToken.source();
  }

  async fetchData(endpoint, returnStateBucket) {
    await Axios.get(api_uri+endpoint, {
      cancelToken: this.source.token
    })
    .then(res => {
      let d = res.data;
      if (typeof returnStateBucket !== "undefined") {
        // console.log(returnStateBucket+': ', d);
        this.setState({ [returnStateBucket]: d });
      } else {
        // console.log('fetchData: ', d);
        return d;
      }
    })
    .catch(e => {
      if(e.message !== "Cancelling in cleanup") {
        console.log("Error: ", e)
      }
    });
  }
  
  async componentDidMount() {
    let self = this;
    await self.fetchData(api_players, "playerData");
  }

  componentWillUnmount() {
    this.source.cancel("Cancelling in cleanup");
  }

  render() {
    // console.log('this.state: ', this.state);

    return (
      <React.Fragment>
        <Display playerData={this.state.playerData} />
      </React.Fragment>
    );
  }
}
