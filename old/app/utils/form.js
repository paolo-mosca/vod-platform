export function getSelectOptions (items, valueField = 'id', labelField = 'name') {
  if (!items) { return }
  return items.map((item) => ({
    value: item[valueField],
    label: item[labelField]
  }))
}
