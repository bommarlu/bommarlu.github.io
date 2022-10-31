// import logo from './logo.svg';
import './App.css';
import SidebarMenu from './Components/SidebarMenu';
import Header from './Components/Header';
import {SidebarElts} from './Components/ListMenu/SidebarElts';
import ContentPane from './Components/ContentPane';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import ListMenu from './Components/ListMenu/ListMenu';


function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="Content">
        <Router>
          <ListMenu title="Pages" isSidebar={true} elements={SidebarElts}/>
          <ContentPane></ContentPane>
        </Router>
      </div>
      
    </div>
  );
}

export default App;
