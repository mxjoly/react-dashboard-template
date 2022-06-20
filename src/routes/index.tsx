import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
