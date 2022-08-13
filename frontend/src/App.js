import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SubscriptionPage from './pages/SubscriptionPage';
import SubscribeFeedPage from './pages/SubscribeFeed.page';
import {v4 as uuidv4} from "uuid";
function App() {
  let uniqueId = localStorage.getItem("unique_id");
  if(!uniqueId){
    uniqueId = uuidv4();
    localStorage.setItem("unique_id",uniqueId);
  }
  return (
    <>
      {/* <HomePage></HomePage> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='feeds/subscriptions' element={<SubscriptionPage></SubscriptionPage>}></Route>
          <Route path='feeds/subscribe' element={<SubscribeFeedPage></SubscribeFeedPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
