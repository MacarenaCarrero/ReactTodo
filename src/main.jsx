import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';

//los componente de ejecutan con etiequetas console.log(<App/>) la primera con mayúscula

createRoot(document.getElementById('root')).render(<App />);
