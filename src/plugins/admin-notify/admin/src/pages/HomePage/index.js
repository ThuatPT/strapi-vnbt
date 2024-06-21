/*
 *
 * HomePage
 *
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

const HomePage = () => {
  return (
    <div>
      <h1 style={{ marginBottom: '0', backgroundColor: '#f5f5f5' }} data-test-id="header" className="p-3"> sss{pluginId}'s Plugin</h1>
      <p className="p-3">wwwwwwwwwww</p>
    </div>
  );
};

export default HomePage;
