import "./hosting.scss";

export default function HostingPage1() {


  return (
    <div className="hostingPae1">
      <div className="mainLeft">
        <h1>What kind of place will you host?</h1>
      </div>
      <div className="mainRight">
          <div className="subMainRight">
              <div className="subMainRightDiv">
                  <p>Apartment</p>
                  <div className="apartmentImage">
                      <img src="https://a0.muscache.com/im/pictures/eadbcbdb-d57d-44d9-9a76-665a7a4d1cd7.jpg?im_w=240" alt="" width={60} />
                  </div>
              </div>

              <div className="subMainRightDiv">
                  <p>House</p>
                  <div className="apartmentImage">
                      <img src="https://a0.muscache.com/im/pictures/d1af74db-58eb-46bf-b3f5-e42b6c9892db.jpg?im_w=240" alt="" width={60} />
                  </div>
              </div>

              <div className="subMainRightDiv">
                  <p>Private Room</p>
                  <div className="apartmentImage">
                      <img src="https://a0.muscache.com/im/pictures/d52fb4e7-39a4-46df-9bf9-67e56d35eeca.jpg?im_w=240" alt="" width={60} />
                  </div>
              </div>

              <div className="subMainRightDiv">
                  <p>Shared Room</p>
                  <div className="apartmentImage">
                      <img src="https://a0.muscache.com/im/pictures/a2c9ad21-b159-4fd2-b417-d810fb23c6a9.jpg?im_w=240" alt="" width={60} />
                  </div>
              </div>

              <div className="subMainRightDiv">
                  <p>Attic</p>
                  <div className="apartmentImage">
                      <img src="https://cdnb.artstation.com/p/assets/images/images/038/712/203/large/selami-bektas-attic-bedroom-01.jpg?1623851279" alt="" width={60} />
                  </div>
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
