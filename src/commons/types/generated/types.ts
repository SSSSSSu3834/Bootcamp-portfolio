export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type IBoard = {
  __typename?: "Board";
  _id: Scalars["ID"];
  boardAddress?: Maybe<IBoardAddress>;
  contents: Scalars["String"];
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  dislikeCount: Scalars["Int"];
  images?: Maybe<Array<Scalars["String"]>>;
  likeCount: Scalars["Int"];
  title: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  user?: Maybe<IUser>;
  writer?: Maybe<Scalars["String"]>;
  youtubeUrl?: Maybe<Scalars["String"]>;
};

export type IBoardAddress = {
  __typename?: "BoardAddress";
  _id: Scalars["ID"];
  address?: Maybe<Scalars["String"]>;
  addressDetail?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt: Scalars["DateTime"];
  zipcode?: Maybe<Scalars["String"]>;
};

export type IBoardAddressInput = {
  address?: InputMaybe<Scalars["String"]>;
  addressDetail?: InputMaybe<Scalars["String"]>;
  zipcode?: InputMaybe<Scalars["String"]>;
};

export type IBoardComment = {
  __typename?: "BoardComment";
  _id: Scalars["ID"];
  contents: Scalars["String"];
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  rating: Scalars["Float"];
  updatedAt: Scalars["DateTime"];
  user?: Maybe<IUser>;
  writer?: Maybe<Scalars["String"]>;
};

export type ICreateBoardCommentInput = {
  contents: Scalars["String"];
  password?: InputMaybe<Scalars["String"]>;
  rating: Scalars["Float"];
  writer?: InputMaybe<Scalars["String"]>;
};

export type ICreateBoardInput = {
  boardAddress?: InputMaybe<IBoardAddressInput>;
  contents: Scalars["String"];
  images?: InputMaybe<Array<Scalars["String"]>>;
  password?: InputMaybe<Scalars["String"]>;
  title: Scalars["String"];
  writer?: InputMaybe<Scalars["String"]>;
  youtubeUrl?: InputMaybe<Scalars["String"]>;
};

export type ICreateUseditemInput = {
  contents: Scalars["String"];
  images?: InputMaybe<Array<Scalars["String"]>>;
  name: Scalars["String"];
  price: Scalars["Int"];
  remarks: Scalars["String"];
  tags?: InputMaybe<Array<Scalars["String"]>>;
  useditemAddress?: InputMaybe<IUseditemAddressInput>;
};

export type ICreateUseditemQuestionAnswerInput = {
  contents: Scalars["String"];
};

export type ICreateUseditemQuestionInput = {
  contents: Scalars["String"];
};

export type ICreateUserInput = {
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
};

export type IFileManager = {
  __typename?: "FileManager";
  _id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  isUsed: Scalars["Boolean"];
  size?: Maybe<Scalars["Float"]>;
  updatedAt: Scalars["DateTime"];
  url: Scalars["String"];
};

export type IMutation = {
  __typename?: "Mutation";
  createBoard: IBoard;
  createBoardComment: IBoardComment;
  createPointTransactionOfBuyingAndSelling: IUseditem;
  createPointTransactionOfLoading: IPointTransaction;
  createUseditem: IUseditem;
  createUseditemQuestion: IUseditemQuestion;
  createUseditemQuestionAnswer: IUseditemQuestionAnswer;
  createUser: IUser;
  deleteBoard: Scalars["ID"];
  deleteBoardComment: Scalars["ID"];
  deleteBoards: Array<Scalars["ID"]>;
  deleteUseditem: Scalars["ID"];
  deleteUseditemQuestion: Scalars["ID"];
  deleteUseditemQuestionAnswer: Scalars["String"];
  dislikeBoard: Scalars["Int"];
  likeBoard: Scalars["Int"];
  loginUser: IToken;
  loginUserExample: IToken;
  logoutUser: Scalars["Boolean"];
  resetUserPassword: Scalars["Boolean"];
  restoreAccessToken: IToken;
  toggleUseditemPick: Scalars["Int"];
  updateBoard: IBoard;
  updateBoardComment: IBoardComment;
  updateUseditem: IUseditem;
  updateUseditemQuestion: IUseditemQuestion;
  updateUseditemQuestionAnswer: IUseditemQuestionAnswer;
  updateUser: IUser;
  uploadFile: IFileManager;
};

export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};

