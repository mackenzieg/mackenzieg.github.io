import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PageNotFound = () => (
  <HelmetProvider>
    <div className="not-found">
      <Helmet title="404 Not Found">
        <meta name="description" content="The content you are looking for cannot be found." />
      </Helmet>
      <h1 data-testid="heading">404 Page Not Found</h1>
      <Link to="/"><p>Return home.</p></Link>
    </div>
  </HelmetProvider>
);

export default PageNotFound;
