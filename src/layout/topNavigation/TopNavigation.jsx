import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ArrowDropDown, NotificationsNoneOutlined } from "@mui/icons-material";
import FilterSearch from "../../common/FilterSearch";
import profileImg from "../../assets/img/profileImg.png";

const initData = {
  searchString: "",
};

const validationSchema = Yup.object({});

export default function TopNavigation() {
  const saveHandler = (values) => {
    console.log(values);
  };
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initData}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          saveHandler(values, () => {
            resetForm(initData);
          });
        }}
      >
        {({
          handleSubmit,
          resetForm,
          values,
          errors,
          touched,
          setFieldValue,
          handleBlur,
          isValid,
        }) => (
          <>
            <Form onSubmit={handleSubmit}>
              <div className="top-navigation">
                <div className="top-navigation-left">
                  <div className="top-drop-menu">
                    <span className="txt">Starbucks</span>
                    <span className="icon">
                      <ArrowDropDown />
                    </span>
                  </div>
                </div>
                <div className="top-menu">
                  <div>
                    <FilterSearch
                      value={values?.searchString}
                      setValue={(value) => {
                        setFieldValue("searchString", value);
                      }}
                      cancelHandler={() => setFieldValue("searchString", "")}
                      handleClick={() => {}}
                    />
                  </div>
                  <div className="flex items-center justify-items-center">
                    <div className="top-user pointer">
                      <span>
                        <NotificationsNoneOutlined
                          sx={{
                            color: "action.active",
                            zIndex: 1,
                          }}
                        />
                      </span>
                    </div>
                    <div className="top-user pointer">
                      <div className="profile-menu-img">
                        <img src={profileImg} alt="iBOS" className="border-0" />
                      </div>
                    </div>
                    <div className="top-drop-menu">
                      <span className="txt">John Doe</span>
                      <span className="icon">
                        <ArrowDropDown />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
