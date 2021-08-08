import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//importing protected route for protecting url's
import ProtectedRoute from './ProtectedRoute.js';

//importing components
import Login from './Login.js';
import Home from './Home.js';
import NotFound from './NotFound.js';

const Routes = () => {
    return (
        <div className="Routes">
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/Login.js" component={Login} />
                    <ProtectedRoute exact path="/Home.js" component={Home} />
                    <ProtectedRoute path="*" component={NotFound} />
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;