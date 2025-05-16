function ErrorMessage({ error }) {
  if (!error) return null;
  return (
    <div className="alert alert-error mt-2">
      <span>{error}</span>
    </div>
  );
}

export default ErrorMessage;