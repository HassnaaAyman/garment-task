import React, { Component } from 'react';
import TopHeader from '../../components/topHeader/topHeader';
import SubDropDownMenuSelect from '../subDropDownMenuSelect/subDropDownMenuSelect';
import CardProductionLineDetailsList from '../cardProductionLineDetailsList/cardProductionLineDetailsList';

class SuprvisorPage extends Component {
  render() {
    return(
      <>
       <TopHeader/>
       <SubDropDownMenuSelect/>
       <CardProductionLineDetailsList/>
       </>
    );
  }
}

export default SuprvisorPage;
