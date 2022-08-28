import React, {Component, useCallback} from 'react'
import QrReader from 'react-qr-scanner'
import {useNavigate} from "react-router-dom";

let scandata = '';

class QrcodeScanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 1000,
      scaned: 'false',
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this);
    this.setScaned= this.setScaned.bind(this);
  }

  componentDidMount() {
      this.setScaned();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevState !== scandata) {
          this.setState({result: scandata, scaned: true})
          this.fetchAndCompare(scandata);
      }
  }

    fetchAndCompare(scandata) {
        if (this.props.role === 'Apotheker') {

            if (scandata.role !== 'Patient') { //parse scandaten, falls QRCODE nicht von uns
                // -> Scanerror
            } else {
                return fetch('http://https://mighty-plains-35170.herokuapp.com/patientdata/' + scandata.id, {
                    method: 'GET',
                    body: scandata
                })
                    .then(data => {
                        this.props.navigation.navigate('/pharmacy/scan-verify', {replace: true})
                        // gib personendata weiter zu verify
                    })
            }
        }
        else {
            // zur downloadseite von den patienten
        }
    }

    setScaned(){
      this.setState({scaned: false});
  }
  handleScan(data){
        scandata = data;
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return(
              <div>
                <QrReader
                    delay={this.state.delay}
                    style={previewStyle}
                    onError={e => console.log(e)}
                    onScan={() => {
                        this.handleScan()
                    }}
                />
              </div>

    )
  }
}
export default function (props){
  const navigation = useNavigate();
  return <QrcodeScanner {...props} navigation={navigation} />
};