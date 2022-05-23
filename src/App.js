import  AppBar  from './component/AppBar';
import Login from './component/Login';
import './App.css';
import { useEffect, useState } from 'react';
import Dashboard from './component/Dashboard';

function App() {

 const [login, setLogin] = useState(false)

 useEffect(()=>{
   console.log(login)
 })

 



  return (
    <div className="App">
    <AppBar/>
    {/* {!login && <Login login={login} setLogin={setLogin} />}
    {login && <Dashboard/>} */}
    {login ? <Login login={login} setLogin={setLogin}/> : <Dashboard/>}
    </div>
  );
}

export default App;
