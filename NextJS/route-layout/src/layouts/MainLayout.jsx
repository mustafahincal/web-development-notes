import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
