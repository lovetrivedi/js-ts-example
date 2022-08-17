import WelcomePage from '@packages/workspaceb';
import { useState } from "react";
import './index.css'
import React from "react";

const LoginPage = () => {
    const [isLogin,setIsLogin] = useState(false);
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("")

    const handleLogin = () => {
        if(!username || !password){
            alert("please fill all fields");
            return;
        }
        setIsLogin(true)
    }

    return(

        <div style={{width:"50%",height:"100vh",display:"flex",justifyContent:"space-evenly",alignItems:"center",background:"antiquewhite",flexDirection:"column"}}>
            
            <h1>This component is rendering from javascript file</h1>
            {!isLogin ? 
                <div className="login_form">
                    <input className="_input" value ={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <input className="_input" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="submit_btn" onClick={handleLogin}>Login</button>
                </div>
                :
                <WelcomePage username={username} width={100} background={"antiquewhite"} color={"black"}/>
            }
        </div>
    )
}

export default LoginPage;