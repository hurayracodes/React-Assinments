import React, { useEffect, useState } from "react";

function ApiExample() {
  const [news, setNews] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [mes, setMes] = useState('')
  const colorMessage = {
    color :"red"
  }
  async function apiNews() {
    const url =
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=74dcd7b6020941ca9c168437ec76b39b";
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.articles);
    setNews(data.articles);
    setAllNews(data.articles);
  }

  function removeNews(title) {
    let fillterNews = news.filter((allNews) => allNews.title !== title);
    setNews(fillterNews);
  }

  useEffect(() => {
    apiNews();
  }, []);

  function forSearch(text) {
    let searchNews = allNews.filter((inp) =>
      inp.title.toLowerCase().startsWith(text.toLowerCase())
    );
    let message;
    if (searchNews.length === 0) {
     setMes('News nahi hai')
      
    }else{
      setMes('');
    }
    setNews(searchNews);
  }
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <input id="inp"
              type="text"
              onChange={(det) => forSearch(det.target.value)}
            />
            <p style={colorMessage}>{mes}</p>
          <div className="flex flex-wrap -m-4">

            {/* Single Card Start */}
            {news.map((evt) => {
              return (
                <div className="p-4 md:w-1/3 w-full">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={evt.urlToImage}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {evt.title}
                      </h1>
                      <p className="leading-relaxed mb-3">{evt.description}</p>
                      <div className="flex items-center flex-wrap">
                        <a
                          href={evt.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-500 cursor-pointer inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>

                        <button
                          onClick={() => removeNews(evt.title)}
                          className="bg-blue-300 py-2 px-3 text-white"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Single Card End */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ApiExample;
