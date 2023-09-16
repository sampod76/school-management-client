import React from "react";

const BirthdateToAge = (date) => {
  // 1. Get the birthdate from the user or from a variable
  const birthdate = new Date(date); // Replace with the actual birthdate

  // 2. Get the current date
  const currentDate = new Date();

  // 3. Calculate the age
  let age = currentDate.getFullYear() - birthdate.getFullYear();

  // 4. Check if the birthday has already occurred this year
  // If the birthdate has not occurred yet this year, subtract 1 from the age
  if (
    currentDate.getMonth() < birthdate.getMonth() ||
    (currentDate.getMonth() === birthdate.getMonth() &&
      currentDate.getDate() < birthdate.getDate())
  ) {
    age--;
  }
  return age;
};

export default BirthdateToAge;
