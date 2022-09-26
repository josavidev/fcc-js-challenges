"use strict";

function checkCashRegister(price, cash, cid) {
  const currencies = {
    PENNY: 0.01, NICKEL: 0.05, DIME: 0.1,
    QUARTER: 0.25, ONE: 1, FIVE: 5,
    TEN: 10, TWENTY: 20, "ONE HUNDRED": 100
  };
  cid.reverse();
  const capitalTotal = cid.reduce((prev, currency) => {
    return prev + currency[1];
  }, 0);
  let due = cash - price;
  if (due > capitalTotal) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  if (due === capitalTotal) {
    cid.reverse();
    return { status: "CLOSED", change: cid };
  }
  let change = [];
  for (let i = 0; i < cid.length && due > 0; i++) {
    const quotient = Math.floor(due / currencies[cid[i][0]]);
    if (quotient < 1) { continue; }
    const diff = (cid[i][1] - due).toFixed(2);
    if (diff === 0) {
      change.push(cid[i]);
      due = 0;
      continue;
    }
    if (diff > 0) {
      const currencyChange = quotient * currencies[cid[i][0]];
      change.push([cid[i][0], currencyChange]);
      due = (due - currencyChange).toFixed(2);
      continue;
    }
    change.push(cid[i]);
    due = (due - cid[i][1]).toFixed(2);
  }
  if (due > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change };
}

console.log(checkCashRegister(3.26, 100,
  [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
  ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20],
  ["TWENTY", 60], ["ONE HUNDRED", 100]]));