import { Clear, Search } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";

export default function FilterSearch({
  placeholder,
  value,
  setValue,
  cancelHandler,
  width,
  crossClassName,
  classes,
}) {
  return (
    <div
      component="form"
      className={classes ? `default-search ${classes}` : `default-search`}
    >
      <IconButton
        type="button"
        sx={{
          p: "8px",
          "&.MuiButtonBase-root": {
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
          "&.MuiTouchRipple-root": {
            "&:focus": {
              backgroundColor: "transparent",
            },
          },
        }}
        aria-label={placeholder ? placeholder : "search"}
      >
        <Search
          sx={{
            "&.MuiSvgIcon-root": {
              color: "#88898E",
            },
          }}
        />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, width: 300 }}
        placeholder={placeholder ? placeholder : "Search"}
        inputProps={{ "aria-label": placeholder ? placeholder : "search" }}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            setValue(e.target.value);
          }
        }}
      />
      {(value.length || 0) > 0 && (
        <span
          className={crossClassName ? `pointer ${crossClassName}` : "pointer"}
          onClick={() => cancelHandler()}
        >
          <Clear
            sx={{
              "&.MuiSvgIcon-root": {
                color: "#88898E",
              },
            }}
          />
        </span>
      )}
    </div>
  );
}
