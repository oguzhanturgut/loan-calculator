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
    vehiclePrice,
    deposit,
    deliveryDate: moment(deliveryDate).format('DD/MM/yyyy'),
    termMonths,
    totalAmountPayable,
    monthlyPayment,
    arrangementFee: Consts.arrangementFee,
    completionFee: Consts.completionFee,
    schedule: [],
  };
  // first payment
  result.schedule.push({
    dueDate: moment(deliveryDate)
      .endOf('month')
      .add(1, 'D')
      .format('DD/MM/yyy'),
    amount: monthlyPayment + Consts.arrangementFee,
  });

  for (let i = 1; i < termMonths - 1; i++) {
    result.schedule.push({
      dueDate: moment(deliveryDate)
        .add(i, 'M')
        .endOf('month')
        .add(1, 'D')
        .format('DD/MM/yyy'),
      amount: monthlyPayment,
    });
  }
  // last payment
  result.schedule.push({
    dueDate: moment(deliveryDate)
      .add(termMonths, 'M')
      .endOf('month')
      .add(1, 'D')
      .format('DD/MM/yyy'),
    amount: monthlyPayment + Consts.arrangementFee,
  });

  return result;
};
