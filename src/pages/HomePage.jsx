import React from "react";
import PostList from "../components/PostList";
import TaskManager from "../components/TaskManager";

const HomePage = () => {
  return (
    <div className="space-y-10">
      <section className="text-center py-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
          Welcome to React Task Manager 🚀
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          Manage your tasks efficiently, explore public posts, and stay productive with light/dark mode themes.
        </p>
      </section>

      <TaskManager />

      <PostList />
    </div>
  );
};

export default HomePage;
