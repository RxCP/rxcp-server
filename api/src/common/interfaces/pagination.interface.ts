export interface PaginationResponseInterface<Entity> {
  results: Entity[];
  page: number;
  perPage: number;
  totalCount: number;
}

export interface PaginationRequestInterface {
  limit?: number;
  page?: number;
}

export type OrderTypes = 'ASC' | 'DESC';

export interface ReactAdminPaginationRequestInterface {
  _end?: number;
  _order?: OrderTypes;
  _sort?: string;
  _start?: number;
}
