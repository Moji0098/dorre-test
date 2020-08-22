import React from "react";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import InputAdornment from "@material-ui/core/InputAdornment";
import { NavLink } from "react-router-dom";

//tab
import MenuItem from "@material-ui/core/MenuItem";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

//tree
import TreeView from "@material-ui/lab/TreeView";

//components
import Button from "../components/Button";
import AddRole from "../components/AddRole";
import AddRoleGroup from "../components/AddRoleGroup";
import AddGeneralRole from "../components/AddGeneralRole";

//icons
import {
  SearchOutlined,
  Home,
  ChevronLeft,
  FileCopyOutlined,
} from "@material-ui/icons";

import {
  StyledTreeItem,
  a11yProps,
  useStyles,
  TabPanel,
  MinusSquare,
  PlusSquare,
} from "../utils/mainTree";

const data = {
  id: "root",
  name: "ADMIN ORG STRUCTURE",
  children: [
    {
      id: "1",
      name: "ADMIN",
      func1: (e) => {
        alert(9);
        e.stopPropagation();
      },
      func2: (e) => {
        alert(1);
        e.stopPropagation();
      },
      title1: "Add Role Group",
      title2: "Add Role",
      head: true,
      children: [
        {
          id: "2",
          name: "Admin General Role",
        },
        {
          id: "3",
          name: "Admin Role (do not)",
        },
      ],
    },
    {
      id: "4",
      name: "ALUMNI",
      head: "true",
      func1: (e) => {
        alert(9);
        e.stopPropagation();
      },
      func2: (e) => {
        alert(1);
        e.stopPropagation();
      },
      children: [
        {
          id: "5",
          name: "Alumni General Role",
        },
      ],
    },
    {
      id: "6",
      name: "APPLICANT",
      head: "true",
      func1: (e) => {
        alert(9);
        e.stopPropagation();
      },
      func2: (e) => {
        alert(1);
        e.stopPropagation();
      },
      children: [
        {
          id: "7",
          name: "Applicatn General Role",
        },
      ],
    },
  ],
};

