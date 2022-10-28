import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClientBalance from './pages/Client/ClientBalance';
import Admin from './pages/Admin';

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

                    <Route path='/admin' element={<Admin />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
