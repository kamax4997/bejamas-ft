import { AppDispatch, AppThunk } from '../store';
import { actions } from '../slices/dashboard';

const dashboardActions = {
  resetState: (): AppThunk => async (dispatch: AppDispatch): Promise<void> => {
    dispatch(
      actions.getInitialize()
    );
  },
  getTabs:
    (): AppThunk =>
    async (dispatch: AppDispatch): Promise<void> => {
      dispatch(
        actions.getInitialize(),
      );

    },
};

export default dashboardActions;
