function HelpPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold">Help</h1>
          <h2 className="text-lg font-semibold">How to Use</h2>
          <p>1. Go to the Home page.</p>
          <p>2. Upload or drag-and-drop a PNG or JPEG image (max 5MB).</p>
          <p>3. Click "Get Description" to see the AI-generated description.</p>
          <h2 className="text-lg font-semibold mt-4">Troubleshooting</h2>
          <p>- Ensure your image is a valid format (PNG, JPEG).</p>
          <p>- Check your internet connection if the server fails to respond.</p>
        </div>
      </div>
    </div>
  );
}

export default HelpPage;