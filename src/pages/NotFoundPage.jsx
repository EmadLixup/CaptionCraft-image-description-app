function NotFoundPage() {
  return (
    <div className="container mx-auto p-6 text-center">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
          <p>Sorry, the page you’re looking for doesn’t exist.</p>
          <a href="/" className="btn btn-primary mt-4">Back to Home</a>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;