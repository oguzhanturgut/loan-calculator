import Consts from '../constants/Consts';

export default (vehiclePrice, deposit, term, interest = Consts.interest) => {
  const monthsInYear = 12;
  const monthlyInterest = (interest / monthsInYear).toFixed(2);
  const creditAmount = vehiclePrice - deposit;
  const months = term * monthsInYear;
  const monthlyPayment =
    creditAmount + (creditAmount * monthlyInterest * months) / 100;
  return monthlyPayment;
};
