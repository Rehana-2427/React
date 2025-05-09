import CountAsync from './CountAsync';
import Counter from './Counter';
import LazyInitialization from './LazyInitialization';
import CardChild from './StateUplifiting/CardChild';
import Parent from './StateUplifiting/Parent';

function App() {
  return (
    <div className="App">
        <Counter />
        <CountAsync />
        <LazyInitialization />
        <CardChild name="Rehana-sending props from parent"/>
        <Parent />
    </div>
  );
}

export default App;
