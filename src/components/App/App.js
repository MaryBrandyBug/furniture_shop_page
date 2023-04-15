import './App.scss';
import { Header } from '../Header';
import { Galary } from '../Galary';
import { Subscription } from '../Subscription';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content_container">
        <Galary />
        <Subscription />
      </div>
    </div>
  );
}

export default App;
