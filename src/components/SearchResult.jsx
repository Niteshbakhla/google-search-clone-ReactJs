import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi, fetchDataNewsApi } from "../utils/api";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import SearchedItemTemplate from "./SearchedItemTemplate";
import SearchedImageItemTemplate from "./SearchedImageItemTemplate";
import Pagination from "./Pagination";
import { Context, useTheme } from "../utils/ContextApi";
import AnimatedSmiley from "./Animated";
import News from "./News";
import Videos from "./Videos";

const SearchResult = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const { query, startIndex } = useParams();
  const [news, setNews] = useState(null);

  const { imageSearch, selectedMenu } = useTheme();

  useEffect(() => {
    fetchSearchResults();
    fetchNewsResults();
  }, [query, startIndex]);

  const fetchSearchResults = () => {
    setLoading(true);
    let payload = { q: query, start: startIndex };

    if (imageSearch) {
      payload.searchType = "image";
    }

    fetchDataFromApi(payload)
      .then((res) => {
        setResult(res);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const fetchNewsResults = () => {
    fetchDataNewsApi(query)
      .then((res) => setNews(res))
      .catch((err) => console.error(err));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <AnimatedSmiley />
      </div>
    );
  }

  if (!result) return null;
  const { items, queries, searchInformation } = result;

  if (!news) return null;
  const { articles } = news;

  return (
    <div className="flex flex-col min-h-[100vh]">
      <SearchResultHeader />
      <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
        <div className="flex text-sm text-[#7a757a] mb-3">
          {`About ${searchInformation.formattedTotalResults} results in 
          (${searchInformation.formattedSearchTime})`}
        </div>

        {selectedMenu === "All" && (
          <>
            {items.map((item, index) => (
              <SearchedItemTemplate key={index} data={item} />
            ))}
          </>
        )}

        {selectedMenu === "Images" && (
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
            {items.map((item, index) => (
              <SearchedImageItemTemplate key={index} data={item} />
            ))}
          </div>
        )}

        {selectedMenu === "News" && (
          <div>
            {articles.map((data, index) => (
              <News data={data} key={index} />
            ))}
          </div>
        )}

        <Pagination queries={queries} />
      </main>

      <Footer />
    </div>
  );
};

export default SearchResult;
