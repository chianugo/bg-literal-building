import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-orange-800 text-orange-100 font-roboto font-light">
      <nav className="container mx-auto py-3 text-center">
        <h1 className="text-4xl">Nigerian names</h1>
        <ul className="flex justify-around align-middle font-light text-3xl">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/contribute"}>Contribute</Link>
          </li>
          <li>
            <Link to={"/search"}>Search</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/account"}>Account</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
