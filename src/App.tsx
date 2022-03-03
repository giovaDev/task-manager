import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './app/login/Login/Login';
import Component from './app/shared/CoreElements/CoreElement';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Login />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>

        <Routes>
          <Route path='/core-elements' element={<Component />}>
            <Route index element={<Component />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
