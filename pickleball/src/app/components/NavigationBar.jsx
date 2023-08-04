// CLIENT COMPONENT
'use client';

// LIBRARY IMPORTS
import Link from "next/link";
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

const NavigationBar = () => {
  const menuItems = [
    'Home',
    'Pickleball 101',
    'Open Play',
    'Private Lessons',
    'About Darlene',
  ];

  return (
    <Menu as="nav" className="p-2 flex justify-end items-center">
      <div className="relative">
        <Menu.Button className="h-6 w-6 z-10 text-custom-light">
          <Bars3Icon />
        </Menu.Button>
        <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        >
        <Menu.Items className="absolute right-0 flex flex-col space-y-2 text-right origin-top-right">
          <Menu.Item href="/">
            {({ active }) => (
              <Link href="/" className={`block px-4 py-2 text-sm ${active ? 'bg-blue-500 text-white' : ''}`}>
                Home
              </Link>
            )}
          </Menu.Item>
          <Menu.Item href="pickleball101">
            {({ active }) => (
              <Link href="pickleball101" className={`block px-4 py-2 text-sm whitespace-nowrap ${active ? 'bg-blue-500 text-white' : ''}`}>
                Pickleball 101
              </Link>
            )}
          </Menu.Item>
          <Menu.Item href="openPlay">
            {({ active }) => (
              <Link href="openPlay" className={`block px-4 py-2 text-sm whitespace-nowrap ${active ? 'bg-blue-500 text-white' : ''}`}>
                Open Play
              </Link>
            )}
          </Menu.Item>
          <Menu.Item href="privateLessons">
            {({ active }) => (
              <Link href="privateLessons" className={`block px-4 py-2 text-sm whitespace-nowrap ${active ? 'bg-blue-500 text-white' : ''}`}>
                Private Lessons
              </Link>
            )}
          </Menu.Item>
          <Menu.Item href="aboutDar">
            {({ active }) => (
              <Link href="aboutDar" className={`block px-4 py-2 text-sm whitespace-nowrap ${active ? 'bg-blue-500 text-white' : ''}`}>
                About Darlene
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
};

export default NavigationBar;
