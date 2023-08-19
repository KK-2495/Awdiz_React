import { useNavigate } from "react-router-dom"

const MultiProduct = () => {
    const router = useNavigate();

    const singleProduct = () =>{
        router('/single-product/123')
    }

  return (
    <div>
        <h1>MultiProduct</h1>
        <button onClick={singleProduct}>click to view product</button>
    </div>
  )
}

export default MultiProduct;