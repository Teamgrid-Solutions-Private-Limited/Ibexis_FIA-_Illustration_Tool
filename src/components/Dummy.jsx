import React, { useEffect ,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mergePdf, setPdfList } from './redux/MergeSlice';
import Loader from '../loader/Loader';

function ApiCall({mergePdfs}) {
  const dispatch = useDispatch();
  const { pdf, status, error } = useSelector(state => state.mergePdf);
  const [formData, setFormData] = useState({
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
  });

  
 const request_data= {
    inputs: {
      formData,
      ILLUSTRATION_1_11: {
        FileName: "",
        ReportName: "ILLUSTRATION_1.11",
      },
      ILLUSTRATION_2_11: {
        FileName: "",
        ReportName: "ILLUSTRATION_2.11",
      },
      ILLUSTRATION_2_12: {
        FileName: "",
        ReportName: "ILLUSTRATION_2.12",
      },
      ILLUSTRATION_3_11: {
        FileName: "",
        ReportName: "ILLUSTRATION_3.11",
      },
      ILLUSTRATION_3_12: {
        FileName: "",
        ReportName: "ILLUSTRATION_3.12",
      },
      ILLUSTRATION_3_21: {
        FileName: "",
        ReportName: "ILLUSTRATION_3.21",
      },
      ILLUSTRATION_3_22: {
        FileName: "",
        ReportName: "ILLUSTRATION_3.22",
      },
      ILLUSTRATION_3_31: {
        FileName: "",
        ReportName: "ILLUSTRATION_3.31",
      },
      ILLUSTRATION_3_32: {
        FileName: "",
        ReportName: "ILLUSTRATION_3.32",
      },
      ILLUSTRATION_3_41: {
        FileName: "",
        ReportName: "ILLUSTRATION_3.41",
      },
      ILLUSTRATION_3_42: {
        FileName: "",
        ReportName: "ILLUSTRATION_3.42",
      },
      ILLUSTRATION_4_11: {
        FileName: "",
        ReportName: "ILLUSTRATION_4.11",
      },
      ILLUSTRATION_4_21: {
        FileName: "",
        ReportName: "ILLUSTRATION_4.21",
      },
      ILLUSTRATION_4_31: {
        FileName: "",
        ReportName: "ILLUSTRATION_4.31",
      },
      ILLUSTRATION_4_41: {
        FileName: "",
        ReportName: "ILLUSTRATION_4.41",
      },
      ILLUSTRATION_4_51: {
        FileName: "",
        ReportName: "ILLUSTRATION_4.51",
      },
      ILLUSTRATION_5_11: {
        FileName: "",
        ReportName: "ILLUSTRATION_5.11",
      },
    },
  }
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Dispatch mergePdf action when the button is clicked
  const handleClick = async () => {
    await dispatch(mergePdf(request_data));
   
  };

  // Process PDF data when pdf state changes
  useEffect(() => {
    if (pdf && pdf.pagecounts) {
      const pdfData = Object.keys(pdf).map((key) => {
        if (key.startsWith('ILLUSTRATION_')) {
          const pageCount = getPageCount(key);
          if (pageCount > 0) {
            return {
              PDFUrl: pdf[key].PDFUrl,
              PDFName: pdf[key].PDFName,
              PageCount: pageCount
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
      <form>
        {/* Duration Field */}
        <div className="mb-3 row formfield">
          <label
            htmlFor="duration"
            className="form-label col-form-label col-sm-3"
          >
            Duration
          </label>
          <div className="col-sm-9">
            <select
              name="Duration"
              className="form-control"
              onChange={handleChange}
              value={7}
            >
              <option value="">--select--</option>
              <option value="5">5</option>
              <option value="7">7</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
 
        {/* Initial Amount Field */}
        <div className="mb-3 row formfield">
          <label
            htmlFor="initamt"
            className="form-label col-form-label col-sm-3"
          >
            Initial Amount
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <input
                type="number"
                name="InitAmt"
                value={formData.InitAmt}
                onChange={handleChange}
                className="form-control"
                style={{
                  width: "100%",
                  border: "1px solid rgb(206, 212, 218)",
                  borderRadius: "5px",
                  lineHeight: "2",
                }}
              />
            </div>
          </div>
        </div>
 
        {/* Percentage Fixed Field */}
        <div className="mb-3 row formfield">
          <label
            htmlFor="percfixed"
            className="form-label col-form-label col-sm-3"
          >
            Percentage Fixed
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <input
                type="number"
                step="0.01"
                name="PercFixed"
                value={formData.PercFixed}
                onChange={handleChange}
                className="form-control"
                style={{
                  width: "100%",
                  border: "1px solid rgb(206, 212, 218)",
                  borderRadius: "5px",
                  lineHeight: "2",
                }}
              />
            </div>
          </div>
        </div>
 
        {/* Percentage Index 1 Field */}
        <div className="mb-3 row formfield">
          <label
            htmlFor="percindex1"
            className="form-label col-form-label col-sm-3"
          >
            Percentage Index 1
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <input
                type="number"
                step="0.01"
                name="PercIndex1"
                value={formData.PercIndex1}
                onChange={handleChange}
                className="form-control"
                style={{
                  width: "100%",
                  border: "1px solid rgb(206, 212, 218)",
                  borderRadius: "5px",
                  lineHeight: "2",
                }}
              />
            </div>
          </div>
        </div>
 
        {/* Percentage Index 2 Field */}
        <div className="mb-3 row formfield">
          <label
            htmlFor="percindex2"
            className="form-label col-form-label col-sm-3"
          >
            Percentage Index 2
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <input
                type="number"
                step="0.01"
                name="PercIndex2"
                value={formData.PercIndex2}
                onChange={handleChange}
                className="form-control"
                style={{
                  width: "100%",
                  border: "1px solid rgb(206, 212, 218)",
                  borderRadius: "5px",
                  lineHeight: "2",
                }}
              />
            </div>
          </div>
        </div>
 
        {/* Percentage Index 3 Field */}
        <div className="mb-3 row formfield">
          <label
            htmlFor="percindex3"
            className="form-label col-form-label col-sm-3"
          >
            Percentage Index 3
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <input
                type="number"
                step="0.01"
                name="PercIndex3"
                value={formData.PercIndex3}
                onChange={handleChange}
                className="form-control"
                style={{
                  width: "100%",
                  border: "1px solid rgb(206, 212, 218)",
                  borderRadius: "5px",
                  lineHeight: "2",
                }}
              />
            </div>
          </div>
        </div>
 
        {/* Percentage Index 4 Field */}
        <div className="mb-3 row formfield">
          <label
            htmlFor="percindex4"
            className="form-label col-form-label col-sm-3"
          >
            Percentage Index 4
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <input
                type="number"
                step="0.01"
                name="PercIndex4"
                value={formData.PercIndex4}
                onChange={handleChange}
                className="form-control"
                style={{
                  width: "100%",
                  border: "1px solid rgb(206, 212, 218)",
                  borderRadius: "5px",
                  lineHeight: "2",
                }}
              />
            </div>
          </div>
        </div>
 
        {/* Floor Limit Field */}
        <div className="mb-3 row formfield">
          <label
            htmlFor="floorlimit"
            className="form-label col-form-label col-sm-3"
          >
            Floor Limit
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <input
                type="number"
                step="0.01"
                name="FloorLimit"
                value={formData.FloorLimit}
                onChange={handleChange}
                className="form-control"
                style={{
                  width: "100%",
                  border: "1px solid rgb(206, 212, 218)",
                  borderRadius: "5px",
                  lineHeight: "2",
                }}
              />
            </div>
          </div>
        </div>
 
        {/* System Withdrawal Field */}
        <div className="mb-3 row formfield">
          <label htmlFor="syswd" className="form-label col-form-label col-sm-3">
            System Withdrawal
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <input
                type="number"
                name="SysWD"
                value={formData.SysWD}
                onChange={handleChange}
                className="form-control"
                style={{
                  width: "100%",
                  border: "1px solid rgb(206, 212, 218)",
                  borderRadius: "5px",
                  lineHeight: "2",
                }}
              />
            </div>
          </div>
        </div>
 
        {/* System Withdrawal Mode Field */}
        <div className="mb-3 row formfield">
          <label
            htmlFor="syswdmode"
            className="form-label col-form-label col-sm-3"
          >
            System Withdrawal Mode
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <select
                name="SysWDMode"
                value={"Annual"}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">--select--</option>
                <option value="Annual">Annual</option>
                <option value="Semiannual">Semiannual</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
              </select>
            </div>
          </div>
        </div>
 
        {/* System Withdrawal Year Start Field */}
        <div className="mb-3 row formfield">
          <label
            htmlFor="syswdyearstart"
            className="form-label col-form-label col-sm-3"
          >
            System Withdrawal Year Start
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <input
                type="number"
                name="SysWDYearStart"
                value={formData.SysWDYearStart}
                onChange={handleChange}
                className="form-control"
                style={{
                  width: "100%",
                  border: "1px solid rgb(206, 212, 218)",
                  borderRadius: "5px",
                  lineHeight: "2",
                }}
              />
            </div>
          </div>
        </div>
 
        {/* System Withdrawal Year End Field */}
        <div className="mb-3 row formfield">
          <label
            htmlFor="syswdyearend"
            className="form-label col-form-label col-sm-3"
          >
            System Withdrawal Year End
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <input
                type="number"
                name="SysWDYearEnd"
                value={formData.SysWDYearEnd}
                onChange={handleChange}
                className="form-control"
                style={{
                  width: "100%",
                  border: "1px solid rgb(206, 212, 218)",
                  borderRadius: "5px",
                  lineHeight: "2",
                }}
              />
            </div>
          </div>
        </div>
 
        {/* State Field */}
        <div className="mb-3 row formfield">
          <label htmlFor="state" className="form-label col-form-label col-sm-3">
            State
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <input
                type="text"
                name="State"
                value={formData.State}
                onChange={handleChange}
                className="form-control"
                style={{
                  width: "100%",
                  border: "1px solid rgb(206, 212, 218)",
                  borderRadius: "5px",
                  lineHeight: "2",
                }}
              />
            </div>
          </div>
        </div>
 
        {/* Full Name Field */}
        <div className="mb-3 row formfield">
          <label
            htmlFor="fullname"
            className="form-label col-form-label col-sm-3"
          >
            Full Name
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <input
                type="text"
                name="AnnFullName"
                value={formData.AnnFullName}
                onChange={handleChange}
                className="form-control"
                style={{
                  width: "100%",
                  border: "1px solid rgb(206, 212, 218)",
                  borderRadius: "5px",
                  lineHeight: "2",
                }}
              />
            </div>
          </div>
        </div>
 
        {/* Age Field */}
        <div className="mb-3 row formfield">
          <label htmlFor="age" className="form-label col-form-label col-sm-3">
            Age
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <input
                type="number"
                name="AnnAge"
                value={formData.AnnAge}
                onChange={handleChange}
                className="form-control"
                style={{
                  width: "100%",
                  border: "1px solid rgb(206, 212, 218)",
                  borderRadius: "5px",
                  lineHeight: "2",
                }}
              />
            </div>
          </div>
        </div>
 
        {/* Gender Field */}
        <div className="mb-3 row formfield">
          <label
            htmlFor="gender"
            className="form-label col-form-label col-sm-3"
          >
            Gender
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <select
                name="AnnSex"
                value={formData.AnnSex}
                onChange={handleChange}
                className="form-control"
                style={{
                  width: "100%",
                  border: "1px solid rgb(206, 212, 218)",
                  borderRadius: "5px",
                  lineHeight: "2",
                }}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
 
        {/* Product Full Name Field */}
        <div className="mb-3 row formfield">
          <label
            htmlFor="prodfullname"
            className="form-label col-form-label col-sm-3"
          >
            Product Full Name
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <input
                type="text"
                name="ProdFullName"
                value={formData.ProdFullName}
                onChange={handleChange}
                className="form-control"
                style={{
                  width: "100%",
                  border: "1px solid rgb(206, 212, 218)",
                  borderRadius: "5px",
                  lineHeight: "2",
                }}
              />
            </div>
          </div>
        </div>
 
        {/* Product Company Field */}
        <div className="mb-3 row formfield">
          <label
            htmlFor="prodcompany"
            className="form-label col-form-label col-sm-3"
          >
            Product Company
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <input
                type="text"
                name="ProdCompany"
                value={formData.ProdCompany}
                onChange={handleChange}
                className="form-control"
                style={{
                  width: "100%",
                  border: "1px solid rgb(206, 212, 218)",
                  borderRadius: "5px",
                  lineHeight: "2",
                }}
              />
            </div>
          </div>
        </div>
 
        {/* Product Address 1 Field */}
        <div className="mb-3 row formfield">
          <label
            htmlFor="prodaddr1"
            className="form-label col-form-label col-sm-3"
          >
            Product Address 1
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <input
                type="text"
                name="ProdAddr1"
                value={formData.ProdAddr1}
                onChange={handleChange}
                className="form-control"
                style={{
                  width: "100%",
                  border: "1px solid rgb(206, 212, 218)",
                  borderRadius: "5px",
                  lineHeight: "2",
                }}
              />
            </div>
          </div>
        </div>
 
        {/* Product Address 2 Field */}
        <div className="mb-3 row formfield">
          <label
            htmlFor="prodaddr2"
            className="form-label col-form-label col-sm-3"
          >
            Product Address 2
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <input
                type="text"
                name="ProdAddr2"
                value={formData.ProdAddr2}
                onChange={handleChange}
                className="form-control"
                style={{
                  width: "100%",
                  border: "1px solid rgb(206, 212, 218)",
                  borderRadius: "5px",
                  lineHeight: "2",
                }}
              />
            </div>
          </div>
        </div>
 
        {/* Product Address 3 Field */}
        <div className="mb-3 row formfield">
          <label
            htmlFor="prodaddr3"
            className="form-label col-form-label col-sm-3"
          >
            Product Address 3
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <input
                type="text"
                name="ProdAddr3"
                value={formData.ProdAddr3}
                onChange={handleChange}
                className="form-control"
                style={{
                  width: "100%",
                  border: "1px solid rgb(206, 212, 218)",
                  borderRadius: "5px",
                  lineHeight: "2",
                }}
              />
            </div>
          </div>
        </div>
 
        {/* Product Phone Field */}
        <div className="mb-3 row formfield">
          <label
            htmlFor="prodphone"
            className="form-label col-form-label col-sm-3"
          >
            Product Phone
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <input
                type="text"
                name="ProdPhone"
                value={formData.ProdPhone}
                onChange={handleChange}
                className="form-control"
                style={{
                  width: "100%",
                  border: "1px solid rgb(206, 212, 218)",
                  borderRadius: "5px",
                  lineHeight: "2",
                }}
              />
            </div>
          </div>
        </div>
 
        <button type="button" onClick={handleClick} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
 
     
   
  );
}

export default ApiCall;
