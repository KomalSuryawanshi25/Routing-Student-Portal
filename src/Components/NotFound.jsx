import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center text-center" style={{ minHeight: "80vh" }}>
      
      <div>
        <h1 style={{ fontSize: "80px" }}>404</h1>
        <h3 className="mb-3">Page Not Found 😢</h3>
        <p className="text-muted mb-4">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link to="/" className="btn btn-secondary">
          Go Back Home
        </Link>
      </div>

    </div>
  );
}

export default NotFound;