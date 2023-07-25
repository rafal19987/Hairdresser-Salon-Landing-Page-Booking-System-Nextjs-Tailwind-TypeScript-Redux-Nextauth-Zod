'use client';

import { useState } from 'react';

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

const PricesPage = () => {
  const [data, setData] = useState(services);
  const [filteredData, setFilteredData] = useState(data);
  const [date, setDate] = useState(() => new Date());

  const sortByPrice = () => {
    const sortedData = [...filteredData];
    sortedData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    setFilteredData(sortedData);
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
    <div className="w-full h-full p-4 border">
      <div>
        <table className="w-full h-full">
          <caption className="p-4 text-xl">
            Tabela dostępnych usług w naszym salonie
          </caption>
          <thead>
            <tr className="bg-slate-500 uppercase ">
              <th className="p-4 text-start hover:cursor-default">Usługa</th>
              <th
                className="text-start hover:cursor-pointer hover:text-slate-700"
                onClick={sortByPrice}
              >
                Cena
              </th>
              <th
                className="text-start hover:cursor-pointer hover:text-slate-700"
                onClick={() => {
                  setFilteredData(data);
                }}
              >
                Dostępne u
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((service: TService) => (
              <tr
                key={service.id}
                className="p-4 bg-slate-600 even:bg-slate-700 hover:bg-slate-800"
              >
                <td className="p-4 hover:cursor-default">{service.service}</td>
                <td className="hover:cursor-default">{service.price}</td>
                <td className="py-4">
                  <ul className="flex flex-col gap-2">
                    {service.performer.map((performer) => (
                      // eslint-disable-next-line
                      <li className="w-fit text-blue-300 hover:text-blue-500 hover:cursor-pointer">
                        <span
                          onClick={() => {
                            setFilteredData(
                              data.filter((d) => d.performer[0] === performer)
                            );
                          }}
                        >
                          {performer}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  <button
                    className="h-12 px-2 bg-slate-900 rounded-lg text-blue-300 hover:text-blue-500 hover:cursor-pointer"
                    onClick={() => {
                      console.log(services[service.id - 1].service);
                    }}
                  >
                    Zarezewuj
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            {' '}
            <tr>
              <td className="py-2 px-5 border text-center" colSpan={4}>
                Cennik aktualny na dzień {date.getDate()} {thisMonth}{' '}
                {date.getFullYear()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default PricesPage;
