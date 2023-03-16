import Brands from "@/components/product/Brands";
import Colors from "@/components/product/Colors";

const ProductLayout = ({ children }) => {
  return (
    <>
      <Brands />
      <Colors />
      <div>{children}</div>
    </>
  );
};

export default ProductLayout;
