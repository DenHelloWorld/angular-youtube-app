export const SortOrder = {
  ASC: 'asc',
  DESC: 'desc',
  NONE: null,
} as const;

export type SortOrderType = (typeof SortOrder)[keyof typeof SortOrder];
