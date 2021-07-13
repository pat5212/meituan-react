import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Discount extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="discount">
        <a className="discount__header">
          <span className="discount__title">超值特惠</span>
          <span className="discount__more">更多优惠</span>
          <span className="discount__arrow" />
        </a>
        <div className="discount__content">
          {data.map((item, index) => {
            return (
              <Link
                key={item.id}
                to={`/detail/${item.id}`}
                className="discount__item"
              >
                <img alt="" className="discount__itemPic" src={item.picture} />
                <div className="discount__itemTitle"> {item.shop} </div>
                <div className="discount__itemPriceWrapper"> 
                  <div className="discount__itemCurrentPrice"> {item.currentPrice} </div>
                  <div className="discount__itemOldPrice"> {item.oldPrice} </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Discount;
