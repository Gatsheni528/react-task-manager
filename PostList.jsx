import { useEffect, useState } from "react";
import Card from "./Card";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data);
        setFiltered(data.slice(0, limit));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const loadMore = () => {
    const next = page + 1;
    const start = 0;
    const end = next * limit;
    setFiltered(posts.slice(start, end));
    setPage(next);
  };

  const handleSearch = (e) => {
    const q = e.target.value.toLowerCase();
    setQuery(q);
    const results = posts.filter(post =>
      post.title.toLowerCase().includes(q) || post.body.toLowerCase().includes(q)
    );
    setFiltered(results.slice(0, page * limit));
  };

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <Card title="Posts">
      <input
        type="text"
        placeholder="Search posts..."
        className="border p-2 rounded mb-4 w-full focus:ring focus:outline-none"
        value={query}
        onChange={handleSearch}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(post => (
          <div
            key={post.id}
            className="bg-gray-100 dark:bg-gray-700 p-4 rounded shadow hover:shadow-lg transition duration-300"
          >
            <h3 className="text-lg font-bold">{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      {!query && filtered.length < posts.length && (
        <button
          onClick={loadMore}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          Load More
        </button>
      )}
    </Card>
  );
}

export default PostList;
