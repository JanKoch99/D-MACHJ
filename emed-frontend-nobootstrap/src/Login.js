import { IconBrandApple, IconBrandGoogle, IconBrandTwitter } from '@tabler/icons'
import { Link } from 'react-router-dom';
import SimpleInput from './components/simpleInput';
import EmedButton from './components/emedButton';
import Layout from './components/layout/layout';
import {Component, useState} from "react";
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('https://mighty-plains-35170.herokuapp.com/person/login', {
    method: 'POST',
    body: JSON.stringify(credentials)
  })
      .then(data => {
        console.log(data.json())
        data.json()
      })
}

function Login({setToken}){
    const [mail, setMail] = useState();
    const [pw, setPw] = useState();
    const [id, setID] = useState();
    const [role, setRole] = useState();
    const [patientDataID, setPatientDataID] = useState();
    const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
        id,
        mail,
        pw,
        patientDataID,
        role
      }).then(token => {
        if (token !== undefined){
          setToken(token);
        }
        else{
          console.log(token);
        }
      })

    }
    return (
        <Layout>
          <div>
            <div className="content text-center pt-16 pb-10">
              <h1>Anmelden</h1>
              <p className="text-sm mt-2">Kein Konto? <Link to="#" className="text-gray-800 font-bold edem-underline">Jetzt
                Registrieren</Link></p>
            </div>
            <div className="bg-white rounded-t-xl py-10">
              <div className="content">
                <form action="#" method="POST">
                  <div className="space-y-6">
                    <SimpleInput
                        label="E-Mail"
                        name="email"
                        type="email"
                        placeholder="max.mustermann@muster.com"
                        onChange={(event)=>setMail(event.target.value)}
                    />
                    <div>
                      <SimpleInput
                          label="Passwort"
                          name="password"
                          type="password"
                          onChange={(event) => setPw(event.target.value)}
                      />
                      <div className="flex justify-end mt-3">
                        <Link to="#" className="text-sm font-semibold text-gray-600">
                          Forgot your password?
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div onClick={handleSubmit}
                       className="mt-12">
                    <EmedButton
                        size="large"
                    >
                      Anmelden
                    </EmedButton>
                  </div>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"/>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Oder fahre fort mit</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <Link
                        to="#"
                        className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded bg-white text-sm text-gray-700"
                    >
                      <IconBrandApple size={20}/>
                    </Link>
                    <Link
                        to="#"
                        className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded bg-white text-sm text-gray-700"
                    >
                      <IconBrandTwitter size={20}/>
                    </Link>
                    <Link
                        to="#"
                        className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded bg-white text-sm text-gray-700"
                    >
                      <IconBrandGoogle size={20}/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
    );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;
