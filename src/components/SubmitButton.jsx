function SubmitButton({ loading, disabled }) {
  return (
    <button
      type="submit"
      className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
      disabled={disabled || loading}
      aria-label="Get description"
    >
      {loading ? 'Processing...' : 'Get Description'}
    </button>
  );
}

export default SubmitButton;