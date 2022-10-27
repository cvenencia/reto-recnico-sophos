import Header from './components/header/Header';

function App() {
    return (
        <div className='App'>
            <Header
                title='Cliente'
                links={[<a href='/'>oli</a>, <a href='/'>xd</a>]}
            />
        </div>
    );
}

export default App;
