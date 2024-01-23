function timeConversion(s) {
  let strArr = s.split(":");
  let hour = strArr[0];
  let isPM = strArr[2].includes("PM");
  let isAM = strArr[2].includes("AM");

  if (isPM && hour !== "12") {
    hour = (Number(hour) + 12).toString();
  }
  if (isAM && hour === "12") {
    hour = "00";
  }

  strArr[0] = hour;
  strArr[2] = strArr[2].substring(0, 2);

  let result = strArr.join(":");
  console.log(result);

  return result;
}
