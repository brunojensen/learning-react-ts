import { Routes, Route } from 'react-router-dom';
import { About } from '../about/About';
import { Home } from '../home/Home';
import { Layout } from '../layout/Layout';
import { TodoList } from '../todoList/TodoList';

function E404() {
  return <h2>ERR 404</h2>;
}

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="todos" element={<TodoList />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<E404 />} />
      </Route>
    </Routes>
  );
};
