const calculateBill = (people, totalBill, extraTip) => {
  return (parseFloat(totalBill) + parseFloat(extraTip))/parseFloat(people)
}

export default calculateBill;
