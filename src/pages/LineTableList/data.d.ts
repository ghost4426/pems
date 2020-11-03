import { Moment } from 'moment';

export interface TableListItem {
  key: number;
  disabled?: boolean;
  name: string;
  image: string;
  meters: number;
  updatedAt: Moment;
  createdAt: Moment;
}

export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableListData {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
}

export interface TableListParams {
  sorter?: string;
  status?: string;
  name?: string;
  // role?: string;
  key?: number;
  pageSize?: number;
  currentPage?: number;
}
