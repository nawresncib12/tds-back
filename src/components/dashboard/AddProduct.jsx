import classes from "./AddCrop.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "../../UI/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
const AddProduct = () => {
  const validate = Yup.object({
    name: Yup.string(),
    price: Yup.number().required("Price is required !"),
    description: Yup.string(),
  });
  const submitForm = async (values) => {
    console.log("hi");
  };
  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        price: 0,
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        submitForm(values);
      }}
    >
      {(formik) => (
        <div className={classes.addProduct}>
          <div className={classes.header}>
            <h3 className={classes.title}>Add your product</h3>
          </div>
          <div className={classes.form}>
            <Form>
              <TextField label="Name" name="name" type="text" />
              <TextField label="Description" name="description" type="text" />
              <TextField label="Price" name="price" type="number" />

              <div className={classes.submit}>
                <Button color="#4daaaa" content="Submit" type="submit" onClick={()=>{}} />
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default AddProduct;
