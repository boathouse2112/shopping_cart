import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Route path="/" element={<Home />} />
    </BrowserRouter>
  );
};

export default RouteSwitch;
