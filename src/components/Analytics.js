// src/components/Analytics.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
const IS_PROD = process.env.NODE_ENV === 'production';

if (GA_TRACKING_ID && IS_PROD) {
  ReactGA.initialize(GA_TRACKING_ID);
}

const Analytics = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (GA_TRACKING_ID && IS_PROD) {
      const page = pathname + search;
      ReactGA.set({ page });
      ReactGA.pageview(page);
    }
  }, [pathname, search]);

  return null;
};

export default Analytics;
