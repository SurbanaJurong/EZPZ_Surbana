

import { 
  BrowseStack, 
  ActivityStack, 
  SellStack, 
  RequestsStack, 
  ProfileStack } from '../Stacks'

export const pages = [{
  name: "BrowsePage",
  screen:BrowseStack, 
  label: "Browse",
  icon:"search",
  path: '/',
}, {
  name: "ActivityPage",
  screen:ActivityStack,
  label: "Activity",
  icon: "group",
  path: '/activity',
}, {
  name: "SellPage",
  screen:SellStack,
  label: "Sell",
  icon: "add-circle-outline",
  path: '/login',
}, {
  name: "RequestsPage",
  screen:RequestsStack,
  label: "Requests",
  icon: "check-box",
  path: '/login',
}, {
  name: "ProfilePage",
  screen:ProfileStack,
  label: "Profile",
  icon: "account-circle",
  path: '/services',
}];
