import { adminStore } from './stores/adminStore'
import { dataStore } from './stores/dataStore'
import { reactStore } from './stores/reactStore'

export const globalStore = {
  adminStore: adminStore,
  reactStore: reactStore,
  dataStore: dataStore,
}
