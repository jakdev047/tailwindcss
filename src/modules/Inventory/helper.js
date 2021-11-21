// search
export const filterData = (keywords, allData, setRowDto) => {
  const regex = new RegExp(keywords?.toLowerCase());
  let newDta = allData?.filter((item) =>
    regex.test(item?.title?.toLowerCase())
  );
  setRowDto({ Result: newDta });
};
