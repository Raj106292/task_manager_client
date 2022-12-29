import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/routes';

function App() {
  return (
    <div className="max-w-7xl mx-auto p-2">
      <RouterProvider router={routes} ></RouterProvider>
    </div>
  );
}

export default App;
