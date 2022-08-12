import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SubscriptionPage from './pages/SubscriptionPage';
function App() {
  return (
    <>
      {/* <HomePage></HomePage> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='feeds/subscriptions' element={<SubscriptionPage></SubscriptionPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
