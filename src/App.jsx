import { RouterProvider, createBrowserRouter } from "react-router-dom";

// pages
import { Home, About, Error, SingleCocktail, SharedLayout } from "./pages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SharedLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },

        {
          path: "cocktail/:id",
          element: <SingleCocktail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
