import './App.css';
// import "./img/bgImg1"

function App() {
  return (
    <div className="App">
     <form className="box-form">
     <h1 className="top">log in </h1>
       <input className="input"  type="text" name="username" placeholder="Username" required></input>
       <br/>
       <input className="input" type="password" name="password" placeholder="Password" required></input>
       <br/>
       <br/>
       <input className="Sub-button" type="submit" value="Submit" ></input>
       <br/>
       <lable>Not registered yet, Register now !</lable>
       <br/>
       <input className="Sub-button" type="submit" value="Register"></input>

     </form>
    </div>
  );
}

export default App;
