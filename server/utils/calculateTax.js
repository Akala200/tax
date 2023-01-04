const taxCalc = {
  // tax function
  tax: (income, percentage) => {
    const tax = income * percentage / 100;
    return tax;
  },
};

export default taxCalc;
