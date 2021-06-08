import react, { useEffect } from 'react'
import '../assets/css/App.css';
import Header from './Header'
import Footer from './Footer'

function App() {
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    document.title = `Flag App`;
  });
  return (
    <div >
      <Header/>
      <Footer/>
    </div>
  );
}
export default App