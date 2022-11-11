import './App.css';
import LandingPage from './pages/LandingPage/landingPage';
function App() {
  const renderComponents = () => {
    return(
      <>
      <LandingPage/>
      </>
    )
  }
  return (
     renderComponents()
  );
}

export default App;
