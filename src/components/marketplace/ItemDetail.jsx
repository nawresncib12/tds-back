import classes from "./ItemDetail.module.css";
import { Fragment } from "react";
import ReactDom from "react-dom";
const Backdrop = (props) => {
  return (
    <div
      onClick={() => {
        props.setSee(false);
      }}
      className={classes.backdrop}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");

const ItemDetail = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop setSee={props.setSee} />, portalElement)}

      {ReactDom.createPortal(
        <ModalOverlay>
          <div className={classes.itemModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="25px"
              width="25px"
              height="25px"
              y="0px"
              viewBox="0 0 512 512"
              style={{ cursor: "pointer", float: "right" }}
              onClick={() => {
                props.setOpen(false);
              }}
            >
              <g>
                <g>
                  <path
                    fill="#FFBCBC"
                    d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M327.115,365.904
			L256,294.789l-71.115,71.115l-38.789-38.789L217.211,256l-71.115-71.115l38.789-38.789L256,217.211l71.115-71.115l38.789,38.789
			L294.789,256l71.115,71.115L327.115,365.904z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            <div className={classes.itemInfo}>
                <div className={classes.img}>
                    <img src={props.image} alt="" />

                </div>
              <div>
                <h3>{props.item.name}</h3>
                <p>{props.item.description}</p>
                <h4>
                  <p>1Kg x</p> {props.item.price} DT
                </h4>
              </div>
            </div>
          </div>
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default ItemDetail;
