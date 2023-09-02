import { useParams } from "react-router-dom";
import { AuthProtected } from "./AuthProtected";

const SingleProduct = () => {
    const {id} = useParams();
  return (
    // <AuthProtected>
    <div>Product :{id}</div>
    // </AuthProtected>
  )
}

export default SingleProduct;