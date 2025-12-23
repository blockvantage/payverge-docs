import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/introduction',
        'getting-started/user-roles',
        'getting-started/business-registration',
        'getting-started/subscriptions',
      ],
    },
    {
      type: 'category',
      label: 'Business Owners',
      collapsed: false,
      items: [
        'business-owners/dashboard',
        'business-owners/menu-builder',
        'business-owners/tables',
        'business-owners/bills',
        'business-owners/staff-management',
      ],
    },
    {
      type: 'category',
      label: 'Guest Experience',
      collapsed: false,
      items: [
        'guests/scanning-qr-code',
        'guests/browsing-menu',
        'guests/making-payment',
      ],
    },
    {
      type: 'category',
      label: 'Staff Members',
      collapsed: false,
      items: [
        'staff/getting-started',
      ],
    },
  ],
};

export default sidebars;
