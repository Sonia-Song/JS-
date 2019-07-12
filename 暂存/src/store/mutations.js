import {LOGIN_IFRAME_URL  } from './mutation-types'


export default {
  [LOGIN_IFRAME_URL](state, {data}) {
    state.loginIframeUrl = data;
  },

}
