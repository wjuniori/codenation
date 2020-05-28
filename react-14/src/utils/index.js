export function logErrorReportingService(error, info) {
  console.log(error, info);
}

export function sortByProperty(objA, objB, property) {
  const propertyA = objA[property].toLocaleLowerCase();
  const propertyB = objB[property].toLocaleLowerCase();

  if (propertyA < propertyB) {
    return -1;
  }
  if (propertyA > propertyB) {
    return 1;
  }

  // names must be equal
  return 0;
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  return dd + "/" + mm + "/" + yyyy;
}
