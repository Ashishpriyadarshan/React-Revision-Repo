import products from "../data/products";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";

export default function Home() {
  const h1Styling = {
    textAlign: "center",
    color: "#5B21B6",
  };

  return (
    <>
      <h1 style={h1Styling}>Demo of inline CSS</h1>
      <div className="home-container">
        <PageHeading title="Explore StickERY">
          <p className="page-heading-paragraph">
            Add a touch of creativity to your space with our wide range of fun
            and unique stickers. Perfect for any occasion!
          </p>
        </PageHeading>
        <ProductListings products={products} />
      </div>
    </>
  );
}
