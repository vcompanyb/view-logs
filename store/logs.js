export const state = () => ({
  list: [
    {
      id: 1,
      date: '10/10/21 15:40',
      action: 'Log In',
      user: 'Juan Alberto',
      isFixed: false,
    },
    {
      id: 2,
      date: '10/10/21 16:40',
      action: 'Delete User',
      user: 'Juan Alberto',
      isFixed: true,
    },
  ],
})

export const mutations = {
  add(state, log) {
    state.list.push(log)
  },
  remove(state, logToRemove) {
    const logIndex = state.list.findIndex((log) => log.id === logToRemove.id)
    if (logIndex >= 0) {
      state.list.splice(logIndex, 1)
    }
  },
  update(state, logToUpdate) {
    const logIndex = state.list.findIndex((log) => log.id === logToUpdate.id)
    if (logIndex >= 0) {
      state.list.splice(logIndex, 1, JSON.parse(JSON.stringify(logToUpdate)))
    }
  },
}
