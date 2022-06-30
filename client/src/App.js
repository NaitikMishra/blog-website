import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const user = true;//this is a test message just to show that if user has login he should not go to register page that why in register row it is mentioned
  return (
    <Router>
      <Topbar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/register" element={user ? <Home/> : <Register/>} />
      <Route exact path="/login" element={user ? <Home/> : <Login/>} />
      <Route exact path="/write" element={user ? <Write/> : <Register/>} />
      <Route exact path="/setting" element={user ? <Setting/> : <Register/>} />
      <Route exact path="/post/:postId" element={<Single/>} />
      </Routes>
    </Router>
  );
}
 
export default App;
