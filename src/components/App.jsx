import Footer from "./Footer.jsx";
import BackgroundHeading from "./BackgroundHeading.jsx";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";
import Sidebar from "./Sidebar.jsx";
// import AddItemForm from "./AddItemForm.jsx";
// import ButtonGroup from "./ButtonGroup.jsx";
// import Logo from "./Logo.jsx";
// import Counter from "./Counter.jsx";
import ItemsContextProvider from "./contexts/ItemsContextProvider.jsx";

export default function App() {

  return (
    <>
      <BackgroundHeading />
      <main>
        <ItemsContextProvider>
          <Header />
          <ItemList />
          <Sidebar />
        </ItemsContextProvider>
      </main>
      <Footer />
    </>
  );
}
