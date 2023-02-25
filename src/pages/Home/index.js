import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import BlogList from "../../components/Home/BlogList";
import { useState } from "react";
import { blogs } from "../../config/data";

const Home = () => {
  const [filteredArr, setFilteredArr] = useState(blogs);
  const searchBarInputHandler = (userSearchInput) => {
    const filtered_arr = blogs.filter((blogs_p) =>
      blogs_p.category
        .toLowerCase()
        .includes(userSearchInput.toLowerCase())
    );

    setFilteredArr(filtered_arr);
  };

  return (
    <div>
      <Header />
      <SearchBar onSubmit={searchBarInputHandler} />
      <BlogList blogs_arr={filteredArr} />
    </div>
  );
};

export default Home;
