import DependecnyList from "./DependecnyList";
import HookUseEffect from "./HookUseEffect";
import UpdateUnmount from "./UpdateUnmount";
import UpdatingState from "./UpdatingState";
 

function App() {
  return (
    <div className="App">
      <HookUseEffect />
      <UpdateUnmount />
      <DependecnyList />
      <UpdatingState />
    </div>
  );
}

export default App;
