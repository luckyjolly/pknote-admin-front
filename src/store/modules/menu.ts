import { Module } from 'vuex'
import { GlobalStore } from '../index'
export interface MenuStore {
  isMenuRective: boolean // 标记当前菜单栏是否可显示隐藏的
  isFolded: boolean // 菜单栏隐藏
}
const menuStore: Module<MenuStore, GlobalStore> = {
  state() {
    return {
      isMenuRective: false,
      isFolded: true
    } as MenuStore
  },
  mutations: {
    setMenuRective(state, isMenuRective: boolean) {
      state.isMenuRective = isMenuRective
    },
    setFolded(state, isFolded: boolean) {
      state.isFolded = isFolded
    }
  }
}
export default menuStore
