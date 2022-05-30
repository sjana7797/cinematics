function SearchText() {
  return (
    <div className="my-10 mx-2 flex w-fit items-center rounded-full bg-black pl-2 md:mx-auto md:ml-10">
      <input
        className="max-w-md bg-transparent px-3 placeholder:text-base-content/70 focus:outline-none"
        placeholder="Enter movie or tv shows"
      />
      <button className="btn btn-primary btn-sm md:btn-md">search</button>
    </div>
  );
}

export default SearchText;
