import React, { Component } from "react";
import "./authorization.sass";
import { Auth } from "../../test";
import {Redirect} from 'react-router-dom';

class Authorization extends Component {
  state = {
    name: "",
    password: "",
    redirectToRoute: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, password } = this.state;

    if (name === Auth.login && password === Auth.password) {
      this.setState(state => ({
        ...state,
        redirectToRoute: true
      }));
    }
  };

  handleChange = e => {
    let inputValue = e.currentTarget.value;
    let fieldName = e.currentTarget.name;
    this.setState(state => ({
      ...state,
      [fieldName]: inputValue
    }));
  };

  render() {
    const { redirectToRoute } = this.state;

    if (redirectToRoute) {
      return <Redirect to={'/loading'} />
    }
    
    return (
      <div className="authorization">
        <h2 className="authorization__title">Авторизуйтесь на сайте</h2>
        <form onSubmit={this.handleSubmit} className="authorization__form">
          <input
            type={"text"}
            placeholder={"Введите ваше имя"}
            onChange={this.handleChange}
            name={"name"}
          />
          <input
            type={"password"}
            placeholder={"Введите ваш пароль"}
            onChange={this.handleChange}
            name={"password"}
            required
          />
          <button className="authorization__button" type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

export default Authorization;
