import React from "react";
import moment from "moment";
import momentRecur from "moment-recur";
import { getDefaultNormalizer } from "@testing-library/react";

const Tanggal = (props) => {
  let index = props.index;
  let y = moment().endOf("month");
  let interval = moment(y).recur().every(["sun"]).daysOfWeek();
  let x = interval.next(4, "YYYY-MM-DD");
  let conv = x[index];
  // console.log(conv);
  return conv;
};
// function Tool(props) {
//   const name = props.name;
//   const tool = props.tool;
//   return (
//     <div>
//       <h1>My name is {name}.</h1>
//       <p>My favorite design tool is {tool}.</p>
//     </div>
//   );
// }

export default Tanggal;
