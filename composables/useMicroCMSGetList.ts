import type { MicroCMSListResponse } from "microcms-js-sdk";

export const useMicroCMSGetList = <T = any>(args: { endpoint: string }) => {
  const config = useRuntimeConfig();
  const { serviceDomain, apiKey } = config.public.microCMS;

  return useFetch<MicroCMSListResponse<T>>(
    `https://${serviceDomain}.microcms.io/api/v1/${args.endpoint}`,
    {
      headers: {
        "x-microcms-api-key": apiKey,
      },
    }
  );
};
