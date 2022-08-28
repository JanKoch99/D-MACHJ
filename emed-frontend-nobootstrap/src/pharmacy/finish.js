import { IconArrowNarrowRight } from '@tabler/icons';
import React from 'react'
import EmedButton from '../components/emedButton';
import Layout from '../components/layout/layout';
import IllustrationFinish from '../illustrations/finish.svg'

function Finish() {
  return (
    <Layout>
        <div className="mt-32 flex flex-col justify-center items-center">
          <img className="max-w-xs" src={IllustrationFinish} alt="Fertig"/>
          <div className="text-center mt-14">
            <h1>Fertig!</h1>
            <p className="font-headline text-gray-600 text-lg mt-2 mb-6">Rezept erfolgreich ausgestellt</p>
            <EmedButton
              icon={<IconArrowNarrowRight/>}
            >        
              Zur Startseite
            </EmedButton>
          </div>
        </div>
    </Layout>
  )
}


export default Finish