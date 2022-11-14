import './App.css';
import AppRoutes from './components/Routes/AppRoutes';

function App() {
  const renderComponents = () => {
    return(
      <>
      <AppRoutes/>
      </>
    )
  }
  return (
     renderComponents()
  );
}

export default App;
