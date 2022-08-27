import React from 'react'
import { IconUser, IconMenu2 } from '@tabler/icons';
import logo from './../../logo.svg';
import { Link } from "react-router-dom";

function Progress({content, navigation}) {
  return (
    <div className="h-screen bg-gray-100">
      <div className="flex h-full flex-col overflow-hidden">
        {/* CONTENT */}
        <div className="flex-shrink overflow-y-auto">
          <div className="content py-4">
            <div className="flex items-center">
              <div className="flex-1 w-22">
                <Link className="text-gray-800" to="login">
                  <IconMenu2 />
                </Link>
              </div>
              <div className="flex justify-center">
                <Link to="/">
                  <img className="h-5" src={logo} alt="Logo EMed" />
                </Link>
              </div>
              <div className="flex-1 flex justify-end w-22">
                <Link className="text-gray-800" to="login">
                  <IconUser />
                </Link>
              </div>
            </div>
          </div>
          <main>
            <div className="content">
              {content}
            </div>
          </main>
        </div>
        <div className="flex p-4 mt-auto">
          {navigation}
        </div>
      </div>
    </div>
  )
}

export default Progress