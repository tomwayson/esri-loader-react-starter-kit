import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { loadModules } from 'esri-loader';
import s from './EsriMap.css';

class EsriMap extends React.Component {
  static propTypes = {
    // sets map zoom level
    zoom: PropTypes.number,
  };
  static defaultProps = {
    // this one goes to eleven
    zoom: 11,
  };

  componentDidMount() {
    const options = {
      url: 'https://js.arcgis.com/3.23/',
    };
    loadModules(['esri/map'], options)
      .then(([Map]) => {
        // create map with the given options at a DOM node w/ id 'mapNode'
        const map = new Map(this.mapNode, {
          center: [-118, 34.5],
          zoom: this.props.zoom,
          basemap: 'dark-gray',
        });
        // NOTE: keep a reference to the map for later updates
        this.map = map;
      })
      .catch(err => {
        // handle any script or module loading errors
        console.error(err);
      });
  }
  componentWillReceiveProps(nextProps) {
    if (this.map) {
      // update the zoom level
      this.map.setZoom(nextProps.zoom);
    }
  }
  render() {
    return (
      <div
        ref={c => {
          this.mapNode = c;
        }}
        className={s.root}
      />
    );
  }
}

export default withStyles(s)(EsriMap);
