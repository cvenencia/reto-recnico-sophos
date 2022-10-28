import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClientBalance from './pages/Client/ClientBalance';
import LeastRented from './pages/Admin/LeastRented';
import MostRented from './pages/Admin/MostRented';
import MostFrequent from './pages/Admin/MostFrequent';
import SalesOfDay from './pages/Admin/SalesOfDay';
import Admin from './pages/Admin';
import Claim from './pages/Admin/Claim';

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
                        <Route index element={<Admin />} />
                        <Route
                            path='least-rented-by-age-group'
                            element={<LeastRented />}
                        />
                        <Route
                            path='most-rented-game'
                            element={<MostRented />}
                        />
                        <Route
                            path='most-frequent-client'
                            element={<MostFrequent />}
                        />
                        <Route path='sales-of-day' element={<SalesOfDay />} />
                        <Route path='claim' element={<Claim />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
