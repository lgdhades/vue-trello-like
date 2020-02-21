
import store from '@/store'

const nodeStatus = {
  eventType: 'message',
  handle: function (event) {
    const parsed = JSON.parse(event.data);
    console.log(parsed);
    store.commit('permuteCandidature', { data: parsed} )
  }
}

export default nodeStatus
