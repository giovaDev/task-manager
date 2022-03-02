import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './app/login/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Login />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
