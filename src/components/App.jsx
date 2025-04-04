import Footer from "./Footer.jsx";
import BackgroundHeading from "./BackgroundHeading.jsx";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";
import Sidebar from "./Sidebar.jsx";
// import ItemsContextProvider from "./contexts/ItemsContextProvider.jsx";

export default function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}
