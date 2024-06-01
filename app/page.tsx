import Appbar from "@/components/Appbar";
import SearchComponent from "@/components/SearchComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* WhatFlix app */}
      <Appbar />
      <SearchComponent />
    </div>
  );
}
