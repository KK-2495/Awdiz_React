import { useParams } from "react-router-dom"

const SingleProduct = () => {
    const {id} = useParams();
  return (
    <div>Product :{id}</div>
  )
}

export default SingleProduct