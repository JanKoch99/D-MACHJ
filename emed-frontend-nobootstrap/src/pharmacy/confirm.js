import React, {useCallback} from 'react'
import EmedButton from '../components/emedButton';
import Progress from '../components/layout/progress';
import {useNavigate} from "react-router-dom";

const medications = [
  { id: 1, title: 'Antibiotikum Tabl 800/160mg', quantity: 2},
  { id: 2, title: 'Coop Vitality Paracetamol Tabl 500 mg 20 Stk', quantity: 1}
]
function Confirm() {
    const navigate = useNavigate();

    const handleOnClickWeiter = useCallback(() => navigate('/pharmacy/finish', {replace: false}), [navigate]);
    const handleOnClickZurück = useCallback(() => navigate('/', {replace: true}), [navigate]);

    return (
    <Progress
      content={
        <div className="mt-16">
          <div className="text-center">
            <h1>Bestätigung</h1>
          </div>
          <div className="flex flex-col gap-2 mt-12">
            {medications.map((medication) => (
              <div key={medication.id} className="relative bg-white rounded p-6 flex items-center">
                <div className="flex-none h-10 w-10 bg-primary-light/25 text-primary rounded-full flex justify-center items-center">
                  <span className="font-headline font-bold text-sm pt-1">{medication.quantity}x</span>
                </div>
                <div className="pt-0.5 pl-4">
                  <span className="font-bold text-gray-700">{medication.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
      navigation={
        <div className="flex flex-col gap-4 w-full">
            <div onClick={handleOnClickWeiter}>
            <EmedButton primary size="large">Zustellung bestätigen</EmedButton>
            </div>
            <div onClick={handleOnClickZurück}>
            <EmedButton gray size="large">Zurück</EmedButton>
            </div>
        </div>
      }
    />
  )
}


export default Confirm