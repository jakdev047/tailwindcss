import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  ArrowUpwardOutlined,
  ArrowDownwardOutlined,
} from "@mui/icons-material";
import FilterSearch from "../../common/FilterSearch";
import FormikCheckbox from "../../common/FormikCheckbox";
import { grayColor } from "../../utility/color";
import { dateFormatter } from "../../utility/dateFormatter";
import { inventoryData } from "../../utility/inventoryData";
import LandingTable from "../../common/LandingTable";

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
                      <LandingTable>
                        <thead className="bg-warning h-h40">
                          <tr>
                            <th className="w-w64" style={{paddingLeft: '5px'}}>
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
                            <th className="w-w120">
                              <div className="flex items-center">
                                <span className="text-13 font-medium">
                                  Date Updated
                                </span>
                                <ArrowDownwardOutlined
                                  sx={{ marginLeft: "8px", fontSize: "13px" }}
                                />
                              </div>
                            </th>
                            <th className="w-w120">
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
                            <th className="w-w160">
                              <div className="text-13 font-medium text-left">
                                Status
                              </div>
                            </th>
                            <th className="w-w100">
                              <div className="text-13 font-medium text-left">
                                Quantity
                              </div>
                            </th>
                            <th className="w-w130">
                              <span className="text-13 font-medium">
                                Unit Price
                              </span>
                            </th>
                            <th
                              style={{ padding: "0 10px 0 0" }}
                              className="w-w130"
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
                                    <tr className="h-h64" key={index}>
                                      <td style={{paddingLeft: '5px'}}>
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
                                          {dateFormatter(item?.dateUpdate)}
                                        </div>
                                      </td>
                                      <td>
                                        <div className="text-16">
                                          {item?.title}
                                        </div>
                                      </td>
                                      <td>
                                        <div className="text-16">
                                          {item?.details ? item?.details : '-'}
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
                                          {item?.status === "Out Of Stock" && (
                                            <>
                                              <span>Out Of Stock</span>
                                              <span
                                                className="circle-icon bg-error"
                                                style={{ marginLeft: "8px" }}
                                              ></span>
                                            </>
                                          )}
                                          {item?.status === "In Progress" && (
                                            <>
                                              <span>In Progress</span>
                                              <span
                                                className="circle-icon bg-wraningBg"
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
                                        <div className="text-center">${item?.price}</div>
                                      </td>
                                      <td style={{ padding: "0 10px 0 0" }}>
                                        <div className="text-right">
                                          ${item?.amount}
                                        </div>
                                      </td>
                                    </tr>
                                  </>
                                );
                              })}
                            </>
                          )}
                        </tbody>
                      </LandingTable>
                    </div>
                    <div className="table-card-pagination">
                      
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
