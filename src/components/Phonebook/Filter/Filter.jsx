import { Component } from 'react';

export class Filter extends Component {
  state = {
    filter: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    this.props.setFilterValue(value);
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <label htmlFor="">
          filter
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={this.handleChange}
          />
        </label>
      </>
    );
  }
}
