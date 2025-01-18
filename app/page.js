'use client';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      document.getElementById("current-time").textContent = `${timeString}`;
    }

    const timeInterval = setInterval(updateTime, 1000);
    updateTime();

    return () => clearInterval(timeInterval);
  }, []);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      const query = event.target.value.trim(); // Ambil nilai input
      if (query) {
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(googleSearchUrl, "_blank"); // Buka hasil pencarian di tab baru
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-nord-0 text-nord-4 font-mono px-4 py-8">
      <header className="mb-2 text-center">
        <div className="text-3xl text-nord-8 font-serif">{"こんにちは、私のダーリン"}</div>
      </header>

      <main className="flex flex-col items-center gap-8">
        <div className="relative">
          <img
            src="https://voxie12.github.io/moon/wallpaper/wallhaven-28gz5g.jpg"
            alt="Wallpaper"
            className="rounded-lg border-1 border-nord-4 object-cover w-[710px] h-[230px] sm:w-[500px] sm:h-[180px] max-w-full mb-2"
          />
          <div
            id="current-time"
            className="absolute top-2 right-2 text-xl text-nord-0 bg-nord-4/50 p-2 rounded"
          >
            Loading time...
          </div>
        </div>

        <div className="mb-6 w-full">
          <input
            type="text"
            id="search-input"
            placeholder="Search Google..."
            className="p-3 w-[700px] sm:w-full bg-nord-3 text-nord-4 border-1 border-nord-4 rounded focus:outline-none focus:border-nord-2"
            onKeyDown={handleKeyDown} // Tambahkan handler di sini
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl">
          <a
            href="https://www.google.com"
            target="_blank"
            className="shortcut-item group relative overflow-hidden p-3 bg-nord-1 text-nord-4 border-0 border-nord-4 rounded transition-all duration-300 transform hover:bg-nord-2 hover:scale-105"
          >
            Google
            <div className="absolute top-0 left-0 w-full h-full bg-nord-1 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            className="shortcut-item group relative overflow-hidden p-3 bg-nord-1 text-nord-4 border-0 border-nord-4 rounded transition-all duration-300 transform hover:bg-nord-2 hover:scale-105"
          >
            GitHub
            <div className="absolute top-0 left-0 w-full h-full bg-nord-1 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
          {/* Other shortcut links */}
          <a
            href="https://www.reddit.com"
            target="_blank"
            className="shortcut-item group relative overflow-hidden p-3 bg-nord-1 text-nord-4 border-0 border-nord-4 rounded transition-all duration-300 transform hover:bg-nord-2 hover:scale-105"
          >
            Reddit
            <div className="absolute top-0 left-0 w-full h-full bg-nord-4 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
          <a
            href="https://neovim.io"
            target="_blank"
            className="shortcut-item group relative overflow-hidden p-3 bg-nord-1 text-nord-4 border-0 border-nord-4 rounded transition-all duration-300 transform hover:bg-nord-2 hover:scale-105"
          >
            Neovim
            <div className="absolute top-0 left-0 w-full h-full bg-nord-1 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
          <a
            href="https://mail.google.com/"
            target="_blank"
            className="shortcut-item group relative overflow-hidden p-3 bg-nord-1 text-nord-4 border-0 border-nord-4 rounded transition-all duration-300 transform hover:bg-nord-2 hover:scale-105"
          >
            Gmail
            <div className="absolute top-0 left-0 w-full h-full bg-nord-1 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
          <a
            href="https://www.npmjs.com"
            target="_blank"
            className="shortcut-item group relative overflow-hidden p-3 bg-nord-1 text-nord-4 border-0 border-nord-4 rounded transition-all duration-300 transform hover:bg-nord-2 hover:scale-105"
          >
            npm
            <div className="absolute top-0 left-0 w-full h-full bg-nord-1 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
          <a
            href="https://www.mozilla.org"
            target="_blank"
            className="shortcut-item group relative overflow-hidden p-3 bg-nord-1 text-nord-4 border-0 border-nord-4 rounded transition-all duration-300 transform hover:bg-nord-2 hover:scale-105"
          >
            Mozilla
            <div className="absolute top-0 left-0 w-full h-full bg-nord-1 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
          <a
            href="https://www.npmjs.com/package/laravel"
            target="_blank"
            className="shortcut-item group relative overflow-hidden p-3 bg-nord-1 text-nord-4 border-0 border-nord-4 rounded transition-all duration-300 transform hover:bg-nord-2 hover:scale-105"
          >
            Laravel
            <div className="absolute top-0 left-0 w-full h-full bg-nord-1 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
        </div>
      </main>

      <footer className="mt-8 text-center text-sm text-nord-5">
        <p>| <i>Never Swim alone in the Big Arctic Ocean</i> |</p>
      </footer>
    </div>
  );
}

