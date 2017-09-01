import Emitter from 'element-ui/lib/mixins/emitter'
import moment from 'moment'

export default {
  mixins: [Emitter],
  methods: {
    communicate (event, params = {}) {
      this.dispatch('ROOT', event, Object.assign({
        eventName: event
      }, params))
    },
    getMessage (text) {
      return {
        date: moment().format('YYYY-DD-MM HH:mm:ss'),
        name: this.name,
        msg: text
      }
    }
  }
}
