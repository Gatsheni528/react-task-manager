import Layout from "../components/Layout";
import TaskManager from "../components/TaskManager";
import PostList from "../components/PostList";

function HomePage() {
  return (
    <Layout>
      <TaskManager />
      <PostList />
    </Layout>
  );
}

export default HomePage;
