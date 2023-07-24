'use client';

import { useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

type TService = {
  service: string;
  price: string;
  performer: string;
};

const services: TService[] = [
  {
    service: 'Strzyżenie męskie - broda',
    price: '50.00 zł',
    performer: 'Agnieszka',
  },
  {
    service: 'Strzyżenie męskie - bródka',
    price: '20.00 zł',
    performer: 'Agnieszka',
  },
  {
    service: 'Strzyżenie męskie - klasyczne',
    price: '60.00 zł',
    performer: 'Wiktoria Agnieszka',
  },
  {
    service: 'Strzyżenie męskie - klasyczne - włosy długie',
    price: '80.00 zł',
    performer: 'Wiktoria Agnieszka',
  },
  {
    service: 'Strzyżenie męskie - klasyczne + broda',
    price: '95.00 zł',
    performer: 'Agnieszka',
  },
  {
    service: 'Strzyżenie męskie - klasyczne + fade',
    price: '65.00 zł',
    performer: 'Wiktoria Agnieszka',
  },
  {
    service: 'Strzyżenie męskie - klasyczne + skinfade',
    price: '70.00 zł',
    performer: 'Wiktoria Agnieszka',
  },
  {
    service: 'Strzyżenie męskie - klasyczne + koloryzacja',
    price: '140.00 zł',
    performer: 'Wiktoria',
  },
  {
    service: 'Strzyżenie męskie - maszynką - 0-3mm',
    price: '45.00 zł',
    performer: 'Wiktoria Agnieszka',
  },
  {
    service: 'Strzyżenie męskie - maszynką - 6-18mm',
    price: '50.00 zł',
    performer: 'Wiktoria Agnieszka',
  },
  {
    service: 'Strzyżenie męskie - wąs',
    price: '15.00 zł',
    performer: 'Wiktoria Agnieszka',
  },
  {
    service: 'Woskowanie - Nos/Uszy',
    price: '15.00 zł',
    performer: 'Wiktoria Agnieszka',
  },
  {
    service: 'Strzyżenie dzieci do 4 lat',
    price: '50.00 zł',
    performer: 'Wiktoria',
  },
];

const columnHelper = createColumnHelper<TService>();

const columns = [
  columnHelper.accessor((row) => row.service, {
    id: 'service',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Usługa</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('price', {
    cell: (info) => info.renderValue(),
    header: () => <span>Cena</span>,
    footer: (info) => info.column.id,
  }),

  columnHelper.accessor('performer', {
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Dostępne u</span>,
  }),
];

const PricesPage = () => {
  const [data, setData] = useState(() => [...services]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div>Prices Page</div>
      <div>
        <table className="">
          <thead className="w-full h-14 bg-slate-700 text-xl text-white">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="min-w-44 w-56 p-2 text-start hover:bg-slate-500 transition-colors duration-200"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="bg-cyan-800 even:bg-cyan-900 hover:bg-cyan-700 transition-colors duration-200"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-2 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PricesPage;
