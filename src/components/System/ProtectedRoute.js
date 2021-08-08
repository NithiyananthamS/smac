//import react-router-dom components for routing
import { Route, Redirect } from 'react-router-dom';

//importing authentication instance
// import './Authentication.js';

const ProtectedRoute = ({component: Component, ...rest}) => {
    return(
        <Route 
            {...rest}
            render = {props => {
                    if(false){
                        return <Component {...props} />
                    }
                    else{
                        return <Redirect to={
                            {
                                pathname: "/Login.js"
                            }
                        } />
                    }
                }
            }
        />
    );
}

export default ProtectedRoute;