import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Homepage from './components/Home.page';
import Ingredients from './components/Ingredients.page';
import About from './components/About.page';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/ingredients">Ingredients</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/ingredients" element={<Ingredients />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </>
            <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        </QueryClientProvider>
    );
}

export default App;
