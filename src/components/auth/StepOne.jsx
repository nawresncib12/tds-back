import React from "react";
import { TextField } from "./TextField";
import classes from "./StepOne.module.css";
import ButtonLoader from "../../UI/ButtonLoader";
import { Select } from "../../UI/Select";
export const StepOne = (props) => {
  const loading = props.loading;
  return (
    <div className={classes.stepOne}>
      <div>
        <TextField label="Email" name="email" type="email" form="signup" />
        <TextField
          label="Password"
          name="password"
          type="password"
          form="signup"
        />
        <p className={classes.noteP1}>
          Must be longer than 8 characters and contain{" "}
        </p>
        <p className={classes.noteP2}>one capital letter.</p>
        <TextField
          label="Confirm Password"
          name="confirmpassword"
          type="password"
          form="signup"
          failed={props.failed}
        />
        <Select name="role" options={["Farmer","Buyer"]}></Select>
        <div className={classes.submit}>
          <div className={classes.nextBtn}>
            {!loading && (
              <button type="submit">
                <svg
                  className={classes.nextImg}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 492.004 492.004"
                  fill="#4daaaa"
                >
                  <g>
                    <g>
                      <path
                        d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136
			c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002
			v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864
			c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872
			l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"
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
              </button>
            )}

            {loading && <ButtonLoader />}
          </div>
        </div>
      </div>
    </div>
  );
};
