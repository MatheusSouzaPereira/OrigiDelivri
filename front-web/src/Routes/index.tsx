import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Home";
import Orders from "../Orders";
import NavBar from "../NavBar";

function Routes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/orders" component={Orders} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
