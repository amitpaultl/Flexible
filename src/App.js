import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Route from './Flexibal/Route/Route';

function App() {
  return (
      <div>
        <RouterProvider router={Route}>

        </RouterProvider>
      </div>
  );
}

export default App;
