export interface CreatePayment {
  payment_method: string;
  initial_date: string;
  final_date: string;
  total: string | null;
  planEnterprisePriceUuid: string;
  is_debt: boolean;
  uuid?: string;
  discount: string;
  enterpriseUuid?: string;
  status?: boolean | string;
}