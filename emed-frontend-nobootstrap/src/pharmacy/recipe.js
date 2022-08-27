import React from 'react'
import EmedButton from '../components/emedButton';
import Progress from '../components/layout/progress';
import { Disclosure } from '@headlessui/react'
import { IconChevronDown } from '@tabler/icons'

const medications = [
  {
    id: 1, 
    title: 'Antibiotikum Tabl 800/160mg',
    substance: 'Disuffrontapienm Monokzomsd',
    quantity: 2,
    form: 'Tabletten',
    usage: ['2x Morgen', 'Abends'],
    frequency: ['Mo', 'Fr'],
    unit: 'Stück',
    period: '20.03.2022 bis 18.07.2022',
    additional: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Recipe() {
  return (
    <Progress
      content={
        <div className="mt-16">
          <div className="flex flex-col items-center text-center">
            <h1 className="mb-2">Rezept</h1>
            <span className="bg-gray-200 text-gray-600 px-2 py-1 text-sm font-bold rounded">Einmalig</span>
            <p className="text-sm mt-2">Ausgestellt am 20.03.2022 von</p>
            <button className="text-sm font-bold text-gray-800">Dr. Med. Mustermann</button>
          </div>
          <div className="flex flex-col gap-2 mt-12">
            <h2 className="text-base">Verantwortliche Kontaktperson</h2>
            {medications.map((medication) => (
              <div className="relative bg-white rounded p-6 flex flex-col">
                <span className="absolute -right-2 -top-2 h-12 w-12 pt-1 bg-gray-800 text-white font-headline rounded-full flex justify-center items-center font-bold">{medication.quantity}x</span>
                <h3 className="text-xl mb-2">{medication.title}</h3>
                <span className="font-headline text-base">{medication.substance}</span>
                <div className="my-6 flex flex-col gap-2">
                  <span>Form: <span className="font-bold">{medication.form}</span></span>
                  <div className="flex">
                    <span className="pt-0.5">Anwendung:</span>
                    <div className="pl-2 flex gap-1 flex-wrap">
                      {medication.usage.map((item) => (
                        <span className="bg-green/10 text-green pb-0.5 pt-1 px-2 text-sm rounded font-bold">{item}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex">
                    <span className="pt-0.5">Wöchentlich:</span>
                    <div className="pl-2 flex gap-1 flex-wrap">
                      {medication.frequency.map((item) => (
                        <span className="bg-green/10 text-green pb-0.5 pt-1 px-2 text-sm rounded font-bold">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                <Disclosure as="div" key={medication.id} className="pt-6">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        Mehr
                        <span className="ml-6 h-7 flex items-center">
                          <IconChevronDown
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        cooool
                      </Disclosure.Panel>
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
        <EmedButton gray size="large">Zurück</EmedButton>
      }
    />
  )
}


export default Recipe