export type IMutationCreateBoardCommentArgs = {
  boardId: Scalars["ID"];
  createBoardCommentInput: ICreateBoardCommentInput;
};

export type IMutationCreatePointTransactionOfBuyingAndSellingArgs = {
  useritemId: Scalars["ID"];
};

export type IMutationCreatePointTransactionOfLoadingArgs = {
  impUid: Scalars["ID"];
};

export type IMutationCreateUseditemArgs = {
  createUseditemInput: ICreateUseditemInput;
};

export type IMutationCreateUseditemQuestionArgs = {
  createUseditemQuestionInput: ICreateUseditemQuestionInput;
  useditemId: Scalars["ID"];
};

export type IMutationCreateUseditemQuestionAnswerArgs = {
  createUseditemQuestionAnswerInput: ICreateUseditemQuestionAnswerInput;
  useditemQuestionId: Scalars["ID"];
};

export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};

export type IMutationDeleteBoardArgs = {
  boardId: Scalars["ID"];
};

export type IMutationDeleteBoardCommentArgs = {
  boardCommentId: Scalars["ID"];
  password?: InputMaybe<Scalars["String"]>;
};

export type IMutationDeleteBoardsArgs = {
  boardIds: Array<Scalars["ID"]>;
};

export type IMutationDeleteUseditemArgs = {
  useditemId: Scalars["ID"];
};

export type IMutationDeleteUseditemQuestionArgs = {
  useditemQuestionId: Scalars["ID"];
};

export type IMutationDeleteUseditemQuestionAnswerArgs = {
  useditemQuestionAnswerId: Scalars["ID"];
};

export type IMutationDislikeBoardArgs = {
  boardId: Scalars["ID"];
};

export type IMutationLikeBoardArgs = {
  boardId: Scalars["ID"];
};

export type IMutationLoginUserArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type IMutationLoginUserExampleArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type IMutationResetUserPasswordArgs = {
  password: Scalars["String"];
};

export type IMutationToggleUseditemPickArgs = {
  useditemId: Scalars["ID"];
};

export type IMutationUpdateBoardArgs = {
  boardId: Scalars["ID"];
  password?: InputMaybe<Scalars["String"]>;
  updateBoardInput: IUpdateBoardInput;
};

export type IMutationUpdateBoardCommentArgs = {
  boardCommentId: Scalars["ID"];
  password?: InputMaybe<Scalars["String"]>;
  updateBoardCommentInput: IUpdateBoardCommentInput;
};

export type IMutationUpdateUseditemArgs = {
  updateUseditemInput: IUpdateUseditemInput;
  useditemId: Scalars["ID"];
};

export type IMutationUpdateUseditemQuestionArgs = {
  updateUseditemQuestionInput: IUpdateUseditemQuestionInput;
  useditemQuestionId: Scalars["ID"];
};

export type IMutationUpdateUseditemQuestionAnswerArgs = {
  updateUseditemQuestionAnswerInput: IUpdateUseditemQuestionAnswerInput;
  useditemQuestionAnswerId: Scalars["ID"];
};

export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};

export type IMutationUploadFileArgs = {
  file: Scalars["Upload"];
};

export type IPointTransaction = {
  __typename?: "PointTransaction";
  _id: Scalars["ID"];
  amount: Scalars["Int"];
  balance: Scalars["Int"];
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  impUid?: Maybe<Scalars["ID"]>;
  status: Scalars["String"];
  statusDetail: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  useditem?: Maybe<IUseditem>;
  user?: Maybe<IUser>;
};

export type IQuery = {
  __typename?: "Query";
  fetchBoard: IBoard;
  fetchBoardComments: Array<IBoardComment>;
  fetchBoards: Array<IBoard>;
  fetchBoardsCount: Scalars["Int"];
  fetchBoardsCountOfMine: Scalars["Int"];
  fetchBoardsOfMine: Array<IBoard>;
  fetchBoardsOfTheBest: Array<IBoard>;
  fetchPointTransactions: Array<IPointTransaction>;
  fetchPointTransactionsCountOfBuying: Scalars["Int"];
  fetchPointTransactionsCountOfLoading: Scalars["Int"];
  fetchPointTransactionsCountOfSelling: Scalars["Int"];
  fetchPointTransactionsOfBuying: Array<IPointTransaction>;
  fetchPointTransactionsOfLoading: Array<IPointTransaction>;
  fetchPointTransactionsOfSelling: Array<IPointTransaction>;
  fetchUseditem: IUseditem;
  fetchUseditemQuestionAnswers: Array<IUseditemQuestionAnswer>;
  fetchUseditemQuestions: Array<IUseditemQuestion>;
  fetchUseditems: Array<IUseditem>;
  fetchUseditemsCountIBought: Scalars["Int"];
  fetchUseditemsCountIPicked: Scalars["Int"];
  fetchUseditemsCountISold: Scalars["Int"];
  fetchUseditemsIBought: Array<IUseditem>;
  fetchUseditemsIPicked: Array<IUseditem>;
  fetchUseditemsISold: Array<IUseditem>;
  fetchUseditemsOfTheBest: Array<IUseditem>;
  fetchUserLoggedIn: IUser;
};

