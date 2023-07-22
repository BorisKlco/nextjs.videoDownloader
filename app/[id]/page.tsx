import { Search } from "@/components";
import { PageProps } from "@/type";

export default function UrlFetch({ params, searchParams }: PageProps) {
  return (
    <Search
      url={params.id}
      site={searchParams.site}
      tiktok={searchParams.tiktok}
    />
  );
}
