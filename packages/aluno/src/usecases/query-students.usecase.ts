import { IStudent } from "../gateways/student/quert-stydents.type";
import { QueryAllStudents } from "../gateways/student/query-students.gateway"
import { IAsyncData } from "../shared/utils/async-data.util";
import { IUser } from '../shared/domains/user.domain';

export const QueryStudentsUsecase = (user: IUser): Promise<IAsyncData<IStudent[]>> => new Promise((resolve, reject) => {
  const apiBaseUrl = 'http://localhost:3010';
  const token = user.token ? user.token.toString() : '';

  QueryAllStudents({ apiBaseUrl, token })
    .then((result: IStudent[]) => {
      resolve({ pending: false, data: result, error: null })
    })
    .catch((error) => {
      resolve({ pending: false, data: null, error: error })
    });
  });