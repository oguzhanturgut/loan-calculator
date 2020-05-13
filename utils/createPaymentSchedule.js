import calculateMonthlyPayment from './calculateMonthlyPayment';
import Consts from '../constants/Consts';
import moment from 'moment';

export default (vehiclePrice, deposit, deliveryDate, term) => {
  const totalAmountPayable = calculateMonthlyPayment(
    vehiclePrice,
    deposit,
    term,
  ).totalAmountPayable;
  const monthlyPayment = calculateMonthlyPayment(vehiclePrice, deposit, term)
    .monthlyPayment;
  const termMonths = term * 12;
  const result = {
    vehiclePrice: vehiclePrice,
    deposit: deposit,
    deliveryDate: moment(deliveryDate).format('DD/MM/YYYY'),
    termMonths,
    totalAmountPayable: totalAmountPayable.toFixed(2),
    monthlyPayment: monthlyPayment.toFixed(2),
    arrangementFee: Consts.arrangementFee,
    completionFee: Consts.completionFee,
    schedule: [],
  };
  // first payment
  result.schedule.push({
    dueDate: moment(deliveryDate)
      .add(1, 'M')
      .startOf('month')
      .format('DD/MM/YYYY'),
    amount:
      Consts.currency + (monthlyPayment + Consts.arrangementFee).toFixed(2),
  });

  for (let i = 1; i < termMonths - 1; i++) {
    result.schedule.push({
      dueDate: moment(deliveryDate)
        .add(i + 1, 'M')
        .startOf('month')
        .format('DD/MM/YYYY'),
      amount: Consts.currency + monthlyPayment.toFixed(2),
    });
  }
  // last payment
  result.schedule.push({
    dueDate: moment(deliveryDate)
      .add(termMonths, 'M')
      .startOf('month')
      .format('DD/MM/YYYY'),
    amount:
      Consts.currency + (monthlyPayment + Consts.completionFee).toFixed(2),
  });

  return result;
};
