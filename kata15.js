const organizeInstructors = function(instructors) {
  // Put your solution here\
  let course_list = {Web:[],iOS:[],Blockchain:[]}
  for(let instructor of instructors){
    if(instructor.course === "iOS"){
      course_list.iOS.push(instructor.name)
    }else if(instructor.course === "Web"){
      course_list.Web.push(instructor.name)
  }else if(instructor.course === "Blockchain"){
    course_list.Blockchain.push(instructor.name)
  }
}
if(course_list.Blockchain.length === 0){
  delete course_list.Blockchain
}
if(course_list.iOS.length === 0){
  delete course_list.iOS
}
if(course_list.Web.length === 0){
  delete course_list.Web
}
return course_list
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

//expected output
// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }