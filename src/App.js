import './App.css';
import '../src/components/Utility.css'
import Home from './components/Home/Home/Home';
import Sidebar from './components/SideBar/Sidebar';

import Navigation from './components/Nav/Nav';


function App() {
  return (
    <div>

      <Navigation></Navigation>
      <Home></Home>

    </div>
  );
}

export default App;
