import './App.css';
import {useEffect, useState} from 'react';
// Import the following components
import AuthPage from '../AuthPage/AuthPage';
import AnimePage from '../AnimePage/AnimePage';
import WatchListPage from '../WatchListPage/WatchListPage';
import {Routes, Route} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import {getUser} from '../../utilities/users-service';

function App() {
    // set the user by calling getUser function
    const [user, setUser] = useState(getUser());

    return (
        < main className="App">
            {user ?
                <>
                    <NavBar user={user} setUser={setUser}/>
                    <Routes>
                        <Route path="/animes" element={<AnimePage/>}/>
                        <Route path="/watchlist" element={<WatchListPage/>}/>
                    </Routes>
                </>
                :
                <AuthPage setUser={setUser}/>}

        </main>
    );
}

export default App;