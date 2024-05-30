const Search = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex border-2 border-orange-800 rounded-xl mt-6">
        <input
          type="text"
          name=""
          id=""
          placeholder="Find Name"
          className="rounded-xl bg-orange-200 text-orange-800"
        />
        <button className="bg-orange-800 p-3 rounded-x text-orange-200">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
