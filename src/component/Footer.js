import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";

const Footer = () => (
  <div>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}> All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}> Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>completed</FilterLink>
  </div>
);
export default Footer;
