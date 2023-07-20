import { Search } from "@/components";
import { PageProps } from "@/type";

export default function UrlFetch({ params }: PageProps) {
  return <Search url={params.id} />;
}
