import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

const Dashboard = React.lazy(() => import('./container/Dashboard'));

const loading = () => (
  <div className="animated fadeIn pt-1 text-center">Loading...</div>
);

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route
            exact
            path="/dashboard"
            name="dashboard"
            render={props => <Dashboard {...props} />}
          />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
