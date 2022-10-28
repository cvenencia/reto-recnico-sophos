import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClientBalance from './pages/Client/ClientBalance';
import LeastRented from './pages/Admin/LeastRented';
import MostRented from './pages/Admin/MostRented/MostRented';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/client'>
                        <Route path=':id'>
                            <Route
                                path='balance'
                                element={<ClientBalance />}
                            ></Route>
                        </Route>
                    </Route>

                    <Route path='/admin'>
                        <Route
                            path='least-rented-by-age-group'
                            element={<LeastRented />}
                        />
                        <Route
                            path='most-rented-game'
                            element={<MostRented />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
