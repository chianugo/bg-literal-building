const Header = () => {
  return (
    <div className="bg-orange-800 text-orange-100 font-roboto font-light">
      <div className="container mx-auto py-3 text-center">
        <h1 className="text-4xl">Nigerian names</h1>
        <div className="flex justify-around align-middle font-light text-3xl">
          <a href="#" className="basis-0">
            Home
          </a>
          <a href="#" className="basis-0">
            Contribute
          </a>
          <a href="#" className="basis-0">
            Search
          </a>
          <a href="#" className="basis-0">
            Blog
          </a>
          <a href="#" className="basis-0">
            Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
