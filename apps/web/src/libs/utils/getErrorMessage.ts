import { isAxiosError } from 'axios';

const getErrorMessage = (error: unknown) => {
  if (isAxiosError(error)) {
    return error.message;
  }
  return error;
};

export default getErrorMessage;
