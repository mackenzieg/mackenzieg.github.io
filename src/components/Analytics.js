import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
const IS_PROD = process.env.NODE_ENV === 'production';

if (GA_TRACKING_ID && IS_PROD) {
  ReactGA.initialize(GA_TRACKING_ID);
}

export default function Analytics() {
  const { pathname, search } = useLocation();
  const prev = useRef('');

  useEffect(() => {
    const page = pathname + search;
    if (prev.current === page) return;
    prev.current = page;
    if (GA_TRACKING_ID && IS_PROD) {
      ReactGA.send({ hitType: 'pageview', page });
    }
  }, [pathname, search]);

  return null;
}