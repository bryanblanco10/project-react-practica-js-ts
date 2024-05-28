export interface CreateEmployee {
  names: string
  last_names: string
  gender: string
  email: string
  profileUuid: string
  type_identification: string
  identification: string
  cellphone: string
  address?: string
  uuid?: string
  userUuid?: string
  username?: string
  enterpriseUuid?: string
  status?: boolean | string
  user?: {
    username: string;
  }
  photo?: string
  phone?: string
}