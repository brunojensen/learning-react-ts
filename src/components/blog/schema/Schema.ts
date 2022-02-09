export type MicroblogPayload = {
  data: {
    microblogCollection: {
      items: Post[];
    };
  };
};

export type Post = {
  title: string;
  text: string;
  image: { url: string; title: string };
  publishedAt: Date;
};
