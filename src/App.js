import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Rocket from "./Components/Rocket";
import Slide16991 from "./Components/Slide16991";
import Slide16990 from "./Components/Slide16990";
import Slide16989 from "./Components/Slide16989";
import Slide16988 from "./Components/Slide16988";
import Slide16987 from "./Components/Slide16987";
import Slide16986 from "./Components/Slide16986";
import Slide16985 from "./Components/Slide16985";
import Slide16984 from "./Components/Slide16984";
import Slide16983 from "./Components/Slide16983";
import Slide16982 from "./Components/Slide16982";
import Slide16981 from "./Components/Slide16981";
import Slide16992 from "./Components/Slide16992";
import Slide16980 from "./Components/Slide16980";
import Slide16979 from "./Components/Slide16979";
import Slide16978 from "./Components/Slide16978";
import Slide16977 from "./Components/Slide16977";
import Slide16976 from "./Components/Slide16976";
import Slide16975 from "./Components/Slide16975";
import Slide16974 from "./Components/Slide16974";
import Slide16973 from "./Components/Slide16973";
import { useEffect } from "react";

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
      case "/slide-169-91":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-90":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-89":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-88":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-87":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-86":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-85":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-84":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-83":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-82":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-81":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-92":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-80":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-79":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-78":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-77":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-76":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-75":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-74":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-73":
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
      <Route path="/" element={<Rocket />} />
      <Route path="/slide-169-91" element={<Slide16991 />} />
      <Route path="/slide-169-90" element={<Slide16990 />} />
      <Route path="/slide-169-89" element={<Slide16989 />} />
      <Route path="/slide-169-88" element={<Slide16988 />} />
      <Route path="/slide-169-87" element={<Slide16987 />} />
      <Route path="/slide-169-86" element={<Slide16986 />} />
      <Route path="/slide-169-85" element={<Slide16985 />} />
      <Route path="/slide-169-84" element={<Slide16984 />} />
      <Route path="/slide-169-83" element={<Slide16983 />} />
      <Route path="/slide-169-82" element={<Slide16982 />} />
      <Route path="/slide-169-81" element={<Slide16981 />} />
      <Route path="/slide-169-92" element={<Slide16992 />} />
      <Route path="/slide-169-80" element={<Slide16980 />} />
      <Route path="/slide-169-79" element={<Slide16979 />} />
      <Route path="/slide-169-78" element={<Slide16978 />} />
      <Route path="/slide-169-77" element={<Slide16977 />} />
      <Route path="/slide-169-76" element={<Slide16976 />} />
      <Route path="/slide-169-75" element={<Slide16975 />} />
      <Route path="/slide-169-74" element={<Slide16974 />} />
      <Route path="/slide-169-73" element={<Slide16973 />} />
    </Routes>
  );
}
export default App;
