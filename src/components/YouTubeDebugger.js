// Code YouTubeDebugger Component Here

import React, { Component } from 'react';

class YouTubeDebugger extends Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  };

  handleClickBitrate = () => {
    this.setState({
      errors: [],
      user: null,
      settings: {
        bitrate: 12,
        video: {
          resolution: '1080p'
        }
      }
    });
  };


  handleClickResolution = () => {
    this.setState({
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '720p'
        }
      }
    });
  };


  render(){
    return(
      <div>
        <button
          className="bitrate"
          onClick={this.handleClickBitrate}
        > bitrate {this.state.settings.bitrate}
        </button>

        <button
          className="resolution"
          onClick={this.handleClickResolution}
        > resolution {this.state.settings.video.resolution}
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
