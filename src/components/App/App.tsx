import { Route, Routes } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
import Shop from '../Shop';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
};

export default App;
