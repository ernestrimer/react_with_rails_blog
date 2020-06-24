import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <>
    <h1>Error 404: page no found</h1>
    <Link to='/'>Return Home</Link>
  </>
)

export default NoMatch;
