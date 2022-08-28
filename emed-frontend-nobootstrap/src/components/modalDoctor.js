import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function ModalDoctor({open, setOpen}) {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg p-6 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 w-full sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-bold text-gray-900 font-headline">
                      Dr. Med. Mustermann
                    </Dialog.Title>
                    <h4 className="font-sans text-base mt-2">Praxis Mustermann</h4>
                    <div className="mt-2">
                      <p className="text-sm">
                        Trumstraße 44 <br/>
                        73483 Köln <br/>
                        Telefon: 0123 456 789 <br/>
                        E-Mail: muster@mann.com<br/>
                        ZSR-Nummer: 
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 flex justify-center">
                  <button
                    type="button"
                    className="font-headline font-bold text-gray-800"
                    onClick={() => setOpen(false)}
                  >
                    Fenster schließen
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
