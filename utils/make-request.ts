import axios, { AxiosRequestConfig, Method } from 'axios';
import { ResponseError } from 'errors/response-error';
import { TypeOf, ZodError, ZodSchema } from 'zod';
import zod from 'zod';

export type RequestConfig<Schema extends ZodSchema | null> = {
  method: Method;
  schema: Schema;
  body?: object;
  config?: AxiosRequestConfig;
};

export async function makeRequest<Schema extends null>(
  url: string,
  { method, schema, body, config }: RequestConfig<Schema>,
): Promise<null>;

export async function makeRequest<Schema extends ZodSchema>(
  url: string,
  { method, schema, body, config }: RequestConfig<Schema>,
): Promise<zod.infer<TypeOf<ZodSchema>>>;

export async function makeRequest<Schema extends ZodSchema | null>(
  url: string,
  { method, schema, body, config }: RequestConfig<Schema>,
) {
  try {
    const response = await axios({
      url,
      method,
      data: body,
      ...config,
      withCredentials: true,
      baseURL: process.env['NEXT_PUBLIC_BASE_URL'],
    });

    if (!schema) {
      return null;
    }

    schema.safeParse(response.data);

    return response.data;
  } catch (error) {
    if (error instanceof ResponseError || error instanceof ZodError) throw error;

    throw new ResponseError('Something went wrong during fetching...');
  }
}
