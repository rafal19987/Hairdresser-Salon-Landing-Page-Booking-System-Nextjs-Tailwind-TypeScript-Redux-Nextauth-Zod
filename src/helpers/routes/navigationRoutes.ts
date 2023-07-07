import { TNavigationRoutesProps } from '@/types/navigationRoutesTypes';

const navigationRoutes: TNavigationRoutesProps[] = [
  {
    route: '/',
    routeName: 'Strona główna',
  },
  {
    route: '/about',
    routeName: 'O nas',
  },
  {
    route: '/prices',
    routeName: 'Cennik',
  },
  {
    route: '/gallery',
    routeName: 'Galeria',
  },
  {
    route: '/opinions',
    routeName: 'Opinie',
  },
  {
    route: '/contact',
    routeName: 'Kontakt',
  },
];

export default navigationRoutes;
