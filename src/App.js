import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Functions from "./functions";
import All from "./all";
import Pricea from "./pricea";
import Priceb from "./priceb";
import Five from "./five";
import Nm from "./nm";
import Ten from "./ten";
import Soft from "./soft";
import Ind from "./indigo";
import Delete from "./delete";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Functions></Functions>
        <Switch>
          <Route path="/" component={All} exact={true} />
          <Route path="/pricea" component={Pricea} exact={true} />
          <Route path="/priceb" component={Priceb} exact={true} />
          <Route path="/five" component={Five} exact={true} />
          <Route path="/nm" component={Nm} exact={true} />
          <Route path="/ten" component={Ten} exact={true} />
          <Route path="/soft" component={Soft} exact={true} />
          <Route path="/ind" component={Ind} exact={true} />
          <Route path="/delete" component={Delete} exact={true} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
