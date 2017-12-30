/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Map from './Map';
import Layout from '../../components/Layout';

const title = 'Esri Map';

function action() {
  return {
    chunks: ['map'],
    title,
    component: (
      <Layout>
        <Map title={title} />
      </Layout>
    ),
  };
}

export default action;
