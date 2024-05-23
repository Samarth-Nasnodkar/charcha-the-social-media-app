import './App.css';
import {Home} from "./components/Home";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {PostPage} from "./components/PostPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "post/:postId",
        element: <PostPage />,
    },
]);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
