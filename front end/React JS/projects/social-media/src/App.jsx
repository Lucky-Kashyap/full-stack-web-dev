import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Post from "./components/Post";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Header />
        {/* <Post /> */}
        <PostList />
        <CreatePost />
        <Footer />
      </div>
    </div>
  );
}

export default App;
