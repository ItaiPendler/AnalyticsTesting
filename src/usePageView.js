import {useEffect } from "react";
import ReactGA from 'react-ga';
const usePageView = () => {
  useEffect(() => ReactGA.pageview(window.location.pathname), []);
};

export default usePageView;