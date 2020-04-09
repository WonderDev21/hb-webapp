const freeCharacteristicsList = [
  {
    text: 'Assign work and track completion',
    translateid: 'app.plans.free.list.work',
    isChecked: true
  },
  {
    text: 'Group students into classes',
    translateid: 'app.plans.free.list.group',
    isChecked: true
  },
  {
    text: 'Teacher training access',
    translateid: 'app.plans.free.list.trainAccess',
    isChecked: false
  },
  {
    text: 'Student progress analytics access',
    translateid: 'app.plans.free.list.analytics',
    isChecked: false
  },
  {
    text: 'Customer support Mon - Fri',
    translateid: 'app.plans.free.list.support',
    isChecked: false
  },
  {
    text: 'Quarterly trends reports',
    translateid: 'app.plans.free.list.reports',
    isChecked: false
  }
]

export const getFreeCharacteristicsList = () => {
  return freeCharacteristicsList
}

export const getProCharacteristicsList = () => {
  const proCharacteristicsList = freeCharacteristicsList.map((characteristic) => ({
    ...characteristic, isChecked: true
  }))

  return proCharacteristicsList
}
