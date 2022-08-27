import React from 'react'
import EmedButton from '../components/emedButton';
import Progress from '../components/layout/progress';
import { IconUserCheck, IconCheck } from '@tabler/icons'
import Women from '../illustrations/id-check-women.svg'

function ScanVerify() {
  return (
    <Progress
      content={
        <div className="mt-16">
          <div className="flex flex-col items-center">
            <div className="h-14 w-14 flex items-center justify-center bg-primary text-gray-800 rounded-full mb-6">
              <IconUserCheck />
            </div>
            <div className="max-w-[18rem] text-center">
              <h1 className="mb-4">Verifizierung</h1>
              <p>Stimmt der Name mit dem Ausweisdokument überein?</p>
            </div>
          </div>
          <div className="py-6 flex mt-10">
            <div className="px-4 bg-gray-300/50 rounded-lg w-full">
              <div className="bg-white p-6 rounded-lg -my-6 flex flex-col">
                <h3 className="text-lg">Daniela Abreu Ott</h3>
                <div className="flex mt-4">
                  <div className="flex flex-none w-28 relatve mr-6 relative">
                    <img className="flex w-full mt-6 relative z-10 ml-2" src={Women} alt="Verifizierung Frau"/>
                    <div className="absolute top-0 left-0 w-4/5 h-full bg-gray-200 rounded" />
                  </div>
                  <div className="flex-shrink flex flex-col w-full">
                    <span className="font-semibold">Weiblich</span>
                    <span className="font-semibold mt-1">18.07.2002</span>
                    <p className="text-gray-600 text-sm mt-auto">
                      Musterstrasse 1 <br/> 12345 Musterstadt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      navigation={
        <div className="flex flex-col gap-4 w-full">
          <EmedButton green size="large" icon={<IconCheck className="ml-1" />}>Verifizieren</EmedButton>
          <EmedButton gray size="large">Daten stimmen nicht überein</EmedButton>
        </div>
      }
    />
  )
}


export default ScanVerify