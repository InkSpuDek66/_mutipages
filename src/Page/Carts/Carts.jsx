import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Carts.css";

function Carts({ carts, setCarts }) {
  return (
    <div className="carts-container">
      <div className="carts-header-container">
        <h1>Carts</h1>
      </div>
      <div className="carts-body-container">
        <div className="carts-items-container">
          {carts.map((cart) => {
            return (
              <Card style={{ width: "16rem" }} key={cart.id}>
                <Card.Img variant="top" src={cart.thumbnailUrl} />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <b>{cart.title}</b>
                  </Card.Title>
                  <Card.Text>${cart.price.toFixed(2)}</Card.Text>
                  <Button
                    className="btn btn-danger"
                    onClick={() =>
                      setCarts(carts.filter((c) => c.id !== cart.id))
                    }
                  >
                    Remove&nbsp;From&nbsp;Cart
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="carts-total-container">
        <h4>
          items:&nbsp;{carts.length}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price:&nbsp;$
          {carts
            .reduce((prev, cart) => {
              return prev + cart.price;
            }, 0)
            .toFixed(2)}
        </h4>
      </div>
      <button style={{ marginBottom: "1rem" }} className="btn btn-success">
        Chech&nbsp;Out
      </button>
    </div>
  );
}

export default Carts;
