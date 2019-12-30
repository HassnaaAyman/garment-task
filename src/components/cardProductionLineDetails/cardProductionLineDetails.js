import React from 'react';
import './cardProductionLineDetails.css';
import {Progress} from 'element-react';
import 'element-theme-default';



const CardProductionLineDetails = (props) => {
  return(
     <div className="CardProductionLineDetails">
        <h5>{props.stageName}</h5>
        <div className="CardProductionLineDetails-machineSection">
          <Progress type="circle" percentage={props.percentage} status={props.status} />
          <div className="CardProductionLineDetails-machineDetails">
            <h6>{props.employeeName}- </h6>
            <h6>{props.machineNumber}</h6>
          </div>
          <h6>{props.machineName}</h6>
        </div>
        <div>
        <Progress strokeWidth={18} percentage={props.percentage} status={props.status} textInside />
        </div>
     </div>
  );
};

export default CardProductionLineDetails;
