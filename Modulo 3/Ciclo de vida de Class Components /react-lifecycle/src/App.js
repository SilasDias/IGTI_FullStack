import React, { Component } from 'react';
import Users from './components/users/Users';
import Toggle from './components/toggle/Toggle';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      showUsers: false,
    };
  }

  async componentDidMount() {
    const res = await fetch(
      'https://randomuser.me/api/?seed=rush&nat=br&results=10'
    );
    const json = await res.json();

    this.setState({
      users: json.results,
    });
  }

  handleShowUsers = (isChecked) => {
    //target pega o evento imput e checked true ou false no consolelog
    // pega o true e o false do evento
    this.setState({ showUsers: isChecked });
  };

  render() {
    const { showUsers, users } = this.state;

    return (
      <div>
        <h3>React LifeCycle</h3>
        {/* Ativando a tela on com usuarios */}
        <Toggle
          description="Mostrar Usuarios:"
          enabled={showUsers}
          onToggle={this.handleShowUsers}
        />
        <hr />
        {/* Faz mostrar Users quando on no html */}
        {showUsers && <Users users={users} />}
      </div>
    );
  }
}
