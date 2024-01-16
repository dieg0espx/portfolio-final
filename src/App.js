import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Cover from './components/Cover';
import ContactMethods from './components/ContactMethods';
import WaveDivider from './components/WaveDivider';
import Ttfscaffolding from './components/Ttfscaffolding';

function App() {
  return (
    <div className="App">
      <Header />
      <Cover />
      <ContactMethods />
      <div className='experience'>
        <Ttfscaffolding />
      </div>
    </div>
  );
}

export default App;
