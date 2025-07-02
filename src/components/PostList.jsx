import React from "react";

const PostList = () => {
  const posts = [
    { id: 1, title: "Welcome to the React Task Manager!" },
    { id: 2, title: "This is a demo post." },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Recent Posts</h2>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="bg-white p-4 rounded shadow">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
