import React from 'react';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Layout from './components/layout/Layout';
import EstablishmentList from "./components/establishment/EstablishmentList";
import "./sass/style.scss";

function App() {
  return (
    <Layout>
      <div className="App">
        <Container className="card-container">
          <Row>
            <EstablishmentList />
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
export default App;

/*

import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Hotels from "./components/admin/Hotels";
import AddHotel from "./components/admin/AddHotel";
import EditHotel from "./components/admin/EditHotel";
import Dashboard from "./components/admin/Dashboard";
import Layout from "./components/layout/Layout";
import "./sass/style.scss";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Layout />

        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <ProtectedRoute path="/admin" exact component={Dashboard} />
            <ProtectedRoute path="/admin/hotels" exact component={Hotels} />
            <ProtectedRoute path="/admin/hotels/add" exact component={AddHotel} />
            <ProtectedRoute path="/admin/hotels/edit/:id" exact component={EditHotel} />
            <Redirect to="/" />
          </Switch>
        </Container>
      </Router>
    </AuthContextProvider>
  );
}

export default App; */