import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 md:-mt-40 lg:-mt-56 mx-auto">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            desc={product.description}
            category={product.category}
            price={product.price}
            rating={product.rating}
            img={product.image}
          />
        );
      })}
    </div>
  );
}

export default ProductFeed;
