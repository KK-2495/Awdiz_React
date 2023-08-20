
const Mapping = ({ array }) => {
    console.log(array,"-array")

  return (
    <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: "space-between"  }}>
        {array && array.map((product) => (
            <div key={product.name} style={ {heigt:"300px", width:"20%", border: "3px solid black", marginBottom: "20px"} }>
            <h2>
             Type: {product.name}
           </h2>
           <img src= {product.image} style={{width: "100%"}} />
           <p>Price: {product.price}</p>
            </div>
        ))}
    </div>
  )
}

export default Mapping;