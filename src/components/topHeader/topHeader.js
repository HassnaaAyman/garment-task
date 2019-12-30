import React from 'react';
import './topHeader.css'
import { Layout } from 'element-react';
import MainDropDownSelect from '../../containers/mainDropDownSelect/mainDropDownSelect';

const TopHeader = () => {

  let img = require("../../assets/icon_yellow.svg")
  return(
    <Layout.Row>
      <div  className="TopHeader">
        <i className="far fa-bell fa-2x"></i>
        <MainDropDownSelect/>
        <img alt="" src={img} />
      </div>
    </Layout.Row>
  );
};

export default TopHeader;
