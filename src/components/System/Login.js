import './Login.css';

//importing from Widgets.js file we created
import { SmacButton } from './Widgets';


//Login Component 
const Login = () => {
    return(
        <div className="login">
            <div className="loginContainer">
                <label className="appTitle"> 
                    SMAC
                </label>
                <div className="buttonHolder">
                    <SmacButton className="signInButton">
                            SignIn with Google
                    </SmacButton>
                </div>
            </div>
        </div>
    );
}


export default Login;



