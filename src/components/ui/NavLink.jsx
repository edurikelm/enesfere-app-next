'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PortfolioIcon, HomeIcon, WorkOrdersIcon, BuildingIcon } from '../icons';

const navItems = [
  { id: 'home', href: '/', label: 'Home', icon: (<HomeIcon />) },
  {
    id: 'portfolio',
    label: 'Portfolio',
    icon: '../icons/Portfolio.svg',
    children: [
      {
        id: 'work-orders',
        href: '/portfolio/work-orders',
        label: 'Work Orders',
        icon: (<WorkOrdersIcon />),
      },
    ],
  },
  { id: 'building', href: '/building', label: 'Building', icon: (<BuildingIcon />) },
  { id: 'staff', href: '/staff', label: 'Staff' },
  { id: 'training', href: '/training', label: 'Training' },
  { id: 'ternder', href: '/ternder', label: 'Ternder' },
  { id: 'occupants', href: '/occupants', label: 'Occupants' },
  { id: 'exports', href: '/exports', label: 'Exports' },
];

export default function NavLink() {
  const [view, setView] = useState('home');

  return (
    <ul className="menu bg-base-200 rounded-box w-56">
      {navItems.map((item) =>
        item.children ? (
          <li key={item.id}>
            <details>
              <summary className="flex items-center gap-2 hover:bg-base-100 rounded px-4 py-3 font-normal">
                <PortfolioIcon size='w-4 h-4' />
                {item.label}
              </summary>
              <ul>
                {item.children.map((child) => (
                  <li key={child.id}>
                    <Link
                      href={child.href}
                      onClick={() => setView(child.id)}
                      className={`hover:bg-base-100 rounded px-4 py-3 ${
                        view === child.id
                          ? 'font-semibold bg-white/10 text-base-content'
                          : 'font-normal'
                      }`}
                    >
                      {child.icon}
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        ) : (
          <li key={item.id}>
            <Link
              href={item.href}
              onClick={() => setView(item.id)}
              className={`hover:bg-base-100 rounded px-4 py-3 ${
                view === item.id
                  ? 'font-semibold bg-white/10 text-base-content'
                  : 'font-normal'
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
