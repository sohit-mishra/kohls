import { Routes ,Route } from 'react-router-dom'
import Home from './Home';
// import Login from './Router/Login';
// import Logout from './Router/Logout';
// import Cart from './Router/Cart';
// import Search from './Router/Search';
// import Card from './Router/Card';
// import Help from './Router/Help';
// import Contactus from './Router/Contactus';
// import Product from './Router/Product';
// import Drashboard from './Router/Drashboard';


export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/" element={<Login />} />
      <Route path="/" element={<Logout />} />
      <Route path="/" element={<Cart />} />
      <Route path="/" element={<Search />} />
      <Route path="/" element={<Card />} />
      <Route path="/" element={<Copuons />} />
      <Route path="/" element={<Help />} />
      <Route path="/" element={<Contactus />} />
      <Route path="/" element={<Product />} />
      <Route path="/" element={<Drashboard />} />
      <Route path="/" element={<Drashboard />} /> */}
    </Routes>
  )
}
