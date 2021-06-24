import React from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import "./style.css";
export default function ProductModalCard({
  show,
  handleClose,
  srcImg = "",
  title = "",
  size = "",
  price=0,
  onClick
}) {
  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="example-modal-sizes-title-sm"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Container>
            <Row>
              <Col>
                <img className={"img-modal"} src={srcImg} />
              </Col>
              <Col>
                <h6 className={"my-3 my-md-0 mb-md-3"}>{title}</h6>
                <p>
                  This is for all the latest trends, no matter who you are,
                  where you’re from and what you’re up to. Exclusive to ASOS,
                  our universal brand is here for you, and comes in all our fit
                  ranges: ASOS Curve, Tall, Petite and Maternity. Created by us,
                  styled by you.
                </p>
                <span>
                  Available Sizes: <button>{size}</button>
                </span>
                <div
                  className={"d-flex justify-content-end align-items-center"}
                >
                  <p className={"m-0"}>${price}</p>
                  <button className={"ml-5"} onClick={onClick}>Add To Cart</button>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Header>
      </Modal>
    </>
  );
}