export type IQueryFetchBoardArgs = {
  boardId: Scalars["ID"];
};

export type IQueryFetchBoardCommentsArgs = {
  boardId: Scalars["ID"];
  page?: InputMaybe<Scalars["Int"]>;
};

export type IQueryFetchBoardsArgs = {
  endDate?: InputMaybe<Scalars["DateTime"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  startDate?: InputMaybe<Scalars["DateTime"]>;
};

export type IQueryFetchBoardsCountArgs = {
  endDate?: InputMaybe<Scalars["DateTime"]>;
  search?: InputMaybe<Scalars["String"]>;
  startDate?: InputMaybe<Scalars["DateTime"]>;
};

export type IQueryFetchPointTransactionsArgs = {
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
};

export type IQueryFetchPointTransactionsOfBuyingArgs = {
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
};

export type IQueryFetchPointTransactionsOfLoadingArgs = {
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
};

export type IQueryFetchPointTransactionsOfSellingArgs = {
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
};

export type IQueryFetchUseditemArgs = {
  useditemId: Scalars["ID"];
};

export type IQueryFetchUseditemQuestionAnswersArgs = {
  page?: InputMaybe<Scalars["Int"]>;
  useditemQuestionId: Scalars["ID"];
};

export type IQueryFetchUseditemQuestionsArgs = {
  page?: InputMaybe<Scalars["Int"]>;
  useditemId: Scalars["ID"];
};

export type IQueryFetchUseditemsArgs = {
  isSoldout?: InputMaybe<Scalars["Boolean"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
};

export type IQueryFetchUseditemsIBoughtArgs = {
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
};

export type IQueryFetchUseditemsIPickedArgs = {
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
};

export type IQueryFetchUseditemsISoldArgs = {
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
};

export type IToken = {
  __typename?: "Token";
  accessToken: Scalars["String"];
};

export type IUpdateBoardCommentInput = {
  contents?: InputMaybe<Scalars["String"]>;
  rating?: InputMaybe<Scalars["Float"]>;
};

export type IUpdateBoardInput = {
  boardAddress?: InputMaybe<IBoardAddressInput>;
  contents?: InputMaybe<Scalars["String"]>;
  images?: InputMaybe<Array<Scalars["String"]>>;
  title?: InputMaybe<Scalars["String"]>;
  youtubeUrl?: InputMaybe<Scalars["String"]>;
};

export type IUpdateUseditemInput = {
  contents?: InputMaybe<Scalars["String"]>;
  images?: InputMaybe<Array<Scalars["String"]>>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Int"]>;
  remarks?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<Array<Scalars["String"]>>;
  useditemAddress?: InputMaybe<IUseditemAddressInput>;
};

export type IUpdateUseditemQuestionAnswerInput = {
  contents: Scalars["String"];
};

export type IUpdateUseditemQuestionInput = {
  contents: Scalars["String"];
};

export type IUpdateUserInput = {
  name?: InputMaybe<Scalars["String"]>;
  picture?: InputMaybe<Scalars["String"]>;
};

export type IUseditem = {
  __typename?: "Useditem";
  _id: Scalars["ID"];
  buyer?: Maybe<IUser>;
  contents: Scalars["String"];
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  images?: Maybe<Array<Scalars["String"]>>;
  name: Scalars["String"];
  pickedCount?: Maybe<Scalars["Int"]>;
  price?: Maybe<Scalars["Int"]>;
  remarks: Scalars["String"];
  seller?: Maybe<IUser>;
  soldAt?: Maybe<Scalars["DateTime"]>;
  tags?: Maybe<Array<Scalars["String"]>>;
  updatedAt: Scalars["DateTime"];
  useditemAddress?: Maybe<IUseditemAddress>;
};

export type IUseditemAddress = {
  __typename?: "UseditemAddress";
  _id: Scalars["ID"];
  address?: Maybe<Scalars["String"]>;
  addressDetail?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  lat?: Maybe<Scalars["Float"]>;
  lng?: Maybe<Scalars["Float"]>;
  updatedAt: Scalars["DateTime"];
  zipcode?: Maybe<Scalars["String"]>;
};

export type IUseditemAddressInput = {
  address?: InputMaybe<Scalars["String"]>;
  addressDetail?: InputMaybe<Scalars["String"]>;
  lat?: InputMaybe<Scalars["Float"]>;
  lng?: InputMaybe<Scalars["Float"]>;
  zipcode?: InputMaybe<Scalars["String"]>;
};

export type IUseditemQuestion = {
  __typename?: "UseditemQuestion";
  _id: Scalars["ID"];
  contents: Scalars["String"];
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt: Scalars["DateTime"];
  useditem: IUseditem;
  user: IUser;
};

export type IUseditemQuestionAnswer = {
  __typename?: "UseditemQuestionAnswer";
  _id: Scalars["ID"];
  contents: Scalars["String"];
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt: Scalars["DateTime"];
  useditemQuestion: IUseditemQuestion;
  user: IUser;
};

export type IUser = {
  __typename?: "User";
  _id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  name: Scalars["String"];
  picture?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
  userPoint?: Maybe<IUserPoint>;
};

export type IUserPoint = {
  __typename?: "UserPoint";
  _id: Scalars["ID"];
  amount: Scalars["Int"];
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt: Scalars["DateTime"];
  user: IUser;
};

//==================================
// export type Maybe<T> = T | null;
// export type InputMaybe<T> = Maybe<T>;
// export type Exact<T extends { [key: string]: unknown }> = {
//   [K in keyof T]: T[K];
// };
// export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
//   [SubKey in K]?: Maybe<T[SubKey]>;
// };
// export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
//   [SubKey in K]: Maybe<T[SubKey]>;
// };
// export type MakeEmpty<
//   T extends { [key: string]: unknown },
//   K extends keyof T
// > = { [_ in K]?: never };
// export type Incremental<T> =
//   | T
//   | {
//       [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
//     };
// /** All built-in and custom scalars, mapped to their actual values */
// export type Scalars = {
//   ID: { input: string; output: string };
//   String: { input: string; output: string };
//   Boolean: { input: boolean; output: boolean };
//   Int: { input: number; output: number };
//   Float: { input: number; output: number };
//   Date: { input: any; output: any };
// };

// export type IBoardReturn = {
//   __typename?: "BoardReturn";
//   contents?: Maybe<Scalars["String"]["output"]>;
//   createdAt?: Maybe<Scalars["Date"]["output"]>;
//   like?: Maybe<Scalars["Int"]["output"]>;
//   number?: Maybe<Scalars["Int"]["output"]>;
//   title?: Maybe<Scalars["String"]["output"]>;
//   writer?: Maybe<Scalars["String"]["output"]>;
// };

// export enum ICacheControlScope {
//   Private = "PRIVATE",
//   Public = "PUBLIC",
// }

// export type ICreateProductInput = {
//   detail?: InputMaybe<Scalars["String"]["input"]>;
//   name?: InputMaybe<Scalars["String"]["input"]>;
//   price?: InputMaybe<Scalars["Int"]["input"]>;
// };

// export type IMutation = {
//   __typename?: "Mutation";
//   createBoard?: Maybe<IReturn>;
//   createProduct?: Maybe<IReturn>;
//   createProfile?: Maybe<IReturn>;
//   deleteBoard?: Maybe<IReturn>;
//   deleteProduct?: Maybe<IReturn>;
//   deleteProfile?: Maybe<IReturn>;
//   updateBoard?: Maybe<IReturn>;
//   updateProduct?: Maybe<IReturn>;
//   updateProfile?: Maybe<IReturn>;
// };

// export type IMutationCreateBoardArgs = {
//   contents?: InputMaybe<Scalars["String"]["input"]>;
//   title?: InputMaybe<Scalars["String"]["input"]>;
//   writer?: InputMaybe<Scalars["String"]["input"]>;
// };

// export type IMutationCreateProductArgs = {
//   createProductInput: ICreateProductInput;
//   seller?: InputMaybe<Scalars["String"]["input"]>;
// };

// export type IMutationCreateProfileArgs = {
//   age?: InputMaybe<Scalars["Int"]["input"]>;
//   name?: InputMaybe<Scalars["String"]["input"]>;
//   school?: InputMaybe<Scalars["String"]["input"]>;
// };

// export type IMutationDeleteBoardArgs = {
//   number?: InputMaybe<Scalars["Int"]["input"]>;
// };

// export type IMutationDeleteProductArgs = {
//   productId?: InputMaybe<Scalars["ID"]["input"]>;
// };

// export type IMutationDeleteProfileArgs = {
//   name?: InputMaybe<Scalars["String"]["input"]>;
// };

// export type IMutationUpdateBoardArgs = {
//   contents?: InputMaybe<Scalars["String"]["input"]>;
//   number?: InputMaybe<Scalars["Int"]["input"]>;
//   title?: InputMaybe<Scalars["String"]["input"]>;
//   writer?: InputMaybe<Scalars["String"]["input"]>;
// };

// export type IMutationUpdateProductArgs = {
//   productId?: InputMaybe<Scalars["ID"]["input"]>;
//   updateProductInput: IUpdateProductInput;
// };

// export type IMutationUpdateProfileArgs = {
//   age?: InputMaybe<Scalars["Int"]["input"]>;
//   name?: InputMaybe<Scalars["String"]["input"]>;
//   school?: InputMaybe<Scalars["String"]["input"]>;
// };

// export type IProductReturn = {
//   __typename?: "ProductReturn";
//   _id?: Maybe<Scalars["ID"]["output"]>;
//   createdAt?: Maybe<Scalars["Date"]["output"]>;
//   detail?: Maybe<Scalars["String"]["output"]>;
//   name?: Maybe<Scalars["String"]["output"]>;
//   price?: Maybe<Scalars["Int"]["output"]>;
//   seller?: Maybe<Scalars["String"]["output"]>;
// };

// export type IProfileReturn = {
//   __typename?: "ProfileReturn";
//   age?: Maybe<Scalars["Int"]["output"]>;
//   name?: Maybe<Scalars["String"]["output"]>;
//   number?: Maybe<Scalars["Int"]["output"]>;
//   school?: Maybe<Scalars["String"]["output"]>;
// };

// export type IQuery = {
//   __typename?: "Query";
//   fetchBoard?: Maybe<IBoardReturn>;
//   fetchBoards?: Maybe<Array<IBoardReturn>>;
//   fetchBoardsCount: Scalars["Int"]["output"];
//   fetchProduct?: Maybe<IProductReturn>;
//   fetchProducts?: Maybe<Array<IProductReturn>>;
//   fetchProductsCount: Scalars["Int"]["output"];
//   fetchProfile?: Maybe<IProfileReturn>;
//   fetchProfiles?: Maybe<Array<IProfileReturn>>;
//   fetchProfilesCount: Scalars["Int"]["output"];
// };

// export type IQueryFetchBoardArgs = {
//   boardId?: InputMaybe<Scalars["Int"]["input"]>;
// };

// export type IQueryFetchBoardsArgs = {
//   page?: InputMaybe<Scalars["Int"]["input"]>;
// };

// export type IQueryFetchProductArgs = {
//   productId?: InputMaybe<Scalars["ID"]["input"]>;
// };

// export type IQueryFetchProductsArgs = {
//   page?: InputMaybe<Scalars["Int"]["input"]>;
// };

// export type IQueryFetchProfileArgs = {
//   name?: InputMaybe<Scalars["String"]["input"]>;
// };

// export type IQueryFetchProfilesArgs = {
//   page?: InputMaybe<Scalars["Int"]["input"]>;
// };

// export type IReturn = {
//   __typename?: "Return";
//   _id?: Maybe<Scalars["String"]["output"]>;
//   message?: Maybe<Scalars["String"]["output"]>;
//   number?: Maybe<Scalars["Int"]["output"]>;
// };

// export type IUpdateProductInput = {
//   detail?: InputMaybe<Scalars["String"]["input"]>;
//   name?: InputMaybe<Scalars["String"]["input"]>;
//   price?: InputMaybe<Scalars["Int"]["input"]>;
// };
