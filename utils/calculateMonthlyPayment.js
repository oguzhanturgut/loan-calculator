import Consts from '../constants/Consts';

export default (vehiclePrice, deposit, term) => {
  const monthsInYear = 12;
  const monthlyInterest = (Consts.interest / monthsInYear).toFixed(2);
  const creditAmount = vehiclePrice - deposit;
  const months = term * monthsInYear;
  const creditPayback =
    creditAmount + (creditAmount * monthlyInterest * months) / 100;
  const monthlyPayment = creditPayback / monthsInYear;
  const totalAmountPayable = creditPayback + deposit;
  return {monthlyPayment, totalAmountPayable};
};
