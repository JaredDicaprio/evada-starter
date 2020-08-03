import React, {Component} from "react";

import Auxiliary from "../../../util/Auxiliary";
import {connect} from 'react-redux';
import {onGetSticky} from "../../../appRedux/actions/Notes";


class Notes extends Component {

  componentWillMount() {
    this.props.onGetSticky();
  }

  onChange = (notes) => {
    console.log("notes: ", notes)
  };

  render() {
    const {notesList} = this.props;
    return (
      <Auxiliary>
        
      </Auxiliary>
    );
  }
}

function mapStateToProps({notes}) {
  const {notesList} = notes;
  return {notesList};
}

export default connect(mapStateToProps, {onGetSticky})(Notes);



