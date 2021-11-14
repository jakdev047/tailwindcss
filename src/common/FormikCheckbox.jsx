import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function FormikCheckbox(props) {
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              name={props?.name}
              onChange={props?.onChange}
              checked={props?.checked ? props?.checked : false}
              disabled={props?.disabled ? props?.disabled : false}
              sx={{
                color: props?.styleObj?.color,
                padding: props?.styleObj?.padding,
                margin: props?.styleObj?.margin,
                "&.css-j204z7-MuiFormControlLabel-root": {
                  marginLeft: '0px!important'
                },
                "&.Mui-checked": {
                  color: `${props?.styleObj?.color}!important`,
                  "&.Mui-disabled": {
                    color: props?.styleObj?.color,
                    opacity: 0.38,
                  },
                },
              }}
            />
          }
          label={props?.label ? props?.label : ""}
        />
      </FormGroup>
    </>
  );
}

export default FormikCheckbox;

/*
   <FormikCheckBox
      styleObj={{
         margin: '0 auto!important',
         color: greenColor
      }}
      name="checkboxTwo"
      label="One"
      checked={values?.checkboxTwo}
      onChange={(e) => {
         setFieldValue("checkboxTwo", e.target.checked);
      }}
      disabled={true}
   />
*/
