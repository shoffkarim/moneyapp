import { selector } from '__data__/selectors'
import { RootState } from '../../__data__/store'
// import selector from "__data__/selectors"

export const mapStateToProps = (state: RootState) => ({
  data: selector.historyData.historyData(state)
})