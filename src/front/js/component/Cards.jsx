import React, { useEffect, useState } from "react";
import { HttpHandler } from "../../../http/handler.js";
import { Card, Modal, ListGroup, Button } from "react-bootstrap";

function Cards() {
  const [data, setData] = useState({});

  const handler = new HttpHandler();

  useEffect(() => {
    async function fetchData() {
      const result = await handler.getProduct();
      setData(result);
    }
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      {!data || !data.product ? (
        <div>
          <h1>Cargando</h1>
        </div>
      ) : (
        <div className="container">
          {data.product &&
            data.product.map((item, index) => (
              <Card>
                <Card.Img
                  variant="top"
                  src={data.images}
                  style={{
                    height: "200px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text
                    style={{
                      height: "150px",
                      maxHeight: "150px",
                      overflow: "hidden",
                    }}
                  >
                    {data.description}
                  </Card.Text>
                  <ListGroup className="list-group-flush">
                    <hr />
                    <ListGroup.Item>Precio: {data.price} €</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                  {/* <small className="text-muted">
                    {daysRemaining > 0
                      ? `${daysRemaining} días y ${hoursRemaining} horas restantes`
                      : "Venta Finalizada"}
                  </small> */}
                  {/* <Button
                    variant="warning"
                    onClick={() => handleEditClick(producto)}
                  >
                    Editar +
                  </Button> */}
                </Card.Footer>
              </Card>
            ))}
        </div>
      )}
    </>
  );
}

export default Cards;

{
  /* <div className="m-5">
        <div className="container-xl">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {data.product &&
              data.product.map((item, index) => (
                <div className="card xl m-4 p-1" key={index}>
                  <img src={item.images} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href="" className="btn btn-primary">
                      Ver mas
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
// } */
}
