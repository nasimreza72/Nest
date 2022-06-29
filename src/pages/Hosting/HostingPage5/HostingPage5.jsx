import "./hostingPage5.scss";
import { IoMdPhotos } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export default function HostingPage5() {
  let navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [helper, setHelper] = useState(1);
  const [secondFile, setSecondFile] = useState(null);
  const [objectId, setObjectId] = useState("");

  function handelFileSelect(e) {
    console.log("------>", e.target.files[0]);
    setFile(e.target.files[0]);
  }
  useEffect(() => {
    if (file) {
      const formData = new FormData();
      formData.append("selectedFile", file);

      axios.patch("http://localhost:7777/api/house/addImage/62bb54b78bc34763a759dcfc", formData)
        .then((result) => {
          setObjectId(result.data.fileID)
          console.log('result.data :>> ', result.data);
        })

        .catch((err) => console.log("err :>> ", err));
    }
    return;
  }, [file]);

  function pushIntoArray (e) {
    setSecondFile(e.target.files[0]);
  }

  useEffect(() => {
    if (secondFile) {
      const formData = new FormData();
      formData.append("selectedFile", secondFile);
      axios
        .patch(
          "http://localhost:7777/api/house/addSecondImage/62bb54b78bc34763a759dcfc",
          formData
        )
        .then((result) => setHelper(helper+1))
        .catch((err) => console.log("err :>> ", err));
    }
    return;
  },[secondFile]);

  console.log(helper);


  console.log("from state", file);

  return (
    <div className="hostingPage5">
      <div className="mainLeft">
        <h1>Next, let's add some photos of your place</h1>
      </div>
      <div className="mainRight">
        <div className="subMainRight">
          <div className="subMainRightDiv">
            <div
              className="uploadImageTop"
              style={{ display: objectId ? "none" : "flex" }}
            >
              <IoMdPhotos className="logo" />
              <div className="dragPhoto">Drag your photo here</div>
              <div className="addPhoto">Add maximum 5 photos</div>
            </div>

            <div
              className="uploadImageBottom"
              style={{ display: objectId ? "none" : "flex" }}
            >
              <div className="uploadFromDevice">
                Upload from your device
                <input
                  class="file_upload"
                  onChange={handelFileSelect}
                  type="file"
                />
              </div>
            </div>
            {objectId && (
              <div className="wrapper">

                <img src={`http://localhost:7777/api/house/getImage/${objectId}/0`} />

                <h5>Add maximum five photos</h5>

                <div className="subWrapperTop">

                  <div className="firstImageBox">
                    <IoMdPhotos className="logo" />
                    <input 
                    onChange={pushIntoArray}
                    type="file" class="file_upload" />
                   {helper> 1 && <img  src={`http://localhost:7777/api/house/getImage/${objectId}/1`} alt="" /> }
                  </div>


                  <div className="secondImageBox">
                    <IoMdPhotos className="logo" />
                    <input 
                      onChange={pushIntoArray}
                      type="file" class="file_upload" />
                     {helper> 2 && <img  src={`http://localhost:7777/api/house/getImage/${objectId}/2`} alt="" /> }
                  </div>


                </div>
                <div className="subWrapperBottom">

                  <div className="thirdImageBox">
                    <IoMdPhotos className="logo" />   
                    <input  onChange={pushIntoArray} type="file" class="file_upload" />
                    {helper> 3 && <img  src={`http://localhost:7777/api/house/getImage/${objectId}/3`} alt="" /> }
                  </div>


                  <div className="fourthImageBox">
                    <IoMdPhotos className="logo" />  
                    <input onChange={pushIntoArray} type="file" class="file_upload" />
                    {helper> 4 && <img  src={`http://localhost:7777/api/house/getImage/${objectId}/4`} alt="" /> }
                  </div>


                </div>
              </div>
            )}
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
