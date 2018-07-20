import React from "react";

const descriptionStyle = {
  float: "left",
  width: "50%",
  height: "50%",
  borderStyle: "solid",
  borderWidth: "2px",
  textAlign: "center"
};

export default class Description extends React.Component {
  constructor() {
    super();

    this.state = {
      deal: {
        id: "1",
        merchant: "River Otter Tours",
        location: "Portland, ME",
        descrip: "Kayaking Tour of the Charles River",
        addl_info:
          "Subject to favorable weather conditions. If canceled due to poor weather, you will be given the option of an alternative date or full refund"
      }
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let newBid = this.state.currentBid + 1;
    let item = Object.assign({}, this.state.item);
    item.price = newBid;
    this.setState({
      currentBid: newBid,
      deal: deal
    });
  }

  render() {
    return (
      <div style={descriptionStyle}>
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
