"use client";

import { useRouter } from "next/router";

export default function SearchBar() {
  function handleChange(term: string) {
    console.log(term);
  }

  return (
    <div className="flex flex-col w-full">
      <label htmlFor="">Search</label>
      <input
        type="text"
        placeholder="Search"
        className="p-2 rounded-lg bg-slate-200"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
