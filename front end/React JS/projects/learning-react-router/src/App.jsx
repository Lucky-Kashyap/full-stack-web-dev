import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Post from "./components/Post";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import PostListProvider from "./store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Header />

          {/* <Post /> */}

          {/* <Outlet /> */}

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
