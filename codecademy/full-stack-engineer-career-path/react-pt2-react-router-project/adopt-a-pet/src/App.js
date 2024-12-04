import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import PetDetailsPage from "./pages/detail";
import PetDetailsNotFound from "./pages/petDetailsNotFound";
import Root from "./components/root";

// Add react-router-dom imports
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// create router with JSX Route elements
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    /* Wrap this Root Route to create Router here */
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path=":type" element={<HomePage />} />
      <Route path=":type/:id" element={<PetDetailsPage />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="pet-details-not-found" element={<PetDetailsNotFound />} />
    </Route>
  )
);

function App() {
  return (
    // replace below with a Router Provider
    <RouterProvider router={appRouter} />
  );
}

export default App;