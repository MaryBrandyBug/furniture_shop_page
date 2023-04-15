import './App.scss';
import { Header } from '../Header';
import { Galary } from '../Galary';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="galary_container">
        <Galary />
      </div>
    </div>
  );
}

export default App;
