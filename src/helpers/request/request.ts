import ky, { Options } from "ky";
import { RequestType } from "./types";

const joinOptions = (options: (Options | undefined)[]): Options => {
  const newOptions = Object.assign({}, ...options) as Options;
  return {
    ...newOptions,
  };
};

export const sendRequest = async <T>(
  url: string,
  requestType: RequestType,
  options?: Options
): Promise<T> => {
  const defaultOptions: Options = {
    timeout: 10000,
    method: requestType.toUpperCase(),
    retry: {
      limit: 2,
      statusCodes: [408],
    },
  };

  const response = (await ky(
    url,
    joinOptions([defaultOptions, options])
  ).json()) as T;
  return response;
};
