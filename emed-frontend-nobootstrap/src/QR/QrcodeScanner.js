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
      //vlt evtl scandata vorher parsen?
      if (this.props.role === 'Apotheker'){
        return fetch('http://localhost:6060/', {
            method: 'GET',
            body: scandata
        })
            .then(data => {
                console.log('hallo')
                data.json()
            })
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
    const {navigation} = this.props.navigation;


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