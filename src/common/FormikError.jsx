// Dont touch this file
import { Error } from '@mui/icons-material';
const FormikError = ({ errors, name, touched }) => {
   const errorRowIndex = name?.split(".")[1];
   const errorRowName = name?.split(".")[2];
   const errorMasseage = errors?.itemLists?.[errorRowIndex]?.[`${errorRowName}`];
   const touchedMasseage =
      touched?.itemLists?.[errorRowIndex]?.[`${errorRowName}`];

   return (
      <p
         style={{
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "24px",
            letterSpacing: ".15px",
            width: "100%",
            marginTop: "5px",
            marginBottom: "0",
            textAlign: "left",
         }}
         className={errors[name] || errorMasseage ? "error" : "d-none"}
      >
         {errors && errors[name] && touched && touched[name]
            ? <><Error sx={{ fontSize: "16px", position: 'relative', top: '-2px' }} /> {errors[name].value || errors[name]}</>
            : ""}

         {errors && errorMasseage && touched && touchedMasseage
            ? <><Error sx={{ fontSize: "16px", position: 'relative', top: '-2px' }} /> {errorMasseage.value || errorMasseage}</>
            : ""}
      </p>
   );
};

export default FormikError;
