export const getRoleStrFromPerson = (person) => {
  const roles = [];
  if (person.companiesAsDirector.length) {
    roles.push('Director');
  }
  if (person.companiesAsShareholder.length) {
    roles.push('Shareholder');
  }
  if (person.companiesAsAccountant.length) {
    roles.push('Accountant');
  }
  return roles.join(' | ');
}