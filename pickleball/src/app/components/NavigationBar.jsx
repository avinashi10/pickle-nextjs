// CLIENT COMPONENT
'use client';

// LIBRARY IMPORTS
import Link from "next/link";
import { Menu } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/solid';

const NavigationBar = () => {
  return (
    <Menu as="nav" className="bg-blue-500 p-4">
      <Menu.Button className="h-6 w-6">
        <Bars3Icon />
      </Menu.Button>
      <Menu.Items className="flex flex-col space-y-2">
        <Menu.Item href="/">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item href="/pickleball101">
          <Link href="/pickleball101">Pickleball 101</Link>
        </Menu.Item>
        <Menu.Item href="/openPlay">
          <Link href="/openPlay">Open Play</Link>
        </Menu.Item>
        <Menu.Item href="/privateLessons">
          <Link href="/privateLessons">Private Lessons</Link>
        </Menu.Item>
        <Menu.Item href="/aboutDar">
          <Link href="/aboutDar">About Darlene</Link>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default NavigationBar;
