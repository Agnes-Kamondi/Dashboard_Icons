import './index.css'


const Register =()=>{
return(
    <div className="Register">

   
   <div>
   <img src="/edukeri.jpg" id='logo'/>
    </div> 

 

        <form className="formDiv">

            {/* <img src='/cancel.png' id='cancel'></img> */}
            <div className="form">
            <label id='labelname'>Username</label>
            <input placeholder="Your Username" id="inputField" required/>
        
            <label  id='labelname'>School</label>
            <input placeholder="Your School" id="inputField" required/>

            <label  id='labelname'>Email</label>
            <input placeholder="Your Email" id="inputField" required/>

            <label  id='labelname'>Password</label>
            <input placeholder="Your Password" type=" password" id="inputField" required/>
                
            </div>
            <button id="btnRegister">REGISTER</button>
        <h1 id="or">OR</h1>
        <h2 id="option">Sign In with</h2>

        <h1 id="google">G</h1>
           
        </form>

        

    </div>
)
}

export default Register