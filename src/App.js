import logo from './logo.svg';
import './App.css';
import { AppBar } from '@material-ui/core';
import NavBar from './navbar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import Posts from './card';

function App() {
  return (
    <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title" color="inherit">
              <NavBar> </NavBar>
           </TypoGraphy>
          </Toolbar>
        </AppBar>
        <Posts/>
    </div>
  );
}

export default App;
