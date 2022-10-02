import './App.css';
import BottomNavigationBar from './components/BottomNavigation/BottomNavigationBar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="bgc">
      <div className="bg">
        <Homepage />
        <BottomNavigationBar />
      </div>
    </div>
  );
}

export default App;
