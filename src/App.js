import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import BoardList from './page/BoardList';
import Layout from './components/Layout';
import Board from './page/Board';
import NotFound from './page/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* 레이아웃 */}
        <Route path="/" element={<Layout />}>
          {/* 페이지 */}
          <Route path="/" element={<Home /> } />
          <Route path="/about" element={<About /> } />
          <Route path="/boardlist" element={<BoardList /> }>
            <Route path=":id" element={<Board />} />
          </Route>
        </Route>

        {/* 페이지 잘못 들어가는 것 방지 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
