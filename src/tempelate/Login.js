import React,{useContext,useState} from 'react'
import { DataAppContext } from './DataApp';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const initialData = {
        username: '',
        password: '',
    }
    const navigate= useNavigate();
        const localContext=useContext(DataAppContext);
    //state object for formdata
    const [loginformdata, setFormdata] = useState(initialData);

    //state variable to check form submission status
    const [loginstatus, setStatus] = useState(false);

    //method to update each key of state object
    const updateData = (e) => {
        console.log(e.target.id, e.target.value);
        let tempObj = {};
        tempObj[e.target.id] = e.target.value.trim();
        setFormdata({
            ...loginformdata, ...tempObj
        });
    }

    //methods for form submission button
    const LoginFn = () => {
            
            
            let temp = JSON.parse(localStorage.getItem('users')) ;
            
              for(let i=0;i<temp.length;i++){
                if(temp[i].username === loginformdata.username){
                    if(temp[i].password === loginformdata.password){
                        setStatus(true);
                        const obj={
                            ...localContext.appState,
                            loginstatus:true,
                           username: loginformdata.username,
                        }
                        localContext.setAppState(obj);
                        navigate('/home')
                    }
                }
              }
    }



  return (
    <div>Login
          Username: <input type="text" id="username" onChange={updateData} value={loginformdata.username} /><br></br>

Password: <input type="password" id="password" onChange={updateData} value={loginformdata.password} /><br></br><br></br>

<button onClick={LoginFn}>Login</button>
<br></br>
<br></br>

{loginstatus && <div class="alert alert-success" role="alert">
    <h2>Successfully Loged in</h2>
    </div>
}
    </div>
  )
}

export default Login