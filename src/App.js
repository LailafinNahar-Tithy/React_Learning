// import FirstPage from "./components/FirstPage";
// import HomePage from "./components/HomePage";
// import Navbar from "./components/Navbar"; //for props

import { BrowserRouter as Router } from "react-router-dom";
import NavigationStack from "./components/NavigationStack";
function App() {
  return (
    <div >
    {/* <Navbar One="Home" Two="SignIn" Three="VIP"/> */}

    {/* <FirstPage/>
    <HomePage/> for props\\\\*/}


    {/* navigation ------*/}
    <Router>
      <NavigationStack/>
    </Router>

    </div>
  );
}

export default App;
