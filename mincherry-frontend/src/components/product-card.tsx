
import { FaPlus } from 'react-icons/fa'

type ProductProps={
  productId:string;
  photo:string;
  name:string;
  price:number;
  stock:number;
  handler:()=>void;

}

const ProductCard = ({productId,photo,name,price,stock,handler}:ProductProps) => {
 
  const server="server"
return (
    <div className="product-card">
      <img src={photo} alt='photo'/>
      <p>${name}</p>
      <span>${price}</span>

      <div>
        <button>
          <FaPlus />
        </button>
      </div>
    </div>
  );



}
  


export default ProductCard 