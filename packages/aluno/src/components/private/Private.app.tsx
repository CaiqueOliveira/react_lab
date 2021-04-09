import { useContext, useEffect, useState } from "react";
import { QueryStudentsUsecase } from '../../usecases/query-students.usecase';
import { IAsyncData, initialAsyncData } from '../../shared/utils/async-data.util';
import { IStudent } from '../../gateways/student/quert-stydents.type';
import { Loading } from '../../shared/components/Loading.component';
import { IUser, UserContext } from '../../shared/domains/user.domain';

export const PrivateApp = () => {
  const [alunos, setAlunos] = useState(initialAsyncData as IAsyncData<IStudent[]>);
  const user: IUser = useContext(UserContext);
  
  useEffect(() => {
    QueryStudentsUsecase(user).then(result => setAlunos(result));
  }, []);

  if (alunos.pending) {
    return (
      <Loading></Loading>
    )
  }

  return (
    <div>
      {
        alunos.data && alunos.data.map((aluno, index) => <p key={index}>{aluno.name}</p>)
      }
    </div>
  )
}