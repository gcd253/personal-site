const Layout = ({ children }) => {
  return (
    <div>
      <div className="h-20 w-full items-center justify-center flex gap-x-20">
        <p className="m-16 relative group cursor-pointer p-x-1">
          <span>
            Navbar things
            <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-white group-hover:w-1/2 group-hover:transition-all duration-500"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-white group-hover:w-1/2 group-hover:transition-all duration-500"></span>
          </span>
        </p>
        <p className="m-16 relative group cursor-pointer p-x-1">
          <span>
            Navbar things
            <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-white group-hover:w-1/2 group-hover:transition-all duration-500"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-white group-hover:w-1/2 group-hover:transition-all duration-500"></span>
          </span>
        </p>
        <p className="m-16 relative group cursor-pointer p-x-1">
          <span>
            Navbar things
            <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-white group-hover:w-1/2 group-hover:transition-all duration-500"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-white group-hover:w-1/2 group-hover:transition-all duration-500"></span>
          </span>
        </p>
        <p className="m-16 relative group cursor-pointer p-x-1">
          <span>
            Navbar things
            <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-white group-hover:w-1/2 group-hover:transition-all duration-500"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-white group-hover:w-1/2 group-hover:transition-all duration-500"></span>
          </span>
        </p>
      </div>
      {children}
      <footer></footer>
    </div>
  );
};

export default Layout;
