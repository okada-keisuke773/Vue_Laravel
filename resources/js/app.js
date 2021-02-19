import Vue from 'vue'
// ルーティングの定義をインポートする
import router from './router'
// ルートコンポーネントをインポートする
import App from './App.vue'
//storeをインポート
import store from './store'

import './bootstrap'

new Vue({
  el: '#app',
  router, // ルーティングの定義を読み込む
  store,//storeの定義を読み込む
  components: { App }, // ルートコンポーネントの使用を宣言する
  template: '<App />' // ルートコンポーネントを描画する
})
