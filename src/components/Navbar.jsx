function Navbar() {
  return (
    <div className="navbar bg-primary text-primary-content shadow-md">
      <div className="container mx-auto">
        <div className="flex-1">
          <a href="/" className="text-xl font-bold">Image Description AI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/help">Help</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;