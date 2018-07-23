import React from 'react';
import axios from 'axios';

const descriptionStyle = {
  float: 'left',
  width: '80%',
  height: '50%',
  borderStyle: 'solid',
  borderWidth: '2px',
  textAlign: 'center',
};

export default class Description extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deal_id: '',
      deal: {
        id: '1',
        merchant: 'River Otter Tours',
        location: 'Portland, ME',
        descrip: 'Kayaking Tour of the Charles River',
        addl_info:
          'Subject to favorable weather conditions. If canceled due to poor weather, you will be given the option of an alternative date or full refund',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ deal_id: event.target.value });
  }

  handleSubmit(e) {
    console.log(`Deal number ${this.state.deal_id} submitted.`);
    this.getDescripInfo(this.state.deal_id);
    e.preventDefault();
    e.target.reset();
  }

  getDescripInfo(deal_id) {
    axios.get(`/deal/${deal_id}/description`, {
      params: {
        ID: deal_id,
      }
    })
      .then((response) => {
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getDescripInfo(9);
  }

  render() {
    return (
      <div style={descriptionStyle}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Choose a deal:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />

        </form>

        <p>
          <strong>{this.state.deal.descrip}</strong>
          <br />
          <span>
            <em>{this.state.deal.merchant}</em>
          </span>
          <br />
          <span>{this.state.addl_info}</span>

          <br />
          <span>{this.state.deal.addl_info}</span>
        </p>
      </div>
    );
  }
}
