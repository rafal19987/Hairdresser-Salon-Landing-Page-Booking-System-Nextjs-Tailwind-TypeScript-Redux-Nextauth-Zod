import { useState } from 'react';

type sorted = {
  sortedBy: 'idle' | 'ascending' | 'descending';
};

export const useSortData = <T extends { price: string }>(
  data: T[]
): {
  sortedData: T[];
  sortData: () => void;
} => {
  const [sortedBy, setSortedBy] = useState<sorted>({ sortedBy: 'idle' });
  const [sortedData, setSortedData] = useState<T[]>(data);

  const sortData = (): void => {
    if (sortedBy.sortedBy === 'idle' || sortedBy.sortedBy === 'ascending') {
      setSortedData(
        data.toSorted((a, b) => parseFloat(a.price) - parseFloat(b.price))
      );
      setSortedBy({ sortedBy: 'descending' });
    } else {
      setSortedData(
        data.toSorted((a, b) => parseFloat(b.price) - parseFloat(a.price))
      );
      setSortedBy({ sortedBy: 'ascending' });
    }
  };

  return { sortedData, sortData };
};
