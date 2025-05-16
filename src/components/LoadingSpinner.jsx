function LoadingSpinner({ loading }) {
  if (!loading) return null;
  return (
    <div className="flex justify-center mt-4">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );
}

export default LoadingSpinner;