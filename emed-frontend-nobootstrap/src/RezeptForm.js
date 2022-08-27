import React, {useState} from 'react'
import SimpleInput from './components/simpleInput'
import SimpleSelect from "./components/SimpleSelect";

function RezeptForm() {
  //Zustellender Arzt
  const [name, setName] = useState("");
  const [zsr, setZsr] = useState("");
  const [praxis, setPraxis] = useState("");
  const [praxisAdresse, setPraxisAdresse] = useState("");
  const [austellungsdatum, setAustellungsdatum] = useState("");
  //Patient
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [geburtsdatum, setGeburtsdatum] = useState("");
  const [geschlecht, setGeschlecht] = useState("");
  const [adresse, setAdresse] = useState("");

  //Medikament
  const [nameMedikament, setNameMedikament] = useState("");
  return (
    <div className="content py-32">
      <h1>Willkommen zu der Praxis</h1>
      <h2 className="mt-4">Verordnung hinzufügen</h2>
      <div className="mt-10">
        <form>
        <h3>Zustellender Arzt</h3>
        <div className="grid grid-cols-2 gap-6 mt-4">
          <SimpleInput
            label="Name"
            name="name-doctor"
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
            placeholder="Praxis"
          />
          <SimpleInput 
            label="Praxisadresse"
            name="praxisadresse"
            type="text"
            placeholder="Praxis Adresse"
          />
            <SimpleInput
                label="Ausstellungsdatum"
                name="ausstellungsdatum"
                type="text"
                placeholder="Ausstellungsdatum"
            />
            <br/>
            <h3>Patient</h3>
            <SimpleInput
                label="Vorname"
                name="vorname"
                type="text"
                placeholder="Vorname"
            />
            <SimpleInput
                label="Nachname"
                name="nachname"
                type="text"
                placeholder="Nachname"
            />
            <SimpleInput
                label="Geburtsdatum"
                name="geburtsdatum"
                type="date"
                placeholder="Ausstellungsdatum"
            />
            <SimpleInput
                label="Geschlecht"
                name="geschlecht"
                type="text"
                placeholder="Geschlecht"
            />
            <SimpleInput
                label="Adresse"
                name="adresse"
                type="text"
                placeholder="Adresse"
            />
            <h3>Medikament</h3>
            <SimpleInput
                label="Name"
                name="nameMedikament"
                type="text"
                placeholder="Name"
            />
            <SimpleSelect
                label="From"
                name="adresse"

                placeholder="Adresse"
            >
              <option value="stuck">Tabletten</option>
              <option value="ml">Ampulen</option>
            </SimpleSelect>
            <SimpleInput
                label="Anzahl"
                name="anzahl"
                type="number"
                placeholder="1"
            />
          <SimpleSelect
              label="Art der Medikation"
              name="einheit"
              placeholder="Adresse"
          >
            <option value="number-per-day">Täglich</option>
            <option value="number-per-week">Wöchentlich</option>
            <option value="nomber-per-month">Wöchentlich</option>
          </SimpleSelect>
          <h4>Gültigkeit</h4>
            <SimpleInput
                label="Von"
                name="von"
                type="date"
            />
            <SimpleInput
                label="Bis und mit"
                name="until"
                type="date"
            />
            <SimpleInput
                label="Hinweiss"
                name="hinweiss"
                type="text"
                placeholder="Hinweiss"
            />
          <br/>
            <h3>Anwendung</h3>
          <SimpleInput
              label="Morgen"
              name="morgen"
              type="number"
              placeholder="0"
          />
          <SimpleInput
              label="Mittag"
              name="mittag"
              type="number"
              placeholder="0"
          />
          <SimpleInput
              label="Abend"
              name="abend"
              type="number"
              placeholder="0"
          />
          <SimpleInput
              label="Zur Nacht"
              name="zur-nacht"
              type="number"
              placeholder="0"
          />
        </div>
        </form>
      </div>
    </div>
  )
}

export default RezeptForm