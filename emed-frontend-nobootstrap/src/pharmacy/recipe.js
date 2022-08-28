import React, {useCallback} from 'react'
import EmedButton from '../components/emedButton';
import Progress from '../components/layout/progress';
import { Disclosure } from '@headlessui/react'
import { IconArrowNarrowRight, IconChevronDown } from '@tabler/icons'
import ModalDoctor from '../components/modalDoctor'
import { useState } from 'react'
import {useNavigate} from "react-router-dom";

const medications = [
  {
    id: 1, 
    title: 'Antibiotikum Tabl 800/160mg',
    substance: 'Disuffrontapienm Monokzomsd',
    quantity: 2,
    form: 'Tabletten',
    usage: ['1x Morgen', '1x Abends'],
    frequency: 'Täglich',
    unit: 'Stück',
    period: '20.03.2022 bis 18.07.2022',
    additional: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'
  },
  {
    id: 2, 
    title: 'Coop Vitality Paracetamol Tabl 500 mg 20 Stk',
    substance: 'Disuffrontapienm Monokzomsd',
    quantity: 1,
    form: 'Tabletten',
    usage: [],
    frequency: '',
    unit: 'Stück',
    period: '20.03.2022 bis 18.07.2022',
    additional: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'
  }
] 

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Recipe() {
  const navigate = useNavigate();

  const handleOnClickWeiter = useCallback(() => navigate('/pharmacy/confirm', {replace: false}), [navigate]);
  const handleOnClickZurück = useCallback(() => navigate('/', {replace: true}), [navigate]);

  const [open, setOpen] = useState(false)
  return (
    <Progress
      content={
        <div className="mt-16">
          <div className="flex flex-col items-center text-center">
            <h1 className="mb-2">Rezept</h1>
            <span className="bg-gray-200 text-gray-600 px-2 py-1 text-sm font-bold rounded">Einmalig</span>
            <p className="text-sm mt-2">Ausgestellt am 20.03.2022 von</p>
            <button onClick={() => setOpen(true)} className="text-sm font-bold text-gray-800 edem-underline">Dr. Med. Mustermann</button>
            <ModalDoctor open={open} setOpen={setOpen}/>
          </div>
          <div className="flex flex-col gap-2 mt-12">
            {medications.map((medication) => (
              <div className="relative bg-white rounded p-6 flex flex-col">
                <span className="absolute -right-2 -top-2 h-12 w-12 pt-1 bg-gray-800 text-white font-headline rounded-full flex justify-center items-center font-bold">{medication.quantity}x</span>
                <h3 className="text-xl mb-2 pr-6">{medication.title}</h3>
                <span className="font-headline text-base">{medication.substance}</span>
                <div className="mt-6 flex flex-col gap-2">
                  <span>Form: <span className="font-bold">{medication.form}</span></span>
                  {medication.usage.length > 0 ? 
                    <div className="flex">
                      <span className="pt-0.5">Anwendung:</span>
                      <div className="pl-2 flex gap-1 flex-wrap">
                        {medication.usage.map((item) => (
                          <span className="bg-green/10 text-green pb-0.5 pt-1 px-2 text-sm rounded font-bold">{item}</span>
                          ))}
                      </div>
                    </div>
                  : ''}
                  {medication.frequency !== '' &&
                    <span className="font-bold">{medication.frequency}</span>
                  }
                </div>
                <div>
                <Disclosure as="div" key={medication.id}>
                  {({ open }) => (
                    <>
                      <Disclosure.Panel as="dd" className="mt-2">
                        <div className="flex flex-col gap-2">
                          <span>Einheit: <span className="font-bold">{medication.unit}</span></span>
                          <div className="flex">
                            <span>Einnahme</span>
                            <span className="pl-2 font-bold">{medication.period}</span>
                          </div>
                          <div className="mt-4">
                            <span className="font-bold">Zusätzliche Information</span>
                            <p className="">{medication.additional}</p>
                          </div>
                        </div>
                      </Disclosure.Panel>
                      <hr className="mt-6" />
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400 mt-6">
                        <span className="font-headline font-bold text-gray-700">
                          { open ? <span>Weniger</span> : <span>Weitere</span>} Details
                        </span>
                        <span className="text-gray-600"><IconChevronDown className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}/></span>
                      </Disclosure.Button>
                    </>
                  )}
                </Disclosure>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
      navigation={
        <div className="flex flex-col gap-4 w-full">
          <div onClick={handleOnClickWeiter}>
          <EmedButton primary size="large" icon={<IconArrowNarrowRight/>}>Weiter</EmedButton>
          </div>
        <div onClick={handleOnClickZurück}>
          <EmedButton gray size="large">Zurück</EmedButton>
        </div>
        </div>
      }
    />
  )
}


export default Recipe