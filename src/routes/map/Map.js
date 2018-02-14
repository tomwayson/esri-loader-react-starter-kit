/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Map.css';
import EsriMap from '../../components/EsriMap';

class Map extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  // set initial zoom level for map
  constructor(props) {
    super(props);
    this.state = { zoom: 8 };

    // This binding is necessary to make `this` work in the callback
    this.incrementZoom = this.incrementZoom.bind(this);
  }

  // zoom in/out by updating state by specified increment
  incrementZoom(i) {
    this.setState(prevState => ({
      zoom: prevState.zoom + i,
    }));
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <EsriMap zoom={this.state.zoom} />
          <p>
            Zoom level: {this.state.zoom}
            &nbsp;<button onClick={() => this.incrementZoom(1)}>+</button>
            &nbsp;<button onClick={() => this.incrementZoom(-1)}>-</button>
          </p>
          <p>
            The above <code>&lt;EsriMap /&gt;</code> component uses the{' '}
            <code>componentDidMount()</code> lifecyle hook to ensure that the
            following only happen once the user navigates to this route{' '}
            <em>in a browser</em>:
          </p>
          <ul>
            <li>The ArcGIS API for JavaScript is lazy loaded</li>
            <li>The above map is rendered</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Map);
