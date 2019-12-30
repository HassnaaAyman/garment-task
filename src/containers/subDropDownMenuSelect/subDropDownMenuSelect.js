import React, { Component } from 'react';
import { Layout } from 'element-react';

class SubDropDownMenuSelect extends Component {
  constructor(props){
    super(props);
    this.state={
          lines:[
         {id:"1" , name:"ينطلون حريمى قطيفة -3434"},
         {id:"2" , name:" قميص ؤجالى بولو- 8ق83"},
         {id:"3" , name:" اى حاجة - 84594ن"},
         {id:"4" , name:"ببيليسيبر-33بث3"},
         {id:"5" , name:" بلوزة كشمير -3322ب"},
         {id:"6" , name:"بلوزة كم - 3432"},
         {id:"6" , name:"فستان - 32424"},
         {id:"7" , name:"جيبة - 3ث23قبث"}
          ]
  }
}

renderSelectOptions =()=>{
  let {lines} = this.state;
   console.log(lines);
   let arr = [];
    arr.push(<option>التوزيعات</option>)
  for (var i in lines) {
    arr.push(<option key={i}>{lines[i].name}</option>)
  }
  return arr;
  }

  
  render() {
    return(
      <Layout.Row className="SubDropDownMenuSelect">
      <select>
         {this.renderSelectOptions()}
      </select>
      </Layout.Row>
    );
  }
}

export default SubDropDownMenuSelect;
