function DescriptionDisplay({ description }) {
  if (!description) return null;
  return (
    <div className="mt-6">
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Description</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionDisplay;