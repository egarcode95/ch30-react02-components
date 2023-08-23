
import './App.css';
import CounterPage from './components/counter/counter-page';
import Greeting from './components/greeting/greeting';
import Generation from './components/generation/generation';
import { Navbar, Footer } from './components/navbar/navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <CounterPage />
      {/* <Greeting />
      <Generation />
      <Footer /> */}
    </div>
  );
}

export default App;