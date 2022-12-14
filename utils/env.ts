type Envs = {
  readonly ENV: 'production' | 'test' | 'development';
  readonly NODE_ENV: 'production' | 'development';
  readonly PORT: number;
  readonly NEXTAUTH_URL: string;
  readonly GITHUB_ID_DEV: string;
  readonly GITHUB_SECRET_DEV: string;
  readonly NEXT_PUBLIC_BASE_URL: string;
  readonly NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
  readonly STRIPE_SECRET_KEY: string;
};

export function getEnv<Env extends keyof Envs>(name: Env): Envs[Env];
export function getEnv(name: keyof Envs): Envs[keyof Envs] {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Cannot find environmental variable ${name}`);
  }

  return value;
}
