import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="tw-bg-orange-800 tw-text-orange-100 tw-font-roboto tw-font-light">
      <nav className="tw-container tw-mx-auto tw-py-3 tw-text-center">
        <h1 className="tw-ext-4xl">Nigerian names</h1>
        <ul className="tw-flex tw-justify-around tw-align-middle tw-font-light tw-text-3xl tw-text-orange-200">
          <li className="tw-text-orange-200">
            <Link to={"/"} className="tw-text-inherit">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/contribute"} className="tw-text-inherit">
              Contribute
            </Link>
          </li>
          <li>
            <Link to={"/search"} className="tw-text-inherit">
              Search
            </Link>
          </li>
          <li>
            <Link to={"/blog"} className="tw-text-inherit">
              Blog
            </Link>
          </li>
          <li>
            <Link to={"/account"} className="tw-text-inherit">
              Account
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
