import React, { Component } from 'react';
import CardProductionLineDetails from '../../components/cardProductionLineDetails/cardProductionLineDetails';

class CardProductionLineDetailsList extends Component {
  constructor(props){
    super(props);
    this.state={
      stageDetailes:[
        {id:"1" , stageName:"تركيب التيكت الخاص" , machineName:"اوفر 5 ف" , machineNumber:"300" , employeeName:"نجاح فوزي" ,percentage:"0" },
        {id:"1" , stageName:"تركيب التيكت  الخاص بالمقاس والماركة فى الضهر" , machineName:"اوفر 5 ف - اورليه شريط" , machineNumber:"5000" , employeeName:"نجاح فوزي" , percentage:"50" , status:"exception" },
        {id:"1" , stageName:"تركيب التيكت  الخاص بالمقاس والماركة فى الضهر" , machineName:"اوفر 5 ف - اورليه شريط" , machineNumber:"5001" , employeeName:"نجاح فوزي" , percentage:"70" , circleStatus:""},
        {id:"1" , stageName:"تركيب التيكت  الخاص بالمقاس والماركة فى الضهر" , machineName:"اوفر 5 ف - اورليه شريط" , machineNumber:"3002" , employeeName:"نجاح فوزي", percentage:"100" , status:"success"} 
    ]
    }
  }
  render() {
    const cards = this.state.stageDetailes.map((card , index)=>(
      <CardProductionLineDetails
      key={index}
      stageName={card.stageName}
      machineName={card.machineName}
      machineNumber={card.machineNumber}
      employeeName={card.employeeName}
      percentage={card.percentage}
      status={card.status}
      />
    ));
    return(
      <div>{cards}</div>
    );
  }
}

export default CardProductionLineDetailsList;
