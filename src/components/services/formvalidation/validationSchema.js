import * as Yup from 'yup';

const validationSchema = Yup.object({
  AnnAge: Yup.number().required("Annuitant Age is required"),
  AnnFullName: Yup.string().required("Annuitant Full Name is required"),
  AnnSex: Yup.string().required("Annuitant Gender is required"),
  Duration: Yup.number().required("Duration is required"),
  FloorLimit: Yup.number().required("Floor Limit is required"),
  InitAmt: Yup.number().positive("Initial amount must be positive").required("Initial amount is required"),
  PercFixed: Yup.number().min(0).max(1).required("Percentage Fixed is required"),
  PercIndex1: Yup.number().min(0).max(1).required("Percentage Index 1 is required"),
  PercIndex2: Yup.number().min(0).max(1).required("Percentage Index 2 is required"),
  PercIndex3: Yup.number().min(0).max(1).required("Percentage Index 3 is required"),
  PercIndex4: Yup.number().min(0).max(1).required("Percentage Index 4 is required"),
  // ProdAddr1: Yup.string().required("Product Address 1 is required"),
  // ProdAddr2: Yup.string().required("Product Address 2 is required"),
  // ProdAddr3: Yup.string().required("Product Address 3 is required"),
  // ProdCompany: Yup.string().required("Product Company is required"),
  // ProdFullName: Yup.string().required("Producer Full Name is required"),
  // ProdPhone: Yup.string().required("Producer Phone is required"),
  State: Yup.string().required("State is required"),
  SysWD: Yup.number().required("Systematic Withdrawal is required"),
  SysWDMode: Yup.string().required("Systematic Withdrawal Mode is required"),
  SysWDYearEnd: Yup.number().required("Systematic Withdrawal Year End is required"),
  SysWDYearStart: Yup.number().required("Systematic Withdrawal Year Start is required"),
});

export default validationSchema;
