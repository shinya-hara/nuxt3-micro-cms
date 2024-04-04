import type { MicroCMSListContent } from "microcms-js-sdk";

export const useMicroCMSGetListDetail = <T = any>(args: {
  endpoint: string;
  contentId: string;
}) => {
  const config = useRuntimeConfig();
  const { serviceDomain, apiKey } = config.public.microCMS;

  return useFetch<T & MicroCMSListContent>(
    `https://${serviceDomain}.microcms.io/api/v1/${args.endpoint}/${args.contentId}`,
    {
      headers: {
        "x-microcms-api-key": apiKey,
      },
    }
  );
};
