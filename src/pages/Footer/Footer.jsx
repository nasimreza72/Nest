import './footer.scss';
import { MdCopyright, MdEuro } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { BiUpArrow } from 'react-icons/bi';


function Footer() {
  return (
    <div className="Footer">
        <div className="leftFooter">
            <div>
                <MdCopyright className='MdCopyright'/> 2022 NeSt, Inc.
            </div>
            <button className='hideOnMediaScreen' >Privacy</button>
            <button className='hideOnMediaScreen' >Information about the company</button>
        </div>
        <div className="rightFooter">
            <button>
                <TbWorld className='TbWorld'/>
                English (EN)
            </button>
            <button>
                <MdEuro className='MdEuro'/>
                EUR
            </button>
            <button>
                Support & Info
                <BiUpArrow className='BiUpArrow'/>
            </button>
        </div>
    </div>
  );
}

export default Footer;