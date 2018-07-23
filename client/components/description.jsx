import React from 'react';
import axios from 'axios';

const descriptionStyle = {
  float: 'left',
  width: '80%',
  height: '50%',
  borderStyle: 'solid',
  borderWidth: '2px',
  textAlign: 'left',
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
        this.setState({ deal: response.data[0] });
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

        <div className="descrip">
          <h3>What You'll Get</h3>
          <hr></hr>
          <div>
            {this.state.deal.descrip}
          </div>
        </div>
        <br />

        <div className="addl-info">
          <h3>Additional Information</h3>
          <div>
            {this.state.deal.addl_info}
          </div>
        </div>
        <br />

        <div className="inclusions">
          <h4>Inclusions</h4>
          <ul>
            <li>
              {this.state.deal.inclusions}
            </li>
          </ul>
        </div>
        <br />

        <div className="exclusions">
          <h4>Exclusions</h4>
          <ul>
            <li>
              {this.state.deal.exclusions}
            </li>
          </ul>
        </div>
        <br />

        <div className="fine_print">
          <h3>The Fine Print</h3>
          <hr></hr>
          <div>
            {this.state.deal.fine_print}
          </div>
        </div>
        <br />

        <div className="about">
          <h3>About {this.state.deal.merch_name}</h3>
          <hr></hr>
          <h5>
            {this.state.deal.merch_name}
            <br />
            <a href={`https://www.google.com/search?q=${this.state.deal.merch_name} `}>Company Website</a>
          </h5>

        </div>
        <br />

        <span>
          <em>{this.state.deal.merchant}</em>
        </span>
        <br />
        <span>{this.state.addl_info}</span>

        <br />
        <span>{this.state.deal.addl_info}</span>
      </div>
    );
  }
}
