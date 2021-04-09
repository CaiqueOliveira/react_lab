import axios from "axios";
import { IStudent, IStudentsGatewayParams } from './quert-stydents.type';

export const QueryAllStudents = (params: IStudentsGatewayParams): Promise<IStudent[]> => axios
  .get<IStudent[]>(`${params.apiBaseUrl}/students`, {
    headers: {
      authentication: `Bearer ${params.token}`
    }
  }).then(response => response.data);
