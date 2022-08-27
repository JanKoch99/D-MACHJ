import React from 'react'
import EmedButton from '../components/emedButton';
import Progress from '../components/layout/progress';
import { IconX, IconPhone, IconMail, IconArrowNarrowRight } from '@tabler/icons'
import { Link } from 'react-router-dom';

const contact = [
  { icon: IconPhone, title: 'Telefon', content: '+43 1234 567 89', link: '#'},
  { icon: IconMail, title: 'Mail', content: 'info@danilao.com', link: '#'}
]
function ScanFail() {
  return (
    <Progress
      content={
        <div className="mt-16">
          <div className="flex flex-col items-center">
            <div className="h-14 w-14 flex items-center justify-center bg-red text-gray-800 rounded-full mb-6">
              <IconX />
            </div>
            <div className="max-w-[18rem] text-center">
              <h1 className="mb-4">QR-Code nicht gültig</h1>
              <p>Bitte nehmen Sie Kontakt zu der Arzt-Praxis auf.</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-12">
            <h2 className="text-base">Verantwortliche Kontaktperson</h2>
            {contact.map((item) => (
              <div className="relative bg-white rounded p-6 flex items-center">
                <div className="h-12 w-12 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full">
                  <item.icon />
                </div>
                <div className="ml-4">
                  <h5 className="text-sm">{item.title}</h5>
                  <Link to={item.link}>{item.content}</Link>
                </div>
                <div className="ml-auto">
                  <IconArrowNarrowRight size={20} className="text-primary"/>
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


export default ScanFail