import './Page.css';
import { BrowserRouter as Router, Route, Routes} from  "react-router-dom";
import Home from './homePage/Mainpage';
import Ranks from './rankElement/rank';
import Tiers from './tierList/tier';
import Gallery from './gallery/gallery';

function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route exact path="/" element={<Tiers/>}/>
        <Route exact path="/Rank" element={<Ranks/>}/>
        <Route exact path="/Gallery" element={<Gallery/>}/>
      </Routes>
    </Router>
  );
}

export default App;
