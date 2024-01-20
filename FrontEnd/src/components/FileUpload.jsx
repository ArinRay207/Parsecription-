import { useEffect, useState } from "react";
import axios from "axios";
import { pdfjs } from "react-pdf";
import PdfComp from "./PdfComp";
import { Viewer } from '@react-pdf-viewer/core'; 
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; 
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core'; 
import './Form.css'
// import styles from './FileUpload.module.css'


function FileUpload() {
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');
  const [isUploaded, setIsUploaded] = useState(false);
  const [gotResult, setGotResult] = useState(false);
  const [result, setResult] = useState('');
  const [allPdfTitle, setAllPdfTitle] = useState([]);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  // useEffect(() => {
  //   getPdf();
  // }, []);
  // const getPdf = async () => {

  //   const result = await axios.get('http://:8080/user/get-all-files');
  //   setAllPdfTitle(result.data);
  //   // console.log(result.data.data);
  //   // setAllImage(result.data.data);
  // };

  // useEffect(()=> {
  //   getPdf();
  // })

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    console.log(file);

    const result = await axios.post(
      `http://172.18.2.48:8080/user/add-file`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    if (result && result.data) {
      // alert("Uploaded Successfully!!!");
      // console.log(res)
      setResult(result);
      setPdfUrl(result.data.secure_url);
      setIsUploaded(true);
    }
  };
  return (
    <div className={"form-container"}>
      <form className="formStyle" onSubmit={submitImage}>
        <h4>Upload Pdf</h4>
        <br />
        <input
          type="file"
          class="form-control"
          accept="application/pdf"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <button class="" type="submit">
          Submit
        </button>
      </form>
      <div className="uploaded">
        <h4>Uploaded PDF:</h4>
        <div className="output-div">
          
        </div>
      </div>
      {/* <PdfComp pdfFile={pdfFile}/> */}
      <div>
      
        {isUploaded && 
          <><Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer fileUrl={pdfUrl}
            plugins={[defaultLayoutPluginInstance]} />
        </Worker></>
        }
      </div>

      {/* <div> */}
      
        {/* {gotResult && 
          <h1>{result}</h1>
        } */}
      {/* </div>  */}
    </div>
  );
}

export default FileUpload;