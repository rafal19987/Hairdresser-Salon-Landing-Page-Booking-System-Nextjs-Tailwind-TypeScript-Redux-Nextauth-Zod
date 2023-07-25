'use client';

import { useState } from 'react';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';

type TService = {
  id: number;
  service: string;
  price: string;
  performer: string[];
};

const services: TService[] = [
  {
    id: 1,
    service: 'Strzyżenie męskie - broda',
    price: '50.00 zł',
    performer: ['Agnieszka'],
  },
  {
    id: 2,
    service: 'Strzyżenie męskie - bródka',
    price: '20.00 zł',
    performer: ['Agnieszka'],
  },
  {
    id: 3,
    service: 'Strzyżenie męskie - klasyczne',
    price: '60.00 zł',
    performer: ['Wiktoria', 'Agnieszka'],
  },
  {
    id: 4,
    service: 'Strzyżenie męskie - klasyczne - włosy długie',
    price: '80.00 zł',
    performer: ['Wiktoria', 'Agnieszka'],
  },
  {
    id: 5,
    service: 'Strzyżenie męskie - klasyczne + broda',
    price: '95.00 zł',
    performer: ['Agnieszka'],
  },
  {
    id: 6,
    service: 'Strzyżenie męskie - klasyczne + fade',
    price: '65.00 zł',
    performer: ['Wiktoria', 'Agnieszka'],
  },
  {
    id: 7,
    service: 'Strzyżenie męskie - klasyczne + skinfade',
    price: '70.00 zł',
    performer: ['Wiktoria', 'Agnieszka'],
  },
  {
    id: 8,
    service: 'Strzyżenie męskie - klasyczne + koloryzacja',
    price: '140.00 zł',
    performer: ['Wiktoria'],
  },
  {
    id: 9,
    service: 'Strzyżenie męskie - maszynką - 0-3mm',
    price: '45.00 zł',
    performer: ['Wiktoria', 'Agnieszka'],
  },
  {
    id: 10,
    service: 'Strzyżenie męskie - maszynką - 6-18mm',
    price: '50.00 zł',
    performer: ['Wiktoria', 'Agnieszka'],
  },
  {
    id: 11,
    service: 'Strzyżenie męskie - wąs',
    price: '15.00 zł',
    performer: ['Wiktoria', 'Agnieszka'],
  },
  {
    id: 12,
    service: 'Woskowanie - Nos/Uszy',
    price: '15.00 zł',
    performer: ['Wiktoria', 'Agnieszka'],
  },
  {
    id: 13,
    service: 'Strzyżenie dzieci do 4 lat',
    price: '50.00 zł',
    performer: ['Wiktoria'],
  },
];

type sorted = {
  sortedBy: 'idle' | 'ascending' | 'descending';
};

const PricesPage = () => {
  const initialState = services;
  const [data, setData] = useState(initialState);
  const [sortedBy, setSortedBy] = useState<sorted>({ sortedBy: 'idle' });
  const [date, setDate] = useState(() => new Date());

  const handleSort = () => {
    const sortedData = [...data];

    if (sortedBy.sortedBy === 'idle' || sortedBy.sortedBy === 'ascending') {
      sortedData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      setSortedBy({ sortedBy: 'descending' });
      console.log(sortedBy);
      return setData(sortedData);
    }

    if (sortedBy.sortedBy === 'descending') {
      sortedData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      setSortedBy({ sortedBy: 'ascending' });
      console.log(sortedBy);
      return setData(sortedData);
    }
  };

  let month = date.getMonth();
  let thisMonth = null;
  const months = [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień',
  ];

  switch (month) {
    case 0:
      thisMonth = months[0];
      break;
    case 6:
      thisMonth = months[6];
      break;
    default:
      console.log('Ssij');
  }

  return (
    <div className="w-full h-full p-4">
      <div>
        <table className="w-full h-full cursor-default">
          <caption className="p-4 text-xl">Lista dostępnych usług</caption>
          <thead className="border-b border-gray-600">
            <tr className="uppercase text-gray-400 ">
              <th className="p-4 text-start">Usługa</th>
              <th
                className="text-start hover:cursor-pointer"
                onClick={handleSort}
              >
                <div className="flex items-center gap-2 w-40 group ">
                  <span className="group-hover:text-slate-700 transition-colors">
                    Cena
                  </span>
                  <div>
                    <BiUpArrow
                      className={`${
                        sortedBy.sortedBy === 'ascending' &&
                        'text-[var(--gold)]'
                      } transition-colors`}
                    />
                    <BiDownArrow
                      className={`${
                        sortedBy.sortedBy === 'descending' &&
                        'text-[var(--gold)]'
                      } transition-colors`}
                    />
                  </div>
                </div>
              </th>
              <th className="text-start w-40">Dostępne u</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((service: TService) => (
              <tr
                key={service.id}
                className="h-24 p-4 hover:bg-neutral-800 border-b border-gray-700 text-white transition-colors duration-200 "
              >
                <td className="p-4">{service.service}</td>
                <td className="">{service.price}</td>
                <td className="py-4">
                  <ul className="flex flex-col gap-2">
                    {service.performer.map((performer) => (
                      // eslint-disable-next-line
                      <li className="w-fit">
                        <span>{performer}</span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  <button
                    className="h-12 px-2 text-[var(--gold)] hover:text-yellow-100 hover:cursor-pointer"
                    onClick={() => {
                      console.log(
                        `Wybrano usługę: ${
                          services[service.id].service
                        } o id = ${services[service.id].id}`
                      );
                    }}
                  >
                    Umów się
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            {' '}
            <tr>
              <td className="py-2 px-5 text-center" colSpan={4}>
                <span>
                  Cennik aktualny na dzień {date.getDate()} {thisMonth}{' '}
                  {date.getFullYear()}
                </span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default PricesPage;
