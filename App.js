import { useEffect, useState } from 'react';
import './styles.css';
import {useGoogleLogin} from '@react-oauth/google'

function App() {
  const [userData, setuserData] = useState(null)
  const [user, setUser] = useState(null)


function useGoogleLogin(){
  onSuccess:(coderesponse)=>{
    setUser(coderesponse);
    console.log("Code response is: ", coderesponse);
  }
  onError:(error)=>{
    console.log("error is ", error);
  }
}

  useEffect(()=>{
    
  })

  return (
    <div className="App">
      <h1>
        Login Page
      </h1>

      <div class="contanier">      
      {userData ? (
        <>
        <h2>
          Hello my name is: 
        </h2>
        <h2>
          This is my email: 
        </h2>
        </>
      ):(
        <button onClick={login}>
          <img src='https://miro.medium.com/v2/resize:fit:1400/1*u0bwdudgoyKjSLntsRcqiw.png'
          alt='GoogleBtn'/>
        </button>
      )}
      </div>
    </div>
  );
}

export default App;
