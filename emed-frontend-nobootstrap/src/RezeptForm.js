import React from 'react'
import SimpleInput from './components/simpleInput'

function RezeptForm() {
  return (
    <div className="content py-32">
      <h1>Willkommen zu der Praxis</h1>
      <h2 className="mt-4">Verordnung hinzufügen</h2>
      <div className="mt-10">
        <h3>Zustellender Arzt</h3>
        <div className="grid grid-cols-2 gap-6 mt-4">
          <SimpleInput
            label="Name"
            name="name"
            type="text"
            value="Danilo Abreu Ott"
          />
          <SimpleInput 
            label="ZSR-Nr"
            name="zsr"
            type="text"
            placeholder="Danilo Abreu Ott"
          />
          <SimpleInput 
            label="Praxis"
            name="praxis"
            type="text"
            placeholder="Danilo Abreu Ott"
          />
          <SimpleInput 
            label="Praxisadresse"
            name="name"
            type="text"
            placeholder="Danilo Abreu Ott"
          />
        </div>
      </div>
    </div>
  )
}

export default RezeptForm