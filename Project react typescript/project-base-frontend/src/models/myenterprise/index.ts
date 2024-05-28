export interface MyEnterprise {
  uuid: string
  name: string
  nit: string
  cellphone: string
  status?: string | boolean
  neighborhood: string
  address: string
  municipality?: Municipality
	nameDepartment?: string;
	nameMunicipality?: string
}

export interface Municipality {
  uuid: string
  name: string
  department: Department
}

export interface Department {
  uuid: string
  name: string
}

