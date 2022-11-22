
import {SearchBar} from './components/SearchBar';
import Profile from './components/Profile';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>

        <Routes>

          <Route  exact path="/" element={<SearchBar />}  />

          <Route  path="/profile/:name" element={<Profile />}/>  
        </Routes>
      </Router>

    </div>
  );
}

export default App;
