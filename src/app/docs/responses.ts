export const resGetAll = JSON.stringify(
  {
    status: 200,
    urls: [
      {
        id: "1e48ed9c-29b4-4495-9f16-72132e2f4bdf",
        slug: "QFjfpr",
        longUrl: "https://example.com",
        clicks: 0,
      },
      {
        id: "8758740b-6677-4f75-a042-f4593a99a550",
        slug: "FrRlf1",
        longUrl: "https://example.com",
        clicks: 0,
      },
    ],
  },
  null,
  2
);

export const resCreate = JSON.stringify(
  {
    status: 201,
    url: {
      id: "1e48ed9c-29b4-4495-9f16-72132e2f4bdf",
      slug: "QFjfpr",
      longUrl: "https://example.com",
      clicks: 0,
    },
  },
  null,
  2
);

export const resGetLink = JSON.stringify(
  {
    status: 200,
    url: {
      id: "1e48ed9c-29b4-4495-9f16-72132e2f4bdf",
      slug: "QFjfpr",
      longUrl: "https://example.com",
      clicks: 1,
    },
  },
  null,
  2
);
