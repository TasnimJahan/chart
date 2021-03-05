import './App.css';
import SimpleLineChart from './components/SimpleLineChart/SimpleLineChart';
import StackedAreaChart from './components/StackedAreaChart/StackedAreaChart';

function App() {
  return (
    <div className="App">
      <SimpleLineChart></SimpleLineChart>
      <br/>
      <StackedAreaChart></StackedAreaChart>
    </div>
  );
}

export default App;
