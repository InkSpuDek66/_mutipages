// import componpents
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// import styles
import "./Products.css";
function Products({ products, carts, setCarts }) {
  return (
    <div className="products-container">
      <div className="products-header-container">
        <h1>Products</h1>
      </div>
      <div className="products-body-container">
        <div className="products-items-container">
          {products.map((product) => {
            return (
              <Card style={{ width: "16rem" }} key={product.id}>
                <Card.Img variant="top" src={product.thumbnailUrl} />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <b>{product.title}</b>
                  </Card.Title>
                  <Card.Text>${product.price}</Card.Text>

                  {carts.find((cart) => cart.id === product.id) ? (
                    <span className="badge bg-success">Added</span>
                  ) : (
                    <Button
                      className="btn btn-success"
                      onClick={() => {
                        setCarts([...carts, product]);
                      }}
                    >
                      Add To Carts
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
