import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Settings from "./components/Settings/Settings";

function App() {
  const onSubmit = (obj) => {
    console.log('onSubmit', obj)
  }

  const onSettingInput = (setting) => {
    console.log('setting', setting)
  }

  return (
    <div className="App">
      <div className="App-left">
        <Signin onSubmit={onSubmit}/>
        <hr/>
        <Signup onSubmit={onSubmit}/>
      </div>
      <div className="App-right">
        <Settings onSubmit={onSettingInput}/>
      </div>
    </div>
  );
}

export default App;
