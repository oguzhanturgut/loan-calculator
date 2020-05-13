import Consts from '../constants/Consts';

export default (vehiclePrice, deposit, term) => {
  const monthsInYear = 12;
  const monthlyInterest = Consts.interest / monthsInYear;
  const creditAmount = vehiclePrice - deposit;
  const months = term * monthsInYear;
  const creditPayback = parseFloat(
    creditAmount + (creditAmount * monthlyInterest * months) / 100,
  );
  const monthlyPayment = parseFloat(creditPayback / monthsInYear);
  const totalAmountPayable = parseFloat(creditPayback + deposit);
  return {monthlyPayment, totalAmountPayable};
};
