import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  ArrowUpwardOutlined,
  ArrowDownwardOutlined,
} from "@mui/icons-material";
import FilterSearch from "../../common/FilterSearch";
import ScrollableTable from "../../common/ScrollableTable";
import FormikCheckbox from "../../common/FormikCheckbox";
import { secondaryColor, grayColor } from "../../utility/color";
import { todayDate } from "../../utility/todayDate";
import { dateFormatter } from "../../utility/dateFormatter";

const initData = {
  searchInventory: "",
};
const validationSchema = Yup.object({});

export default function Inventory() {
  const saveHandler = (values) => {
    console.log("Values");
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
          isValid,
        }) => (
          <>
            <Form onSubmit={handleSubmit}>
              <div className="inventory-wrapper">
                <div className="table-card">
                  <div className="table-card-heading">
                    <h2 className="title">Inventory</h2>
                  </div>
                  <div className="table-card-body">
                    <div className="table-card-search">
                      <FilterSearch
                        value={values?.searchInventory}
                        setValue={(value) => {
                          setFieldValue("searchInventory", value);
                        }}
                        cancelHandler={() =>
                          setFieldValue("searchInventory", "")
                        }
                        handleClick={() => {}}
                      />
                    </div>
                    <div className="table-card-content">
                      <ScrollableTable>
                        <thead className="bg-warning h-h40">
                          <tr>
                            <th>
                              <FormikCheckbox
                                styleObj={{
                                  padding: "0!important",
                                  margin: "0 auto!important",
                                  color: grayColor,
                                }}
                                name="checkbox"
                                checked={values?.checkbox}
                                onChange={(e) => {
                                  setFieldValue("checkbox", e.target.checked);
                                }}
                              />
                            </th>
                            <th>
                              <div className="flex items-center">
                                <span className="text-13 font-medium">
                                  Date Updated
                                </span>
                                <ArrowDownwardOutlined
                                  sx={{ marginLeft: "8px", fontSize: "13px" }}
                                />
                              </div>
                            </th>
                            <th>
                              <div className="flex items-center">
                                <span className="text-13 font-medium">
                                  Title
                                </span>
                                <span className="flex flex-col">
                                  <ArrowUpwardOutlined
                                    sx={{
                                      position: "relative",
                                      top: "4px",
                                      fontSize: "13px",
                                    }}
                                  />
                                  <ArrowDownwardOutlined
                                    sx={{
                                      position: "relative",
                                      top: "-4px",
                                      fontSize: "13px",
                                    }}
                                  />
                                </span>
                              </div>
                            </th>
                            <th>
                              <span className="text-13 font-medium">
                                Details
                              </span>
                            </th>
                            <th>
                              <span className="text-13 font-medium">
                                Status
                              </span>
                            </th>
                            <th>
                              <span className="text-13 font-medium">
                                Quantity
                              </span>
                            </th>
                            <th>
                              <span className="text-13 font-medium">
                                Unit Price
                              </span>
                            </th>
                            <th>
                              <div className="text-right">
                                <span className="text-13 font-medium flex items-center justify-end" >
                                  Amount
                                  <span className="flex flex-col">
                                    <ArrowUpwardOutlined
                                      sx={{
                                        position: "relative",
                                        top: "4px",
                                        fontSize: "13px",
                                      }}
                                    />
                                    <ArrowDownwardOutlined
                                      sx={{
                                        position: "relative",
                                        top: "-4px",
                                        fontSize: "13px",
                                      }}
                                    />
                                  </span>
                                </span>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div>
                                <FormikCheckbox
                                  styleObj={{
                                    padding: "0!important",
                                    margin: "0 auto!important",
                                    color: secondaryColor,
                                  }}
                                  name="checkbox"
                                  checked={values?.checkbox}
                                  onChange={(e) => {
                                    setFieldValue("checkbox", e.target.checked);
                                  }}
                                />
                              </div>
                            </td>
                            <td>
                              <div className="text-center">
                                {dateFormatter(todayDate())}
                              </div>
                            </td>
                            <td>
                              <div className="text-center">Hammer</div>
                            </td>
                            <td>
                              <div className="text-center">
                                This is a hammer to do work with
                              </div>
                            </td>
                            <td>
                              <div className="text-center">
                                <span>Alright</span>
                                <span
                                  className="circle-icon bg-success"
                                  style={{ marginLeft: "8px" }}
                                ></span>
                              </div>
                            </td>
                            <td>
                              <div className="text-center">200/300</div>
                            </td>
                            <td>
                              <div className="text-center">$10</div>
                            </td>
                            <td>
                              <div className="text-center">$2000.00</div>
                            </td>
                          </tr>
                        </tbody>
                      </ScrollableTable>
                    </div>
                    <div className="table-card-pagination"></div>
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
