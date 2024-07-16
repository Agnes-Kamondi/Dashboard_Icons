import { ToggleSlider } from "react-toggle-slider";
import './index.css';

const Login = () =>{
    return(
        <div className="container">
            <div className="content">
                <div className="Platform">
                    <div><img src="/Images/logo.png" alt="logo" className="logo_img"/></div>
                    <div><h2>Edukeri</h2></div>
                </div>
                <div>
                    <div>
                        <div>
                            <p>Username</p>
                            <input type="text" className="username" name="username" text= "Your Name"/>
                        </div>
                        <div>
                            <p>Password</p>
                            <input type="password" className="password" name="password" text= "Your Password"/>
                        </div>
                    </div>
                    <div>
                        <div  className=" slider">
                       <ToggleSlider 
                        active={true}
                        draggable={true}
                        onToggle={(active) => console.log(`Slider toggled to ${active}`)}
                        padding={10}
                        flip={true}
                        transitionDuration={200}
                        handleSize={20}
                        width = {200}
                        handleBorderRadius={10}
                        />
                        <p>Remember me</p>
                        </div>
                    <button>Sign In</button>
                    <br/>
                    <p>Already have an account? <span>Sign Up</span></p>
                   </div>
                </div>     
            </div>
                  <div className="hero_image">
                       <div><img src="/Images/logo.png" alt="logo" className="hero_img"/></div>
                       <div><h1>Edukeri</h1></div>
                 </div>
         </div>
    )
}
export default Login;