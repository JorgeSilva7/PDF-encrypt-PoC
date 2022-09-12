const accounts: IAccount[] = [
  {
    documentNumber: "111111111",
    machId: "123asd-123asd-asdasd",
  },
  {
    documentNumber: "22222222",
    machId: "321asd-321asd-asdasd",
  },
];

interface IAccount {
  documentNumber: string;
  machId: string;
  /* And others stuff */
}

export const fromMachId = (machId: string): IAccount => {
  const machAccount = accounts.find((account) => account.machId == machId);
  if (!machAccount) {
    throw new Error("Account don't exists");
  }
  return machAccount;
};
