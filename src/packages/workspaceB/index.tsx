
import * as React from 'react';

export interface WelcomePageProps{
  username: string,
  width:number,
  background:string,
  color?:string 
}


const WelcomePage = ({username,width,background,color}: WelcomePageProps) => {
    
  let Color = color || "White"
  return(
    <div style={{width:`${width}%`,height:"100vh",
                  display:"flex",justifyContent:"space-evenly",
                  alignItems:"center",background:background,
                  flexDirection:"column",color:Color}}>
                    
        <h1>This component is rendering from Typescript file</h1>
        <h3>{`welcome ${username}`}</h3>

    </div>
  )
}

export default WelcomePage;