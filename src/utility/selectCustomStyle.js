import { 
  lightGray,
  primaryColor,
  secondaryColor,
  whiteColor
} from "./color";


export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: "32px",
    height: "32x",
    borderRadius: "4px",
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: "32px",
    padding: "0 6px",
  }),
  valueOption: (provided, state) => ({
    ...provided,
    zIndex: 999999,
  }),

  input: (provided, state) => ({
    ...provided,
    margin: "0px",
  }),
  indicatorSeparator: (state) => ({
    display: "none",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: "32px",
  }),
  option: (provided, { isDisabled, isFocused, isSelected }) => ({
    ...provided,
    fontWeight: 500,
    fontSize: 13,
    lineHeight: "20px",
    letterSpacing: '0.02em',
    color: isDisabled ? lightGray : isSelected ? secondaryColor : primaryColor,
    backgroundColor: isDisabled
      ? lightGray
      : isSelected
      ? secondaryColor
      : isFocused
      ? secondaryColor
      : whiteColor,
    ":active": {
      backgroundColor: !isDisabled
        ? isSelected
          ? secondaryColor
          : whiteColor
        : whiteColor,
    },
    zIndex: 99999999,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: 16,
    textOverflow: "ellipsis",
    maxWidth: "95%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    color: lightGray,
  }),
};


