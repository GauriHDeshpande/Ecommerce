import './App.css';
import Auth from './pages/Auth/Auth';
function App() {
  const renderComponents = () => {
    return(
      <>
      <Auth/>
      </>
    )
  }
  return (
     renderComponents()
  );
}

export default App;
