import "./style.css";
import { FaAngleDown, FaFilter } from 'react-icons/fa'

const Houses = () => {
  return (<div className="Houses">
    <nav>

        <div className="wrapper">
            <div className="subWrapper">
                <p>Price </p>
                <FaAngleDown style={{display:"inline"}}/>
            </div>
            <div className="subWrapper">
                <p>Type of place </p>
                <FaAngleDown style={{display:"inline"}}/>
            </div>
            <div className="subWrapperRightBorder"></div>
        </div>

        <div className="wrapper">
            <div className="subWrapper">
                <p>Free cancellation</p>
            </div>
            <div className="subWrapper">
                <p>Wifi</p>
            </div>
            <div className="subWrapper">
                <p>Kitchen</p>
            </div>
            <div className="subWrapper">
                <p>Washer</p>
            </div>
            <div className="subWrapper">
                <p>Self check-in</p>
            </div>
            <div className="subWrapper">
                <p>Dedicated workshop</p>
            </div>
            <div className="subWrapper">
                <p>Free parking</p>
            </div>
            <div className="subWrapper">
                <p>Dryer</p>
            </div>
            <div className="subWrapper">
                <p>Pool</p>
            </div>
            <div className="subWrapper">
                <p>Air conditioning</p>
            </div>
            <div className="subWrapper">
                <p>Iron</p>
            </div>
            <div className="subWrapper">
                <p>Gym</p>
            </div>
            <div className="subWrapper">
                <FaFilter style={{display:"inline", marginRight:10}}/>
                <p>Filters</p>
            </div>

        </div>

    </nav>

    <hr />

    <main>
      <section className="leftSection">
          <div className="subSection1">
            <p>300+ stays in map area</p> <br />
            <p>Support refugees fleeing Ukraine by donating throuh Airbnb.org. <u>Donate now</u> </p>
          </div>

          <div className="subSection">
            <img src="https://i.guim.co.uk/img/media/f1e0f389c933cd331eab1f4d9a95743d2ba36876/0_1_2000_1201/master/2000.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=49534fe4c19fa050a93ebcdb4db0282b" alt="photo of an apartment" />
            <div>
            <strong>Wuderschöne Zimmer im Zentrum von Berlin
            </strong> <br />
            <p>Excellent apartment situated near central station</p> <br />
            <p>4 guest 2 bedroom 2 bed 1 shared bath</p>
            </div>
          </div>

          <div className="subSection">
            <img src="https://winstonapart.wpengine.com/wp-content/uploads/2017/02/Winston_Apartments_CollinsSt_153.jpg" />
            <div>
            <strong>Ruhiges & gemütliches Zimmer im Zentrum von Berlin
            </strong> <br />
            <p>Wonderful apartment situated near central station</p> <br />
            <p>1 guest 1 bedroom 2 bed 1 shared bath</p>
            </div>
          </div>

          <div className="subSection">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/f8/52/08/lounge.jpg?w=900&h=-1&s=1" />
            <div>
            <strong>Sehr gemütliches Zimmer im Zentrum von Berlin
            </strong> <br />
            <p>Beautiful apartment situated near central station</p> <br />
            <p>3 guest 2 bedroom 1 bed 1 shared bath</p>
            </div>
          </div>
      </section>
      <section className="rightSection">
            <img src="https://www.google.com/maps/vt/data=SnuQIqL2YDVTW0wpIGnB9n_2Q8lYScZ6HIp04lrmLux67BbsMm41Kk80o40u2Yautr6t1C1G8gchEu-6w76lACaDN3_adOwYFthEPRp4x4ntXB2VP1LJmKo9JlZjGOmc5z8MzT8YC3o3dBZ6RJ-uBSWML7G1PNnQSFNefi6nsNjLxUpOCJjQjPFbVZhykpw4hjt8bexO6fdzpZ-5VBqd5qkRynsDGihrUYzFAXzPxmYCcQ" alt="" />
      </section>
    </main>


  </div>)
};

export default Houses;
