const calculateBill = (state) => {
  const { people, totalBill, extraTip } = state;

  return (parseFloat(totalBill) + parseFloat(extraTip))/parseFloat(people)
}

export default calculateBill;
