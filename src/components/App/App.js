import React, { Component } from 'react';

import './App.css';

// TODO: configure absolute paths from src/
import { fetchPhotos } from './../../api/api';

import Photo from '../Photo/Photo';
import Loading from '../common/Loading/Loading';
import Search from '../common/Search/Search';

class App extends Component {

  // For the purposes of this demo we'll use component state as a store.
  state = {
    photos: [],
    searchQuery: '',

    isLoadingPhotos: true
  }
  
  componentDidMount () {
    try {
      fetchPhotos()
        .then((photos) => {
          this.setState({
            photos,
            isLoadingPhotos: false
          });
        });
    } catch (e) {
      this.setState({
        isLoadingPhotos: false
      });
      alert('Could not retrieve photos. Please check your credentials.');
    }
  }

  renderPhotos () {
    return this.state.photos.map((photo, i) => {
      return (
        <div key={`photo_${i}`} className="column is-one-quarter">
          <Photo photo={photo} />
        </div>
      );
    })
  }

  render () {
    return (
      <div className="App">

        <header className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Flickr Photo Stream
              </h1>
            </div>
          </div>
        </header>

        <section className="section">
          <div className="container">
            <div className="Content">

              <Search onSearch={console.log} />

              <div className="PhotoStream columns is-multiline">
                {this.state.isLoadingPhotos
                  ? <Loading />
                  : this.renderPhotos()
                }
              </div>

            </div>
          </div>
        </section>
        
      </div>
    );
  }
}

export default App;
