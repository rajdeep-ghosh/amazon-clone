import Image from "next/image";
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/solid";

function Product({ id, title, desc, category, price, rating, img }) {
  return (
    <div>
      <Image src={img} width={200} height={200} alt="product_image" />
      <p>{category}</p>
      <h3>{title}</h3>
      <div>
        <Currency quantity={price} currency="USD" />
        <div>
          <StarIcon className="h-4" />
          <p>
            {rating.rate} <span>({rating.count})</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
