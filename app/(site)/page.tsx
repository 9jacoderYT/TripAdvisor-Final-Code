"use client";
import SearchBox from "@/components/search/searchbox";
import Search from "@/components/search/search";
import Places from "@/components/places/places";

import Trending from "@/components/trending";

// Import Data
import { places } from "@/lib/data";
import Category from "@/components/category";
import { useState } from "react";

export default function Home() {
  const [type, setType] = useState<string>("all");
  const [results, setResults] = useState<any>(places);

  return (
    <main className="">
      <div className="hidden md:block font-bold text-6xl text-center mt-24 mb-12">
        Where to?
      </div>

      <SearchBox
        type={type}
        setType={setType}
        setResults={setResults}
        results={places}
      />
      <Search results={results} setResults={setResults} places={places} />
      <Places places={results} />

      <div className="max-w-7xl mx-auto block md:flex bg-[#f2b203] p-5 space-x-5 my-10">
        <div>
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/0e/80/f6/caption.jpg?w=1000&h=-1&s=1" />
        </div>

        <div className="mt-5 md:mt-0">
          <p className="text-3xl font-bold text-white mb-5 text-center">
            Help Maui & others around the world
          </p>
          <p className="text-lg font-light text-white mt-10 md:mt-0 text-center">
            The Tripadvisor Foundation is matching donations to World Central
            Kitchen’s Climate Disaster Fund. Your support helps disaster
            responses not only in Maui, but worldwide.
            <br />
            <button className="btn mt-3">Donate now</button>
          </p>
        </div>
      </div>

      {/* Trending */}

      <div className="bg-[#faf1ed]  my-5">
        <div className="mx-auto max-w-7xl p-2">
          <div className="m-3">
            <div className="text-3xl font-medium">Trending Places</div>
            <div className="text-lg font-light">Highest ranking places</div>
          </div>

          <Trending />
        </div>
      </div>

      <div className="bg-white my-5">
        <div className="mx-auto max-w-7xl p-2">
          <div className="m-3">
            <div className="text-3xl font-medium">
              Top Things to Do by category
            </div>
            <div className="text-lg font-light">
              Customers Choice Best of the Best winners
            </div>
          </div>

          <Category />
        </div>
      </div>
    </main>
  );
}
