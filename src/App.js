import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import Navigation from './components/Navigation';
import Apropos from './components/Apropos';
import Competences from './components/Competences';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Atouts from './components/Atouts';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Apropos />
      <Competences />
      <Atouts />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
