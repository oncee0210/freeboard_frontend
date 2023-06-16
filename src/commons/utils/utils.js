export const getDateTime = (createdat) => {
  let originalDate = createdat;
  let date = new Date(originalDate);
  let formattedDate = date.toISOString().slice(0, 19).replace("T", " ");

  return formattedDate;
}