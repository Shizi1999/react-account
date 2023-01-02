export type Pagination = {
  _limit: number;
  _page: number;
  _total: number;
};

export type ListReponse<T> = {
  data: T[];
  pagination: Pagination;
};
