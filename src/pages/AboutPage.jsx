
import React from "react";

const AboutPage = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About This Project</h1>
      <p className="mb-4">
        The React Task Manager is a modern, responsive web application built using React,
        Vite, and Tailwind CSS. It allows users to manage tasks, switch between light and dark themes,
        and view public API data with search and pagination.
      </p>
      <p className="mb-4">
        This project demonstrates reusable components, routing, state management with hooks, 
        custom hooks for localStorage, and third-party API integration.
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Created with 💙 by <a className="underline" href="https://github.com/Gatsheni528">Gatsheni528</a>
      </p>
    </div>
  );
};

export default AboutPage;
