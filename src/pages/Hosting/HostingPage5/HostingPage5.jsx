import "./hostingPage5.scss";
import { IoMdPhotos } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HostingPage5() {
  let navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [imageId, setImageId] = useState("");

  function handelFileSelect(e) {
    console.log("------>", e.target.files[0]);
    setFile(e.target.files[0]);
  }
  useEffect(() => {
    if (file) {
      const formData = new FormData();
      formData.append("selectedFile", file);

      console.log("formData :>> ", formData);

      axios
        .post("http://localhost:7777/file", formData)
        .then((result) => setImageId(result.data.fileID))
        .catch((err) => console.log("err :>> ", err));
    }

    return

  }, [file])

  console.log("from state", file);

  return (
    <div className="hostingPage5">
      <div className="mainLeft">
        <h1>Next, let's add some photos of your place</h1>
      </div>
      <div className="mainRight">
        <div className="subMainRight">
          <div className="subMainRightDiv">
            <div className="uploadImageTop">
              <IoMdPhotos className="logo" />
              <div className="dragPhoto">Drag your photo here</div>
              <div className="addPhoto">Add at least 5 photos</div>
            </div>
            <div className="uploadImageBottom">
              {/* <button className="uploadFromDevice">
                Upload from your device
              </button> */}
              <input
                className="uploadFromDevice"
                onChange={handelFileSelect}
                type="file"
              />

              <img src={`http://localhost:7777/getImage/${imageId}`} width="350px" />
            </div>
          </div>
        </div>
        <div className="subMainRightBottom">
          <div className="bottomPart">
            <div className="back">
              <button
                onClick={() => navigate("../hostingPage4", { replace: true })}
              >
                <u>Back</u>
              </button>
            </div>
            <div className="next">
              <button
                onClick={() => navigate("../hostingPage6", { replace: true })}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
