import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mergePdf, setPdfList } from "./redux/MergeSlice";
import Loader from "../loader/Loader";
import { useFormik } from "formik";
import validationSchema from "./formvalidation/validationSchema";
import FormField from "../FormField";

const ApiCall = ({ mergePdfs }) => {
  const dispatch = useDispatch();
  const { pdf, status, error } = useSelector((state) => state.mergePdf);
  const formik = useFormik({
    initialValues: {
      AnnAge: 30,
      AnnFullName: "Marshall Tilley",
      AnnSex: "Male",
      Duration: 7,
      FloorLimit: -0.15,
      InitAmt: 50000,
      PercFixed: 0,
      PercIndex1: 0.5,
      PercIndex2: 0.5,
      PercIndex3: 0,
      PercIndex4: 0,
      ProdAddr1: "19520 West Catawba Avenue",
      ProdAddr2: "Suite 200",
      ProdAddr3: "Cornelius, NC 28031",
      ProdCompany: "Life Innovators, LLC",
      ProdFullName: "Bobby Samuelson",
      ProdPhone: "704-704-7047",
      State: "North Carolina",
      SysWD: 0,
      SysWDMode: "Annual",
      SysWDYearEnd: 3,
      SysWDYearStart: 2,
    },
    validationSchema,
    onSubmit: async (values) => {
      await dispatch(mergePdf(values));
    },
  });
  useEffect(() => {
    if (pdf && pdf.pagecounts) {
      const pdfData = Object.keys(pdf).map((key) => {
        if (key.startsWith('ILLUSTRATION_')) {
          const pageCount = getPageCount(key);
          if (pageCount > 0) {
            return {
              PDFUrl: pdf[key].PDFUrl,
              PDFName: pdf[key].PDFName,
              PageCount: pageCount,
            };
          }
        }
        return null;
      }).filter(item => item !== null);

      dispatch(setPdfList(pdfData));
      mergePdfs();
    }
  }, [pdf, dispatch]);

  const getPageCount = (key) => {
    const page = key.replace('ILLUSTRATION_', 'Pages ');
    const pageInfo = pdf.pagecounts.find(p => p.Page === page);
    return pageInfo ? pageInfo.PageCount : 0;
  };

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'error') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="form-row">
      <form onSubmit={formik.handleSubmit}>
        {/* Jurisdiction Section */}
        <div className="fade alert alert-primary show" style={{ width: "98%" }}>
          Jurisdiction
        </div>
        <FormField
          id="state"
          label="State"
          name="State"
          type="select"
          req={true}
          options={[
            { value: "North Carolina", label: "North Carolina" },
            { value: "AL", label: "Alabama" },
            { value: "AK", label: "Alaska" },
            { value: "AZ", label: "Arizona" },
            { value: "AR", label: "Arkansas" },
            { value: "CA", label: "California" },
          ]}
          formik={formik}
        />

        {/* Annuitant Information */}
        <div className="fade alert alert-primary show" style={{ width: "98%" }}>
          Annuitant Information
        </div>
        <FormField id="fullname" label="Full Name" name="AnnFullName"  type="text" formik={formik} req={true} />
        <FormField id="age" label="Age" name="AnnAge" type="number" formik={formik} req={true} />
        <FormField id="gender" label="Gender" name="AnnSex" type="select" formik={formik} req={true} options={[
          { value: "Male", label: "Male" },
          { value: "Female", label: "Female" },
          { value: "Other", label: "Other" },
        ]} />

        {/* Contract Specifications */}
        <div className="fade alert alert-primary show" style={{ width: "98%" }}>
          Contract Specifications
        </div>
        <FormField id="duration" label="Duration" name="Duration" type="select" req={true} options={[
          { value: "5", label: "5" },
          { value: "7", label: "7" },
          { value: "10", label: "10" },
        ]} formik={formik} />
        <FormField id="floorlimit" label="Floor Limit" type="number" step="0.01" name="FloorLimit" formik={formik} req={true} />
        <FormField id="initamt" label="Initial Amount" name="InitAmt" type="number" formik={formik} req={true} />
        <FormField id="percfixed" label="Percentage Fixed" name="PercFixed" type="number" step="0.01" formik={formik} req={true} />
        <FormField id="percindex1" label="Percentage Index 1" name="PercIndex1" type="number" step="0.01" formik={formik} req={true} />
        <FormField id="percindex2" label="Percentage Index 2" name="PercIndex2" type="number" step="0.01" formik={formik} req={true} />
        <FormField id="percindex3" label="Percentage Index 3" name="PercIndex3" type="number" step="0.01" formik={formik} req={true} />
        <FormField id="percindex4" label="Percentage Index 4" type="number" step="0.01" name="PercIndex4" formik={formik} req={true} />

        {/* Withdrawals */}
        <div className="fade alert alert-primary show" style={{ width: "98%" }}>
          Withdrawals
        </div>
        <FormField id="syswd" label="SysWD" type="number" name="SysWD" formik={formik} req={true} />
        <FormField id="syswdmode" label="SysWDMode" type="select" name="SysWDMode" formik={formik} req={true} options={[
          { value: "Annual", label: "Annual" },
          { value: "Semiannual", label: "Semiannual" },
          { value: "Monthly", label: "Monthly" },
          { value: "Quarterly", label: "Quarterly" },
        ]} />
        <FormField id="syswdyearend" label="SysWDYearEnd" type="number" name="SysWDYearEnd" formik={formik} req={true} />
        <FormField id="syswdyearstart" label="SysWDYearStart" type="number" name="SysWDYearStart" formik={formik} req={true} />

        {/* Producer Information */}
        <div className="fade alert alert-primary show" style={{ width: "98%" }}>
          Producer Information
        </div>
        <FormField label="Full Name" name="ProdFullName" id="ProdFullName" type="text" formik={formik} req={false}/>
        <FormField label="Company" name="ProdCompany" id="ProdCompany" type="text" formik={formik} req={false}/>
        <FormField label="Phone" name="ProdPhone" id="ProdPhone" type="text" formik={formik} req={false}/>
        <FormField label="Address 1" name="ProdAddr1" id="ProdAddr1" type="text" formik={formik} req={false}/>
        <FormField label="Address 2" name="ProdAddr2" id="ProdAddr2" type="text" formik={formik} req={false}/>
        <FormField label="Address 3" name="ProdAddr3" id="ProdAddr3" type="text" formik={formik} req={false}/>

        <button type="submit" className="btn btn-primary btn2">Submit</button>
      </form>
    </div>
  );
};

export default ApiCall;
