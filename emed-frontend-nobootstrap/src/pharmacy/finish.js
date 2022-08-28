import { IconArrowNarrowRight } from '@tabler/icons';
import React, {useCallback} from 'react'
import EmedButton from '../components/emedButton';
import Layout from '../components/layout/layout';
import IllustrationFinish from '../illustrations/finish.svg'
import {useNavigate} from "react-router-dom";

function Finish() {

  const navigate = useNavigate();

  const handleOnClickZurück = useCallback(() => navigate('/', {replace: true}), [navigate]);

  return (
    <Layout>
        <div className="mt-32 flex flex-col justify-center items-center">
          <img className="max-w-xs" src={IllustrationFinish} alt="Fertig"/>
          <div className="text-center mt-14">
            <h1>Fertig!</h1>
            <p className="font-headline text-gray-600 text-lg mt-2 mb-6">Rezept erfolgreich ausgestellt</p>
            <div onClick={handleOnClickZurück}>
            <EmedButton
              icon={<IconArrowNarrowRight/>}
            >        
              Zur Startseite
            </EmedButton>
          </div>
          </div>
        </div>
    </Layout>
  )
}


export default Finish