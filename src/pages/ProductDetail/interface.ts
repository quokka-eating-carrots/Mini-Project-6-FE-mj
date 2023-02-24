export interface EtcTypes {
  contact: string;
  earlyRedemptionFee: string;
  etcNode: string;
  homepage: string;
  joinMethod: string;
  primeCondition: string;
  provider: string;
  userOffice: string;
  divisionOffice: string;
}

export interface LoanTypes {
  baseRate: string;
  gracePeriod: string;
  loanLimit: string;
  loanName: string;
  overdueRate: string;
  rate: string;
  repayMethod: string;
  repayPeriod: string;
  usge: string;
  wholePeriod: string;
}

export interface TargetTypes {
  age: string;
  area: string;
  creditScore: string;
  income: string;
  loanDescription: string;
  loanTarget: string;
}

export interface IProductDetail {
  etc: EtcTypes;
  loan: LoanTypes;
  target: TargetTypes;
}
