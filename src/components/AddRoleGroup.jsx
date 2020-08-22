import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";

//components
import Button from "../components/Button";

export default function AddRoleGroup() {
  return (
    <div className="add-role">
      <h3 className="role-title">Add Role Group</h3>

      <div>
        <div className="add-role-group-section-1">
          <div className="w-33">
            <Input
              id="standard-adornment-weight"
              onChange={(e) => console.log(" input : ", e)}
              placeholder="Role Group Name *"
              aria-describedby="standard-weight-helper-text"
            />
          </div>
          <div className="select-box w-33 ">
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
    </div>
  );
}
