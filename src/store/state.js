import { loadToken, loadTimestamp, loadUid, loadUser } from 'common/js/cache'

const state = {
  token: loadToken(),
  timestamp: loadTimestamp(),
  uid: loadUid(),
  user: loadUser()
}

export default state
