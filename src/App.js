import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Two from "./Two";
import One from "./One";
import { AppInsightsContext } from "@microsoft/applicationinsights-react-js";
import usePageView from "./usePageView";
import { reactPlugin } from "./AppInsights";
function App() {
  usePageView();
  return (
    <AppInsightsContext.Provider value={reactPlugin}>
      <div className="App">
        <div className="App-Header">
          <a href="/start">start</a>

          <br></br>
          <a href="/middle">middle</a>

          <br></br>
          <a href="/end">end</a>

          <Router>
            <Switch>
              <Route path="/start">
                <One />
              </Route>
              <Route path="/middle">
                <Two />
              </Route>

              <Route path="/end">
                <Two />
                <One />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </AppInsightsContext.Provider>
  );
}

export default App;
