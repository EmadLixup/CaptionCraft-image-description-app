function ResetButton({ onReset }) {
  return (
    <button
      type="button"
      className="btn btn-outline w-full mt-2"
      onClick={onReset}
      aria-label="Reset form"
    >
      Reset
    </button>
  );
}

export default ResetButton;