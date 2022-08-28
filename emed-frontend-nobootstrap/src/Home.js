import QRScan from './illustrations/scan-qr-code.svg'
import {IconCamera} from '@tabler/icons'
import Layout from './components/layout/layout';
import {useCallback} from "react";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/qrcode-scan', {replace: false}), [navigate]);
    return (
      <Layout>
        <div className="content mt-36">
          <div className="flex flex-col items-center">
            <img className="max-w-xs" src={QRScan} alt="EMed QR-Code scanner"/>
            <h1 className="text-center mt-10 max-w-xs">Arzt-Rezept Scannen</h1>
            <button className="bg-primary text-gray-800 p-6 rounded-full mt-6"onClick={handleOnClick}>
              <IconCamera size={30}/>
            </button>
          </div>
        </div>
      </Layout>
    );
  }
  
  export default Home;
  