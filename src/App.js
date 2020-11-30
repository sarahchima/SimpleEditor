import './App.css';
import Editor from './Components/Editor';
import Preview from './Components/Preview';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path='/preview'
          render={(props) => (
            <Preview {...props}  />
          )}
        />
        <Route path="/">
          <Editor/>
        </Route>
      </Switch>
  </Router>
);
}

export default App;
