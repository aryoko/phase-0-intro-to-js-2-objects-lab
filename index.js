// Write your solution in this file!
const employee = {
  name: "Billy Bragg",
  streetAddress: "1064 Weymouth Rd",
};

function updateEmployeeWithKeyAndValue(obj, key, value){
  const newEmployee = {...obj};
  newEmployee[key] = value;
  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(obj, key) {
  const newObj = {...obj}
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];
  return obj;
}