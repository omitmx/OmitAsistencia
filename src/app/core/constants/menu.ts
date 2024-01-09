import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Admin',
      separator: false,
      items: [
        // {
        //   icon: 'assets/icons/heroicons/outline/chart-pie.svg',
        //   label: 'Dashboard',
        //   route: '/dashboard',
        //   children: [
        //     { label: 'Nfts', route: '/dashboard/nfts' },
        //     { label: 'Podcast', route: '/dashboard/podcast' },
        //   ],
        // }, 
        {
          icon: 'assets/icons/heroicons/outline/swatch.svg',
          label: 'Asignaciones',
          route: '/dashboard',
          children: [
            { label: 'Asignacion de Horarios', route: '/dashboard/nfts', icon:'assets/icons/heroicons/outline/plus-small.svg' },
            { label: 'Asignacion de incidencias', route: '/dashboard/podcast', icon:'assets/icons/heroicons/outline/plus-small.svg' },
          ],
        },       
      ],
    },
    {
      group: 'Reportes',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-bar-square.svg',
          label: 'De Asistencia',
          route: '/download',
        },
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'De Comedor',
          route: '/lunch',
        },
       
      ],
    },
    {
      group: 'Catalogos',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/user-circle.svg',
          label: 'Usuarios',
          route: '/user',
        },
        {
          icon: 'assets/icons/heroicons/outline/home-modern.svg',
          label: 'Empresas',
          route: '/company',
        },
        {
          icon: 'assets/icons/heroicons/outline/identification.svg',
          label: 'Empleados',
          route: '/employee',
        },
        {
          icon: 'assets/icons/heroicons/outline/flag.svg',
          label: 'Dias Festivos',
          route: '/download',
        },
        {
          icon: 'assets/icons/heroicons/outline/bell-alert.svg',
          label: 'Incidencias',
          route: '/incident',
        },
        {
          icon: 'assets/icons/heroicons/outline/clock.svg',
          label: 'Horarios',
          route: '/users',
        },
        
      ],
    },
    {
      group: 'Config',
      separator: false,
      items: [
        // {
        //   icon: 'assets/icons/heroicons/outline/cog.svg',
        //   label: 'Settings',
        //   route: '/settings',
        // },
        // {
        //   icon: 'assets/icons/heroicons/outline/bell.svg',
        //   label: 'Notifications',
        //   route: '/gift',
        // },
        {
          icon: 'assets/icons/heroicons/outline/cog-8-tooth.svg',
          label: 'Herramientas',
          route: '/settings',
          children: [
            { label: 'SMTP', route: '/folders/current-files' , icon:'assets/icons/heroicons/outline/plus-small.svg'},
          ],
        },
      ],
    },
  ];
}
