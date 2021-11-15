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
import { grayColor } from "../../utility/color";
import { todayDate } from "../../utility/todayDate";
import { dateFormatter } from "../../utility/dateFormatter";
import { inventoryData } from "../../utility/inventoryData";

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
                            <th style={{ padding: "0 0 0 5px", width: "64px" }}>
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
                            <th style={{ width: "120px" }}>
                              <div className="flex items-center">
                                <span className="text-13 font-medium">
                                  Date Updated
                                </span>
                                <ArrowDownwardOutlined
                                  sx={{ marginLeft: "8px", fontSize: "13px" }}
                                />
                              </div>
                            </th>
                            <th style={{ width: "120px" }}>
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
                              <div className="text-13 font-medium text-left">
                                Details
                              </div>
                            </th>
                            <th style={{ width: "160px" }}>
                              <div className="text-13 font-medium text-left">
                                Status
                              </div>
                            </th>
                            <th style={{ width: "100px" }}>
                              <div className="text-13 font-medium text-left">
                                Quantity
                              </div>
                            </th>
                            <th style={{ width: "130px" }}>
                              <span className="text-13 font-medium">
                                Unit Price
                              </span>
                            </th>
                            <th
                              style={{ padding: "0 11px 0 0", width: "130px" }}
                            >
                              <div className="text-right">
                                <span className="text-13 font-medium flex items-center justify-end">
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
                          {inventoryData?.length > 0 && (
                            <>
                              {inventoryData?.map((item, index) => {
                                return (
                                  <>
                                    <tr className="h-h64">
                                      <td style={{ padding: "0 0 0 5px" }}>
                                        <div>
                                          <FormikCheckbox
                                            styleObj={{
                                              padding: "0!important",
                                              margin: "0 auto!important",
                                              color: grayColor,
                                            }}
                                            name="checkbox"
                                            checked={item?.isCheck}
                                            onChange={(e) => {
                                              setFieldValue(
                                                "checkbox",
                                                e.target.checked
                                              );
                                            }}
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        <div className="text-16">
                                          {item?.dateUpdate}
                                        </div>
                                      </td>
                                      <td>
                                        <div className="text-16">
                                          {item?.title}
                                        </div>
                                      </td>
                                      <td>
                                        <div className="text-16">
                                          {item?.details}
                                        </div>
                                      </td>
                                      <td>
                                        <div className="text-16">
                                          {item?.status === "Al Right" && (
                                            <>
                                              <span>Alright</span>
                                              <span
                                                className="circle-icon bg-success"
                                                style={{ marginLeft: "8px" }}
                                              ></span>
                                            </>
                                          )}
                                        </div>
                                      </td>
                                      <td>
                                        <div className="text-16">
                                          <span className="font-bold">{item?.quantity}</span>/{item?.quantityTotal}
                                        </div>
                                      </td>
                                      <td>
                                        <div className="text-center">{item?.price}</div>
                                      </td>
                                      <td style={{ padding: "0 11px 0 0" }}>
                                        <div className="text-right">
                                          {item?.amount}
                                        </div>
                                      </td>
                                    </tr>
                                  </>
                                );
                              })}
                            </>
                          )}
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
