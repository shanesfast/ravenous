import React from "react";
import CSS from "./BusinessList.css";
import Business from "../Business/Business.js";

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map( (joints) =>
            { return <Business key={ joints.id } business={ joints } /> } ) 
        }
      </div>
    );
  }
}

export default BusinessList;