const Organization = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [filter, setFilter] = React.useState(0);

  const [role, setRole] = React.useState(false);
  const [roleGroup, setRoleGroup] = React.useState(false);
  const [generalRole, setGeneralRole] = React.useState(false);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  const addRoleHandler = (e) => {
    e.stopPropagation();
    setRoleGroup(true);
    setRole(false);
    setGeneralRole(false);
  };

  const addRoleGroupHandler = (e) => {
    e.stopPropagation();
    setRoleGroup(false);
    setRole(true);
    setGeneralRole(false);
  };

  const addGeneralRoleHandler = (e) => {
    e.stopPropagation();
    setRoleGroup(false);
    setRole(false);
    setGeneralRole(true);
  };

  const renderTree = (nodes) => {
    const label = () => {
      if (nodes.head) {
        return (
          <div className="tree-head-btns">
            {nodes.name}
            <span className="tree-node-btn" onClick={addRoleGroupHandler}>
              Add Role Group
            </span>
            <span className="tree-node-btn" onClick={addRoleHandler}>
              Add Role
            </span>
          </div>
        );
      }
      return (
        <div className="node-name" onClick={addGeneralRoleHandler}>
          {nodes.name}
        </div>
      );
    };

    return (
      <div style={{ display: "flex" }}>
        <StyledTreeItem key={nodes.id} nodeId={nodes.id} label={label()}>
          {Array.isArray(nodes.children)
            ? nodes.children.map((node) => renderTree(node))
            : ""}
        </StyledTreeItem>
      </div>
    );
  };

  return (
    <div className="home">
      <div className="left-box">
        <div className="left-side-title">
          Organization <ChevronLeft className="icon-sm" />
        </div>
        <NavLink
          to="/"
          className="side-nav-link"
          activeClassName="side-active-nav"
          exact
        >
          <FileCopyOutlined className="side-nav-icon" />
          <span className="side-nav-title">Organization Group</span>
        </NavLink>
      </div>
      <div className="right-box">
        <div className="route-mapping">
          <Home className="icon-sm" /> &nbsp; {" > "} &nbsp; Organization Grou
          &nbsp;p{" > "} &nbsp; AdminOrganizaiton Group(do not edit) &nbsp;{" "}
          {" > "} &nbsp; Organization Structure &nbsp; {" > "} &nbsp; Admin Org
          Structure (do not edit) &nbsp; {" > "} &nbsp; <b> Roles </b>
        </div>
        <div className="home-box">
          <div className="home-head">Admin Org Structure (do not edit)</div>
          <div className="home-tab-box">
            <div className="home-tab">
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
              >
                <Tab
                  label="Details"
                  {...a11yProps(0)}
                  className="icon-sm"
                  icon={<ChevronLeft />}
                />
                <Tab
                  label="Roles"
                  {...a11yProps(1)}
                  icon={<ChevronLeft className="opacity0" />}
                />
                <Tab
                  label="Organization Structure"
                  {...a11yProps(2)}
                  icon={<ChevronLeft className="opacity0" />}
                />
              </Tabs>
              <TabPanel value={value} index={0}>
                <div className="tab-content">
                  <div className="tab-inputs">
                    <div className="input-box">
                      <p>
                        Organization Structure Name{" "}
                        <span className="required-star">*</span>
                      </p>
                      <Input
                        id="standard-adornment-weight"
                        onChange={(e) => console.log(" input : ", e)}
                        placeholder="admin org structure"
                        aria-describedby="standard-weight-helper-text"
                      />
                    </div>
                    <div className="select-box">
                      <p>
                        Status <span className="required-star">*</span>
                      </p>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => console.log(" input : ", e)}
                      >
                        <MenuItem value={0}>
                          <em>Status</em>
                        </MenuItem>
                        <MenuItem value={1}>Active</MenuItem>
                        <MenuItem value={2}>Inactive</MenuItem>
                        <MenuItem value={3}>Deleted</MenuItem>
                      </Select>
                    </div>
                  </div>

                  <div className="btn-box">
                    <Button
                      color="#51b6ef"
                      borderColor="#51b6ef"
                      title="Go Back"
                      onClick={() => {
                        alert(0);
                      }}
                    />
                    <Button
                      backgroundColor="#51b6ef"
                      title="Update"
                      margin="0 0 0 1rem"
                      onClick={() => {
                        alert(2);
                      }}
                    />
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className="filter-tree-role">
                  <div className="filter-box">
                    <div className="filter-select-box">
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                      >
                        <MenuItem value={0}>
                          <em>select Status</em>
                        </MenuItem>
                        <MenuItem value={1}>Active</MenuItem>
                        <MenuItem value={2}>Inactive</MenuItem>
                        <MenuItem value={3}>Deleted</MenuItem>
                      </Select>
                    </div>
                    <div className="filter-icon-box">
                      <SearchOutlined className="filter-icon" />
                    </div>
                  </div>
                  <div className="search-box">
                    <Input
                      id="input-with-icon-adornment"
                      placeholder="search"
                      startAdornment={
                        <InputAdornment position="end">
                          <SearchOutlined />
                        </InputAdornment>
                      }
                    />
                  </div>
                  <div className="tree-role">
                    <div className="tree-content">
                      <TreeView
                        defaultExpanded={["root", "1", "2", "3", "4", "5", "6"]}
                        defaultCollapseIcon={<MinusSquare />}
                        defaultExpandIcon={<PlusSquare />}
                      >
                        {renderTree(data)}
                      </TreeView>
                    </div>
                    {role ? <AddRole /> : ""}
                    {roleGroup ? <AddRoleGroup /> : ""}
                    {generalRole ? <AddGeneralRole /> : ""}
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                Organization Structure
              </TabPanel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organization;
