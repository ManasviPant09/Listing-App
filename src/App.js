import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element = {<Home />}>
      </Route>
      <Route exact path="/cart" element = {<Cart />}>
      </Route>
     </Routes>
    </BrowserRouter>
  );
}
export default App;
