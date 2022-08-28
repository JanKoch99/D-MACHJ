import React, {Component} from 'react'
import EmedButton from '../components/emedButton';
import Progress from '../components/layout/progress';
import { IconUserCheck, IconCheck } from '@tabler/icons'
import Women from '../illustrations/id-check-women.svg'
import {withRouter} from "../withRouter";

class ScanVerify extends Component {
  constructor(props) {
    super(props);
    this.state = {

        prename: ' ',
        aftername: ' ',
        sex: ' ',
        birthday: ' ',
        address: ' ',
        zip: ' ',
        city: ' '
    }
    this.handleNavigation = this.handleNavigation.bind(this);
  }
  handleNavigation(path) {
        this.props.navigate(path);
  }

  componentDidMount() {
    fetch('https://mighty-plains-35170.herokuapp.com/patientdata/' + this.props.token.patientDataID, {
      method: 'GET',
      body: this.props.token.patientDataID
    }).then(data => {
        this.setState({
          prename: data.prename,
          aftername: data.aftername,
          sex: data.sex,
          birthday: data.birthday,
          address: data.address,
          zip: data.zip,
          city: data.city
        });
    })
  }

  render() {


    return (
        <Progress
            content={
              <div className="mt-16">
                <div className="flex flex-col items-center">
                  <div
                      className="h-14 w-14 flex items-center justify-center bg-primary text-gray-800 rounded-full mb-6">
                    <IconUserCheck/>
                  </div>
                  <div className="max-w-[18rem] text-center">
                    <h1 className="mb-4">Verifizierung</h1>
                    <p>Stimmt der Name mit dem Ausweisdokument überein?</p>
                  </div>
                </div>
                <div className="py-6 flex mt-10">
                  <div className="px-4 bg-gray-300/50 rounded-lg w-full">
                    <div className="bg-white p-6 rounded-lg -my-6 flex flex-col">
                      <h3 className="text-lg">{this.state.prename + ' ' + this.state.aftername}</h3>
                      <div className="flex mt-4">
                        <div className="flex flex-none w-28 relatve mr-6 relative">
                          <img className="flex w-full mt-6 relative z-10 ml-2" src={Women} alt="Verifizierung Frau"/>
                          <div className="absolute top-0 left-0 w-4/5 h-full bg-gray-200 rounded"/>
                        </div>
                        <div className="flex-shrink flex flex-col w-full">
                          <span className="font-semibold">{this.state.sex}</span>
                          <span className="font-semibold mt-1">{this.state.birthday}</span>
                          <p className="text-gray-600 text-sm mt-auto">
                            {this.state.address} <br/> {this.state.zip + ' ' + this.state.city}
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
                  <div onClick={() => this.handleNavigation('/pharmacy/recipe')}><EmedButton green size="large" icon={<IconCheck
                      className="ml-1"/>} >Verifizieren</EmedButton></div>
                  <div onClick={() => this.handleNavigation('/')}><EmedButton gray size="large" >Daten stimmen nicht überein</EmedButton></div>
              </div>
            }
        />
    )
  }
}
export default withRouter(ScanVerify);