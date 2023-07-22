export type PageProps = {
  params: {
    id: string;
  };
  searchParams: {
    site: string;
    tiktok?: string;
  };
};

export type ResultProps = {
  url: string;
  site: string;
  tiktok?: string;
};

export type FormatProps = {
  format_id: string;
  format_note: string;
};
