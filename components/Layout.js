import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <>
      <div className="h-20 w-full items-center justify-center flex gap-x-20">
        <p className="m-16 relative group cursor-pointer p-x-1">
          <span>
            home
            <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-white group-hover:w-1/2 group-hover:transition-all duration-500"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-white group-hover:w-1/2 group-hover:transition-all duration-500"></span>
          </span>
        </p>
        <p className="m-16 relative group cursor-pointer p-x-1">
          <span>
            about me
            <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-white group-hover:w-1/2 group-hover:transition-all duration-500"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-white group-hover:w-1/2 group-hover:transition-all duration-500"></span>
          </span>
        </p>
        <p className="m-16 relative group cursor-pointer p-x-1">
          <span>
            portfolio
            <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-white group-hover:w-1/2 group-hover:transition-all duration-500"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-white group-hover:w-1/2 group-hover:transition-all duration-500"></span>
          </span>
        </p>
        <p className="m-16 relative group cursor-pointer p-x-1">
          <span>
            resume
            <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-white group-hover:w-1/2 group-hover:transition-all duration-500"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-white group-hover:w-1/2 group-hover:transition-all duration-500"></span>
          </span>
        </p>
      </div>
      {children}
      <footer className="h-60 w-[90%] items-center m-auto justify-center flex gap-x-20 border-slate-600 border-t">
        <a href="https://github.com/gcd253" className="m-20">
          <Image src="/github-logo.svg" width={55} height={55} alt="github logo"/>
        </a>
        <a
          href="https://www.linkedin.com/in/griffin-dooley/"
          className="m-20 cursor-pointer bg-white p-2 rounded-lg"
        >
          <Image src="/linkedin-logo.svg" width={40} height={40} alt="linkedin logo"/>
        </a>
      </footer>
    </>
  );
};

export default Layout;
