"use client"

import { useState } from "react";
import {useRouter} from "next/navigation";

const SearchForm = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const search = () => {
    if (query === "") {
      alert("검색어를 입력하세요")
      return
    }
    router.push(`/search?q=${query}`);
  }

  return(
    <form className="flex gap-2 my-2" onSubmit={(e) => e.preventDefault()}>
      <input
        className="border border-gray-600 rounded-xl p-2 flex-1"
        placeholder="검색어를 입력하세요"
        required
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && search()}
      />
      <button
        type="button"
        className="px-4 py-2 inline-block bg-blue-300 rounded-xl hover:bg-blue-400 whitespace-nowrap cursor-pointer"
        onClick={search}
      >검색</button>
    </form>
  );
}

export default SearchForm;