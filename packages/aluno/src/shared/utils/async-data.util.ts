export interface IAsyncData<T, E = any> {
  pending: boolean;
  data: T | null;
  error: E | null;
}

export const initialAsyncData: IAsyncData<any, any> = {
  pending: true,
  data: null,
  error: null
}