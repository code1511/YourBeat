import './App.css';

function App() {
  return (
    <div className="App">
     <form className="box-form">
     <h1 className="top">log in </h1>
       <input className="input" type="text" placeholder="Username"></input>
       <br/>
       <input className="input" type="text" placeholder="Password"></input>
       <br/>
       <br/>
       <input className="input" type="submit" value="Submit"></input>
       <br/>
       <lable>Not registered yet, Register now !</lable>
       <br/>
       <input className="input" type="submit" value="Register"></input>

     </form>
    </div>
  );
}

export default App;
