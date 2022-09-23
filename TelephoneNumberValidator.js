"use strict";

function telephoneCheck(str) {
  const countryCodeFormat = /^1\s?/;
  const USPhoneFormats = [
    /^\d{3}-\d{3}-\d{4}$/g,
    /^\(\d{3}\)\d{3}-\d{4}$/g,
    /^\(\d{3}\)\s\d{3}-\d{4}$/g,
    /^\d{3}\s\d{3}\s\d{4}$/g,
    /^\d{10}$/g,
    /^\d{3}\s\d{3}\s\d{4}$/g
  ];
  const phoneNumber = str.replace(countryCodeFormat, "");
  const results = USPhoneFormats.filter(format => format.test(phoneNumber));
  return results.length > 0;
}

console.log(telephoneCheck("555-555-5555"));