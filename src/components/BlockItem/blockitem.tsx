import React, { useState } from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

export default function BlockItem(props) {
  return <h1>Hello, {props.name}</h1>;
}
