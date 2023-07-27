// CLIENT COMPONENT
'use client';

// LIBRARY IMPORTS
import Link from "next/link";
import { Menu } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/solid';

const NavigationBar = () => {
  return (
    <Menu>
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
    </Menu>
  );
};

export default NavigationBar;
