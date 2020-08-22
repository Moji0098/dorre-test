import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";

//components
import Button from "./Button";
import CheckBoxTree from "./CheckBoxTree";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function AddGeneralRole() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <div className="add-role">
      <h3 className="role-title">Add General Role</h3>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Details" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Permisions" href="/trash" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      {value === 0 ? (
        <div>
          <div className="add-role-section-1">
            <div className="general-role-input-box w-33">
              <p>
                Role Name <span className="required-star">*</span>
              </p>
              <Input
                id="standard-adornment-weight"
                onChange={(e) => console.log(" input : ", e)}
                placeholder="Admin General Role"
                aria-describedby="standard-weight-helper-text"
              />
            </div>
            <div className="general-role-select-box w-33">
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                onChange={(e) => console.log(" input : ", e)}
              >
                <MenuItem value="">
                  <em>Secury Status *</em>
                </MenuItem>
                <MenuItem value={0}>Admin Security</MenuItem>
                <MenuItem value={1}>Default Security</MenuItem>
              </Select>
            </div>
            <div className="general-role-select-box w-33 ">
              <p>
                Status <span className="required-star">*</span>
              </p>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                onChange={(e) => console.log(" input : ", e)}
              >
                <MenuItem value="">
                  <em>Status</em>
                </MenuItem>
                <MenuItem value={1}>Active</MenuItem>
                <MenuItem value={0}>Inactive</MenuItem>
                <MenuItem value={2}>Deleted</MenuItem>
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
      ) : (
        ""
      )}
      <TabPanel value={value} index={1}>
        <div className="tree-content">
          <CheckBoxTree />
        </div>
      </TabPanel>
    </div>
  );
}
