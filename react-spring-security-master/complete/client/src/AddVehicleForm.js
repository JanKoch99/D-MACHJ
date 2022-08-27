import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {array, func} from 'prop-types';



class AddVehicleForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      make: {id: ''},
      model: {id: ''},
      driver: {id: ''}
    };
  }

  render() {

    function renderSelectList(item) {
      return <option key={item.id} value={item.id}>{item.name}</option>
    }

    return (
      <div>
        <h3>Add a Verordnung:</h3>



        <form className="form form-inline" onSubmit={this.handleSubmit}>
          <Row>
            <h4>Zustellender Arzt</h4>
            <Col md={3}>
              <input className="form-control" name="name" type="text"
                     placeholder="Enter a name..." />
            </Col>
            <Col md={3}>
              <input className="form-control" name="zsr-nr" type="text"
                     placeholder="Enter a ZSR-Nr...." />
            </Col>
            <Col md={3}>
              <input className="form-control" name="praxis" type="text"
                     placeholder="Enter a Praxis..." />
            </Col>
            <Col md={3}>
              <input className="form-control" name="praxisadresse" type="text"
                     placeholder="Enter a Praxisadresse..." />
            </Col>
            <Col md={3}>
              <input className="form-control" name="austellungsdatum" type="text"
                     placeholder="Enter a Ausstellunsdatum..." />
            </Col>
            <h4>Patient</h4>
            <Col md={3}>
              <input className="form-control" name="vorname" type="text"
                     placeholder="Enter a Vorname..." />
            </Col>
            <Col md={3}>
              <input className="form-control" name="nachname" type="text"
                     placeholder="Enter a Nachname..." />
            </Col>
            <Col md={3}>
              <input className="form-control" name="geburtsdatum" type="text"
                     placeholder="Enter a geburtsdatum..." />
            </Col>
            <Col md={3}>
              <input className="form-control" name="geschlecht" type="text"
                     placeholder="Enter a Geschlecht..." />
            </Col>
            <Col md={3}>
              <input className="form-control" name="adresse" type="text"
                     placeholder="Enter a Adresse..." />
            </Col>
            <h4>Medikament</h4>
            <Col md={3}>
              <input className="form-control" name="name" type="text"
                     placeholder="Enter a Name..." />
            </Col>
            <Col md={3}>
              <select className="form-control" name="form"  onChange={this.handleMakeChange}>

              </select>
            </Col>
            <Col md={3}>
              <label>
                Anzahl:
                <input className="form-control" name="zsr" type="number"
                       defaultValue={"1"} />
              </label>
            </Col>
            <Col md={3}>
              <label>
                Einheit:
                <select className="form-control" name="einheit" onChange={this.handleMakeChange}>

                </select>
              </label>

            </Col>
            <Col md={3}>
              <label>
                Art der Medikation
              </label>
              <select className="form-control" name="einheit" onChange={this.handleMakeChange}>

              </select>
            </Col>
            <Col md={3}>
              <label>GültigkeitVon:
                <input className="form-control" name="zsr" type="date"
                                           />
              </label>
              <label>Bis:
                <input className="form-control" name="zsr" type="date"
                       />
              </label>
            </Col>
            <Col md={3}>
              <input className="form-control" name="zsr" type="text"
                     placeholder="Enter a Hinweiss..." />
            </Col>

            <h5 >Anwendung</h5>

            <Col md={3}>
              <label>
                Morgen
                <input className="form-control" name="morgen" type="number"
                       defaultValue={"0"} />
              </label>
            </Col>
            <Col md={3}>
              <label>
                Mittag
                <input className="form-control" name="mittag" type="number"
                       defaultValue={"0"} />
              </label>
            </Col>
            <Col md={3}>
              <label>
                Abend
                <input className="form-control" name="abend" type="number"
                       defaultValue={"0"} />
              </label>
            </Col>
            <Col md={3}>
              <label>
                Zur Nacht
                <input className="form-control" name="zur-nacht" type="number"
                       defaultValue={"0"} />
              </label>
            </Col>
            <Col md={2}>
              <input className="btn btn-success" type="submit" value="Verordnung erstellen"/>
            </Col>
          </Row>
        </form>

      </div>);

  }
}

AddVehicleForm.propTypes = {
  makes: array,
  models: array,
  drivers: array,
  onSubmit: func
};

export default AddVehicleForm;
