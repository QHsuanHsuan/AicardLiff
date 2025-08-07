import './ErrorMessage.css';

function ErrorMessage({ error }) {
  if (!error) return null;
  
  return (
    <p className="error-message">{error}</p>
  );
}

export default ErrorMessage;