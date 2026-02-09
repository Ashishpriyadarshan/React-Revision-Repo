import products from "../data/products";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";

export default function Home() {
  const isActive = Math.random() > 0.5;
  const h1Styling = {
    textAlign: "center",
    color: isActive ? "Grey" : "Black",
  };

  return (
    <>
      <h1
        className={`my-heading ${isActive ? "primary-color" : "secondary-color"}`}
      >
        Demo of inline css Home
      </h1>
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
