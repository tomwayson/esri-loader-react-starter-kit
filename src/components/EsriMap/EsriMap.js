import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { loadModules } from 'esri-loader';
import s from './EsriMap.css';

class EsriMap extends React.Component {
  componentDidMount() {
    const options = {
      url: 'https://js.arcgis.com/3.23/',
    };
    loadModules(['esri/map'], options)
      .then(([Map]) => {
        // create map with the given options at a DOM node w/ id 'mapNode'
        const map = new Map(this.mapNode, {
          center: [-118, 34.5],
          zoom: 8,
          basemap: 'dark-gray',
        });
        this.map = map;
      })
      .catch(err => {
        // handle any script or module loading errors
        console.error(err);
      });
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
