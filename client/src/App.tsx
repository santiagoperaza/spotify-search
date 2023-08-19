import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Search from "./components/Search";
import TrackList from "./components/TrackList";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
export const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="app">
          <header>
            <Link to="/">Spotify Search</Link>
          </header>
          <Routes>
            <Route path="/albums/:id/tracks" element={<TrackList />} />
            <Route path="/" element={<Search />} />
          </Routes>
          <footer>
            <p><small>&copy; 2023 Santiago Peraza</small></p>
          </footer>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(<App />);
