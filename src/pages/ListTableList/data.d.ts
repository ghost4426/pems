import { Moment } from "moment";

export interface TableListItem {
  key: number;
  disabled?: boolean;
  name: string;
  email: string;
  phoneNo: string;
  isActive: boolean;
  role: 'Admin'| 'User';
  dob: Moment;
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
