import { useEffect, useState } from "react";

// formulaire
const SearchForm = ({ setSearchTerm }) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    setSearchTerm(search);
  }, [search]);

  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="search">Search your favorite cocktail</label>
          <input
            type="search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
