import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Uploaded from "./pages/Uploaded";
import Upload from "./pages/Upload";
import Uploading from "./pages/Uploading";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/uploaded":
        title = "";
        metaDescription = "";
        break;
      case "/upload":
        title = "";
        metaDescription = "";
        break;
      case "/uploading":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/uploaded" element={<Uploaded />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/uploading" element={<Uploading />} />
    </Routes>
  );
}
export default App;
