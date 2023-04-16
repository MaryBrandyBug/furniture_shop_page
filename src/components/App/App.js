import './App.scss';
import { Header } from '../Header';
import { Galary } from '../Galary';
import { Subscription } from '../Subscription';
import { Footer } from '../Footer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content_container">
        <Galary />
        <Subscription />
        <Footer />
      </div>
    </div>
  );
}

export default App;
