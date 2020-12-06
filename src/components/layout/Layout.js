import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import EstablishmentPageDetail from "../detail/EstablishmentPageDetail";
import { AuthContextProvider } from "../../context/AuthContext";
import AddEstablishment from "../admin/addEstablishment/AddEstablishmentForm";
import Register from "../auth/Register";
import Dashboard from "../admin/Dashboard";
import Navigation from "./Nav";
import Hotels from "../hotels/Hotels";
import Order from "../order/Order";

function Layout() {
    return (
        <AuthContextProvider>
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/hotels" component={Hotels} />
                    <Route path="/establishment/:id" component={EstablishmentPageDetail} />
                    <Route path="/order/:id" component={Order} />
                    <Route path="/register" component={Register} />
                    <Route path="/admin" exact component={Dashboard} />
                    <Route path="/admin/establishments/add" exact component={AddEstablishment} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </AuthContextProvider>
    );
}

export default Layout;