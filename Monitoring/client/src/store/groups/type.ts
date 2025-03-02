export type TGroup = {
  group: {
    id: string;
    name: string;
    users: Array<{
      name: string;
      id: string;
    }>;
  };
};
