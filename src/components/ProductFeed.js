import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div>
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
