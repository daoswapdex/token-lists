import React from 'react';
import Layout from 'dumi-theme-default/src/layout';

export default ({ children, ...props }) => (
  <Layout {...props}>
    <>{children}</>
  </Layout>
);
