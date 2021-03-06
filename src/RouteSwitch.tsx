import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
