import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Service from "./Component/Service";
import About from "./Component/About";
import Gallery from "./Component/Gallery";
import Contact from "./Component/Contact";
import Layout from "./Layout";
import LayoutAdmin from "./LayoutAdmin";
import LayoutOwner from "./LayoutOwner";
import LayoutSubadmin from "./LayoutSubadmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="/admin/home" element={<Home />} />
          <Route path="/admin/service" element={<Service />} />
          <Route path="/admin/about" element={<About />} />
          <Route path="/admin/gallery" element={<Gallery />} />
          <Route path="/admin/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/owner" element={<LayoutOwner />}>
          <Route index element={<Home />} />
          <Route path="/owner/home" element={<Home />} />
          <Route path="/owner/service" element={<Service />} />
          <Route path="/owner/about" element={<About />} />
          <Route path="/owner/gallery" element={<Gallery />} />
          <Route path="/owner/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/subadmin" element={<LayoutSubadmin />}>
          <Route index element={<Home />} />
          <Route path="/subadmin/home" element={<Home />} />
          <Route path="/subadmin/service" element={<Service />} />
          <Route path="/subadmin/about" element={<About />} />
          <Route path="/subadmin/gallery" element={<Gallery />} />
          <Route path="/subadmin/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
