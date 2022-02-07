export const query = `{
  microblogCollection {
    items {
      title
      text
      image {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
      publishedAt
    }
  }
}`;
