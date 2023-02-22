import { useState } from "react";
import { TextInput } from "@coral-xyz/react-common";
import { styles, useCustomTheme } from "@coral-xyz/themes";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const useStyles = styles((theme) => ({
  searchField: {
    marginTop: "0px",
    marginBottom: "16px",
    width: "inherit",
    display: "flex",
    "& .MuiOutlinedInput-root": {
      "& input": {
        paddingTop: 0,
        paddingBottom: 0,
      },
      "& fieldset": {
        border: `${theme.custom.colors.borderFull} !important`,
      },
    },
  },
}));

export const SearchBox = ({
  onChange,
  placeholder,
}: {
  onChange: any;
  placeholder?: string;
}) => {
  const classes = useStyles();
  const theme = useCustomTheme();
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <TextInput
      className={classes.searchField}
      placeholder={placeholder ?? "Enter a username or address"}
      value={searchFilter}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon style={{ color: theme.custom.colors.icon }} />
        </InputAdornment>
      }
      setValue={async (e) => {
        const prefix = e.target.value;
        setSearchFilter(prefix);
        onChange(prefix);
      }}
      inputProps={{
        style: {
          height: "48px",
        },
      }}
    />
  );
};
