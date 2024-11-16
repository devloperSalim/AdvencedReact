import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Form from './Form.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS (optional)

// Ensure to reference only one `StrictMode` wrapper
createRoot(document.getElementById('root')).render(
  <div className="container my-5 w-50">
    <Form />
  </div>
);

