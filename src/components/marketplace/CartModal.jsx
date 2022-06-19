import classes from "./CartModal.module.css";
import { Fragment } from "react";
import ReactDom from "react-dom";
import Button from "../../UI/Button";
import { TextField } from "../auth/TextField";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { cartActions } from "../../store/cartSlice";
import { Provider } from "react-redux";
import store from "../../store/index";
const Backdrop = (props) => {
  return (
    <div
      onClick={() => {
        props.setOpen(false);
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

const CartModal = (props) => {
  const dispatch = useDispatch();
  const submitCheckout = async (values) => {
    console.log(values);
    dispatch(cartActions.emptyCart());
    props.setOpen(false);
  };
  const validate = Yup.object({
    phone: Yup.string()
      .required("Phone number is required !")
      .min(8, "Phone number must be at least 8 charaters !"),
    address: Yup.string().required("Adress is required !"),
  });
  return (
    <Provider store={store}>
      <Fragment>
        {ReactDom.createPortal(
          <Backdrop setOpen={props.setOpen} />,
          portalElement
        )}

        {ReactDom.createPortal(
          <ModalOverlay>
            <div className={classes.cartModal}>
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
              <h2>Checkout</h2>
              <Formik
                initialValues={{
                  phone: "",
                  address: "",
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                  submitCheckout(values);
                  setloading(true);
                }}
              >
                {(formik) => (
                  <div className={classes.checkoutForm}>
                    <Form>
                      <TextField
                        label="Phone number"
                        name="phone"
                        type="text"
                      />
                      <TextField label="Address" name="address" type="text" />
                      <div className={classes.order}>
                        <h3>Order Summary</h3>
                        {props.items.map((element, index) => {
                          return (
                            <div key={index} className={classes.element}>
                              <p className={classes.name}>{element.name}</p>
                              <p className={classes.quntity}>
                                x{element.quantity}
                              </p>
                              <p className={classes.price}>
                                {element.price} Dt
                              </p>
                            </div>
                          );
                        })}
                        <div className={classes.line}></div>
                        <div className={classes.element}>
                          <p className={classes.name}>total</p>
                          <p className={classes.quntity}></p>
                          <p className={classes.price}>{props.total} Dt</p>
                        </div>
                      </div>
                      <h5 className={classes.note}>
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                      </h5>
                      <div className={classes.submit}>
                        <div className={classes.button}>
                          {" "}
                          <Button
                            color="#4DAAAA"
                            content="Submit"
                            type="submit"
                            onClick={() => {}}
                          />
                        </div>
                      </div>
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
          </ModalOverlay>,
          portalElement
        )}
      </Fragment>
    </Provider>
  );
};

export default CartModal;
