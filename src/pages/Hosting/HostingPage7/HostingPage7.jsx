import "./hostingPage7.scss";
import { IoMdPhotos } from "react-icons/io";


export default function HostingPage7() {


  return (
    <div className="hostingPage7">
      <div className="mainLeft">
        <h1>Now, let's describe your place </h1>
      </div>
      <div className="mainRight">
          <div className="subMainRight">
              <div className="subMainRightDiv">
                    <h4>Create your description</h4>
                    <textarea type="text" placeholder="You'll have a great time at this comfortable place to stay." />
                    <p>0/500</p>
              </div>
        
          </div>
          <div className="subMainRightBottom">
              <div className="bottomPart">
                  <div className="back">
                      <button><u>Back</u></button>
                  </div>
                  <div className="next">
                      <button>Next</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
