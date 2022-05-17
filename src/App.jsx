import './App.css';
import './App.jsx';
import placesToGoJSON from './places-data.json';
import SignupPage from './pages/SignupPage';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
// import SimpleMap from './pages/SimpleMap';
import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import Places from './pages/Places';
import PlacesDetails from './pages/PlacesDetails';
import { useEffect, useState } from 'react';
import PlacesCreate from './pages/PlacesCreate';
import IsAdmin from './components/IsAdmin';
import axios from 'axios';

function App() {
  const [placesData, setPlacesData] = useState(placesToGoJSON);

  useEffect(() => {
    axios.get('http://localhost:5005/api/places').then((response) => {
      console.log(response.data);
      setPlacesData([...response.data]);
    });
  }, []);
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage data={placesData} />} />
        <Route
          path='/signup'
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path='/login'
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        {/* 
        <Route path='/map' element={<SimpleMap />} /> */}
        <Route
          path='/placedetails/:id'
          element={
            <IsPrivate>
              <PlacesDetails data={placesData} />
            </IsPrivate>
          }
        />
        <Route
          path='/places-create'
          element={
            <IsPrivate>
              <IsAdmin>
                <PlacesCreate />
              </IsAdmin>
            </IsPrivate>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
