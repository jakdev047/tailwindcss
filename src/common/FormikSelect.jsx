/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import Select from "react-select";
import { customStyles } from "../utility/selectCustomStyle";
import FormikError from "./FormikError";

const FormikSelect = (props) => {
  const target = useRef(null);
  const [isFocusForm, setIsFocusForm] = useState(false);
  const {
    name,
    options,
    value,
    label,
    placeholder,
    errors,
    touched,
    onChange,
    setClear,
    styleMode,
    isDisabled,
    menuPosition,
    classess,
  } = props;

  return (
    <div className='form-container'>
      <div
        className={classess ? `formik-select-wrapper ${classess}` : `formik-select-wrapper`}
        ref={target}
        onFocus={() => setIsFocusForm(true)}
        onBlur={() => setIsFocusForm(false)}
      >
        {label && <label> {label} </label>}
        <Select
          isDisabled={isDisabled ? true : false}
          isClearable={true}
          onChange={onChange}
          options={options || []}
          value={value || ""}
          isSearchable={true}
          name={name}
          styles={customStyles}
          placeholder={placeholder}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
          })}
          onFocus={() => setIsFocusForm(true)}
          onBlur={() => setIsFocusForm(false)}
          menuPosition={menuPosition}
          {...props}
        />
      </div>
      <FormikError errors={errors} name={name} touched={touched} />
    </div>
  );
};

export default FormikSelect;

