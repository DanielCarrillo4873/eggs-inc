import { Component } from 'react';
import axios from '../axios.js';
import { Table, Button, Modal, Form, Input } from 'semantic-ui-react';

export default class Clients extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clients: null,
      dataLoaded: false,
      showModal: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/clients');
      this.setState({
        clients: res.data,
        dataLoaded: true,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <>
        <h1>Clients</h1>
        <Button color="green" content="Add" icon="add circle" onClick={ this.toggleModal }/>
        <Table>
          <Table.Header>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Lastname</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Birthdate</Table.HeaderCell>
          </Table.Header>
          <Table.Body>
            { this.state.dataLoaded && this.state.clients.map(
              item => (
                <Table.Row>
                  <Table.Cell>{ item.client_id }</Table.Cell>
                  <Table.Cell>{ item.name }</Table.Cell>
                  <Table.Cell>{ item.lastname }</Table.Cell>
                  <Table.Cell>{ item.address }</Table.Cell>
                  <Table.Cell>{ item.email }</Table.Cell>
                  <Table.Cell>{ item.phone }</Table.Cell>
                  <Table.Cell>{ new Date(item.birthdate).toLocaleDateString() }</Table.Cell>
                </Table.Row>
              ),
            ) }
          </Table.Body>
        </Table>
        <Modal open={ this.state.showModal } onClose={ this.toggleModal } size="small">
          <Modal.Header>
            <h1>Add a client</h1>
          </Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field
                id="name"
                control={ Input }
                label="Name"
                placeholder="Name"
                required
              />
              <Form.Field
                id="lastname"
                control={ Input }
                label="Lastname"
                placeholder="Lastname"
                required
              />
              <Form.Field
                id="address"
                control={ Input }
                label="Address"
                placeholder="Address"
                required
              />
              <Form.Field
                id="email"
                control={ Input }
                label="Email"
                placeholder="Email"
                required
              />
              <Form.Field
                id="phone"
                control={ Input }
                label="Phone"
                placeholder="Phone"
                required
              />
              <Form.Field
                id="birthdate"
                control={ Input }
                label="Birthdate"
                placeholder="Birthdate"
                type="date"
                required
              />
              <Button color="green" content="Add" type="submit"/>
              <Button color="red" content="Cancel" onClick={ this.toggleModal }/>
            </Form>
          </Modal.Content>
        </Modal>
      </>
    );
  }
}
