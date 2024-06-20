import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"

 const Home = () => {

  const addProductCardHandler=()=>{
    
  }
  return (


  <div className="home">


    <section>

    </section>



    <h1>Latest Product
    <Link to="/search" className="findmore">More</Link>
    </h1>

    <main>
      <ProductCard productId="123" name="Honda Click 150" price={23} stock={20} photo="https://m.media-amazon.com/images/I/71MTLBDqMaL._AC_UL320_.jpg"
      handler={addProductCardHandler}
      />
    </main>






  </div>
    
  
  )
}

export default Home