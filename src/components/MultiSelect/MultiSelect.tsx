import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { selectLoadingOptions } from "../../ducks/options/selectors";
import { IOption } from "../../ducks/options/types";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IProps {
  userId: string[];
  options: IOption[];
  handleChange: (event: SelectChangeEvent<string[]>) => void;
}

const MultiSelect: React.FC<IProps> = ({ userId, options, handleChange }) => {
  const optionsLoading = useSelector(selectLoadingOptions);
  return (
    <>
      <Wrapper>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">User</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={userId}
            onChange={handleChange}
            input={<OutlinedInput label="User" />}
            renderValue={(selected) =>
              selected
                .reduce<string[]>((total, value) => {
                  const match = options.find((option) => option.id === value);
                  if (match?.id) return total.concat(match.name);
                  else return total;
                }, [])
                ?.join(", ")
            }
            MenuProps={MenuProps}
          >
            {options?.map(({ id, name }) => (
              <MenuItem key={id} value={id}>
                <Checkbox checked={userId.indexOf(id) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {optionsLoading ? <CircularProgress size={25} /> : null}
      </Wrapper>
    </>
  );
};

export default MultiSelect;
