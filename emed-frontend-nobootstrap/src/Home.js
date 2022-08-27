import QRScan from './illustrations/scan-qr-code.svg'
import {IconCamera} from '@tabler/icons'
import Layout from './components/layout/layout';

function Home() {
    return (
      <Layout>
        <div className="content mt-36">
          <div className="flex flex-col items-center">
            <img className="max-w-xs" src={QRScan} alt="EMed QR-Code scanner"/>
            <h1 className="text-center mt-10 max-w-xs">Arzt-Rezept Scannen</h1>
            <button className="bg-primary text-gray-800 p-6 rounded-full mt-6">
              <IconCamera size={30}/>
            </button>
          </div>
        </div>
      </Layout>
    );
  }
  
  export default Home;
  