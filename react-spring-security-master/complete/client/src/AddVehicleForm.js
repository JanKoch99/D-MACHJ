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

  handleSubmit = (event) => {
    event.preventDefault();

    const {name, make, model, driver} = this.state;

    if (!name || !make.id || !model.id || !driver.id) {
      console.warn("missing required field!");
      return;
    }
    this.props.onSubmit({name, make, model, driver});
    this.setState({name: '', make: {id: ''}, model: {id: ''}, driver: {id: ''}});
  };

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  };

  handleMakeChange = (event) => {
    this.setState({make: {id: event.target.value}});
  };

  handleModelChange = (event) => {
    this.setState({model: {id: event.target.value}});
  };

  handleDriverChange = (event) => {
    this.setState({driver: {id: event.target.value}});
  };


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
              <input className="form-control" name="name" type="text" value={ this.state.name }
                     placeholder="Enter a name..." onChange={ this.handleNameChange }/>
            </Col>
            <Col md={3}>
              <input className="form-control" name="zsr-nr" type="text" value={ this.state.zsr }
                     placeholder="Enter a ZSR-Nr...." onChange={ this.handleNameChange }/>
            </Col>
            <Col md={3}>
              <input className="form-control" name="praxis" type="text" value={ this.state.zsr }
                     placeholder="Enter a Praxis..." onChange={ this.handleNameChange }/>
            </Col>
            <Col md={3}>
              <input className="form-control" name="praxisadresse" type="text" value={ this.state.zsr }
                     placeholder="Enter a Praxisadresse..." onChange={ this.handleNameChange }/>
            </Col>
            <Col md={3}>
              <input className="form-control" name="austellungsdatum" type="text" value={ this.state.zsr }
                     placeholder="Enter a Ausstellunsdatum..." onChange={ this.handleNameChange }/>
            </Col>
            <h4>Patient</h4>
            <Col md={3}>
              <input className="form-control" name="vorname" type="text" value={ this.state.zsr }
                     placeholder="Enter a Vorname..." onChange={ this.handleNameChange }/>
            </Col>
            <Col md={3}>
              <input className="form-control" name="nachname" type="text" value={ this.state.zsr }
                     placeholder="Enter a Nachname..." onChange={ this.handleNameChange }/>
            </Col>
            <Col md={3}>
              <input className="form-control" name="geburtsdatum" type="text" value={ this.state.zsr }
                     placeholder="Enter a geburtsdatum..." onChange={ this.handleNameChange }/>
            </Col>
            <Col md={3}>
              <input className="form-control" name="geschlecht" type="text" value={ this.state.zsr }
                     placeholder="Enter a Geschlecht..." onChange={ this.handleNameChange }/>
            </Col>
            <Col md={3}>
              <input className="form-control" name="adresse" type="text" value={ this.state.zsr }
                     placeholder="Enter a Adresse..." onChange={ this.handleNameChange }/>
            </Col>
            <h4>Medikament</h4>
            <Col md={3}>
              <input className="form-control" name="name" type="text" value={ this.state.zsr }
                     placeholder="Enter a Name..." onChange={ this.handleNameChange }/>
            </Col>
            <Col md={3}>
              <select className="form-control" name="form" value={this.state.make.id} onChange={this.handleMakeChange}>
                {this.props.makes.map(renderSelectList)}
              </select>
            </Col>
            <Col md={3}>
              <label>
                Anzahl:
                <input className="form-control" name="zsr" type="number" value={ this.state.zsr }
                       defaultValue={"1"} onChange={ this.handleNameChange }/>
              </label>
            </Col>
            <Col md={3}>
              <label>
                Einheit:
                <select className="form-control" name="einheit" value={this.state.make.id} onChange={this.handleMakeChange}>
                  {this.props.makes.map(renderSelectList)}
                </select>
              </label>

            </Col>
            <Col md={3}>
              <label>
                Art der Medikation
              </label>
              <select className="form-control" name="einheit" value={this.state.make.id} onChange={this.handleMakeChange}>
                {this.props.makes.map(renderSelectList)}
              </select>
            </Col>
            <Col md={3}>
              <label>GültigkeitVon:
                <input className="form-control" name="zsr" type="date" value={ this.state.zsr }
                                           onChange={ this.handleNameChange }/>
              </label>
              <label>Bis:
                <input className="form-control" name="zsr" type="date" value={ this.state.zsr }
                       onChange={ this.handleNameChange }/>
              </label>
            </Col>
            <Col md={3}>
              <input className="form-control" name="zsr" type="text" value={ this.state.zsr }
                     placeholder="Enter a Hinweiss..." onChange={ this.handleNameChange }/>
            </Col>

            <h5 >Anwendung</h5>

            <Col md={3}>
              <label>
                Morgen
                <input className="form-control" name="morgen" type="number" value={ this.state.zsr }
                       defaultValue={"0"} onChange={ this.handleNameChange }/>
              </label>
            </Col>
            <Col md={3}>
              <label>
                Mittag
                <input className="form-control" name="mittag" type="number" value={ this.state.zsr }
                       defaultValue={"0"} onChange={ this.handleNameChange }/>
              </label>
            </Col>
            <Col md={3}>
              <label>
                Abend
                <input className="form-control" name="abend" type="number" value={ this.state.zsr }
                       defaultValue={"0"} onChange={ this.handleNameChange }/>
              </label>
            </Col>
            <Col md={3}>
              <label>
                Zur Nacht
                <input className="form-control" name="zur-nacht" type="number" value={ this.state.zsr }
                       defaultValue={"0"} onChange={ this.handleNameChange }/>
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
