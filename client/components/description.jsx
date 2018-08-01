import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DescriptionWrapper = styled.div`
  float: left;
  width: 620px;
  height: 50%;
  border-style: solid;
  border-width: 2px;
  text-align: left;
  padding: 10px;
  color: #75787b;
  font-family: OpenSans,Helvetica Neue,Helvetica,Tahoma,Arial,FreeSans,sans-serif;
  font-size: 14px;
  font-eight: 400;
  line-height: 1.5;
`;

const DescriptionSubcomponentHeader = styled.h3`
  color: #333;
`;

const Icon = styled.img`
  float: left;
  border-style: solid;
  border: 1px solid DarkGrey;
  padding: 7px;
`;

const Pin = styled.img`
  float: left;
  padding-top: 10px;
`;

// merchant information
const MerchantInformationHeader = styled.h3`
  color: black;
  margin-top: 0;
  margin-bottom: 7px;
`;
const MerchantInformation = styled.div`
  float: left;
  padding-left: 10px;
`;

// merchant location information (below map element)
const MerchantLocationHeader = styled.div`
  float: left;
  font-weight: bold;
  color: dimGrey;
  margin: 10px;
`;
const MerchantLocationInformation = styled.div`
  font-weight: normal;
  font-size: 14px;
`;


export default class Description extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deal_id: '',
      deal: {
        id: '0',
        merch_name: 'River Otter Tours',
        city: 'Portland',
        state_abbr: 'ME',
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
    axios.get(`http://localhost:3002/deal/${deal_id}/description`, {
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
    this.getDescripInfo(3);
  }

  render() {
    let ExclusionsComponent;

    if (this.state.deal.exclusions) {
      ExclusionsComponent = (
        <div className="exclusions">
          <h4>Exclusions</h4>
          <ul>
            <li>
              {this.state.deal.exclusions}
            </li>
          </ul>
        </div>
      )
    }

    return (
      <DescriptionWrapper>
        <form onSubmit={this.handleSubmit}>
          <label>
            Choose a deal:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input className='submitButton' type="submit" value="Submit" />

        </form>

        <div className="descrip">
          <DescriptionSubcomponentHeader>What You'll Get</DescriptionSubcomponentHeader>
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

        {ExclusionsComponent}
        <br />


        <div className="fine_print">
          <DescriptionSubcomponentHeader>The Fine Print</DescriptionSubcomponentHeader>
          <hr></hr>
          <div>
            {this.state.deal.fine_print}
          </div>
        </div>
        <br />

        <div className="about">
          <DescriptionSubcomponentHeader>About {this.state.deal.merch_name}</DescriptionSubcomponentHeader>
          <hr></hr>
          <h5>
            {this.state.deal.merch_name}
            <br />
            <a href={`https://www.google.com/search?q=${this.state.deal.merch_name} `}>Company Website</a>
          </h5>
        </div>

        <Icon src="./images/store_icon.png" alt="Store Icon" />

        <MerchantInformation>
          <MerchantInformationHeader>{this.state.deal.merch_name}</MerchantInformationHeader>
          {this.state.deal.ttd}
        </MerchantInformation>
        <br />

        <Pin src="./images/mapPlaceholder.png" alt="Map Image" />
        <br />

        <MerchantInformation>
          <Pin src="/images/pin1.png" alt="Map Pin" />
          <MerchantLocationHeader>{this.state.deal.merch_name}
            <br />
            <MerchantLocationInformation>
              {this.state.deal.addr_ln1}, {this.state.deal.addr_ln2 ? `${this.state.deal.addr_ln2},` : ''} {this.state.deal.city}, {this.state.deal.state_abbr} {this.state.deal.zip}
            </MerchantLocationInformation>
          </MerchantLocationHeader>
        </MerchantInformation>
      </DescriptionWrapper>
    );
  }
}
