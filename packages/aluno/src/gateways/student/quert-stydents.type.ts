export type StudentType = "STUDENT";

export interface IStudent {
  id: string,
  name: string,
  type: StudentType,
  campus: string
}

export interface IStudentsGatewayParams {
  apiBaseUrl: string,
  token: string
}