import { Routes, Route } from 'react-router-dom';
import { About } from '../about/About';
import { Blog } from '../blog/Blog';
import { GiphySearch } from '../giphy/GiphySearch';
import { Layout } from '../layout/Layout';
import { TodoList } from '../todo/TodoList';

function E404() {
  return <h2>ERR 404</h2>;
}

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Blog />} />
        <Route path="todos" element={<TodoList />} />
        <Route path="giphy-search" element={<GiphySearch />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<E404 />} />
      </Route>
    </Routes>
  );
};
