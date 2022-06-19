import classes from "./AddCrop.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
const AddCrop = () => {
  const navigate = useNavigate();
  const validate = Yup.object({
    email: Yup.string()
      .email("Email is invalid !")
      .required("Email is required !"),
    password: Yup.string()
      .required("Password is required !")
      .min(8, "Password must be at least 8 charaters !"),
  });
  const submitForm = async (values) => {
    console.log("hi");
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        submitForm(values);
      }}
    >
      {(formik) => (
        <div className={classes.signInForm}>
          <div className={classes.header}>
            <h3 className={classes.title}>HI</h3>
          </div>
          <div className={classes.form}>
            <Form>
              <TextField
                label="Email"
                name="email"
                type="email"
                form="signin"
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                form="signin"
                failed={failed}
              />
              <h5
                className={classes.note}
                style={{ textAlign: "right", marginTop: "10px" }}
              >
                Forgot your password ?
              </h5>
              <div className={classes.submit}>
                <Button color="#4daaaa" content="Submit" type="submit" />
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default AddCrop;
