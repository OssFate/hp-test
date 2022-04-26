import { BrowserRouter, Routes, Route } from 'react-router-dom';

import login from './pages/login/login';
import main from './pages/main/main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" component={login} />
        <Route path="/" component={main} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
