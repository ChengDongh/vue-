/**
 * Created by Administrator on 2019/9/25/025.
 */
const getters = {
  token: state => state.user.token,
  CLICK_ITEM: state => state.component.clickItem,
  setDle: state => state.component.setDle
}
export default getters
