import React, { Component } from 'react';
import './mainDropDownSelect.css'


class MainDropDownSelect extends Component {
  constructor(props){
    super(props);
    this.state={
          lines:[
         {id:"1" , name:"خط انتاج 1 - قسم 1"},
         {id:"2" , name:"2خط انتاج 1 - قسم "},
         {id:"3" , name:"خط انتاج 1 - قسم 3"},
         {id:"4" , name:"خط انتاج 1 - قسم 4"},
         {id:"5" , name:"خط انتاج 2 - قسم 1"},
         {id:"6" , name:"خط انتاج 3 - قسم 2"},
         {id:"6" , name:"خط انتاج 4 - قسم 1"},
         {id:"7" , name:"خط انتاج 5 - قسم 1"}
          ]
  }
}

renderSelectOptions =()=>{
let {lines} = this.state;
 console.log(lines);
 let arr = [];
  arr.push(<option>خطوط الانتاج</option>)
for (var i in lines) {
  arr.push(<option key={i}>{lines[i].name}</option>)
}
return arr;
}

  render() {
    return(
      <div className="MainDropDownSelect">
      <select>
         {this.renderSelectOptions()}
      </select>
      </div>
    );
  }
}

export default MainDropDownSelect;
