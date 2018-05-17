// @flow
import React from 'react';
import { get } from 'lodash';
import type { Address } from 'modules/definitions';
export function toMoneyFormat (n: number, d?: string): string {
  return n ? `$${n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}` : (d || '');
}

export function toAddressString (address: Address): string {
  return (
    `${get(address, 'street', '')}, ${get(address, 'city', '')}
    ${get(address, 'state', '')}, ${get(address, 'zip', '')}`
  );
}

export function toPhoneString (s: string): string {
  /* from http://stackoverflow.com/questions/8358084/regular-expression-to-reformat-a-us-phone-number-in-javascript */
  var s2 = (""+s).replace(/\D/g, '');
  var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
  // $FlowIgnore
  return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
}

export const statusColor = (status: string) => {
  switch (status) {
    case 'alert':
    case 'Maintenance Required':
    case 'Compliance Error':
    case 'rejected':
    case 'retired':
    case 'error': return '#D0021B';
    case 'attention required':
    case 'pending':
    case 'retired':
    case 'maintenance required': return '#F5A623';

    default: return '#417505';
  }
};

export const transactionValue = (value: number) => {
  if (value > 0) {
    return `${value.toLocaleString()}`
  } else if (value < 0) {
    return `(${Math.abs(value).toLocaleString()})`
  }
}
