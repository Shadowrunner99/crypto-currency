import { asyncReducerCreator, asyncActionCreator } from '../redux';

describe('Reducer helpers', () => {
  describe('asyncReducerCreator', () => {
    const propperState = {
      error: null,
      loading: false,
      nestedState: { error: null, loading: false, data: null },
    };
    const actionCreator = asyncActionCreator('TEST');
    let result;
    beforeEach(() => {
      result = asyncReducerCreator(actionCreator);
    });
    it('should have all reducer props', () => {
      expect(result).toHaveProperty(actionCreator.REQUEST);
      expect(result).toHaveProperty(actionCreator.SUCCESS);
      expect(result).toHaveProperty(actionCreator.ERROR);
    });
    it('should set and call all handlers', () => {
      const mockRequest = jest.fn();
      const mockError = jest.fn();
      const mockSuccess = jest.fn();
      result = asyncReducerCreator(
        actionCreator,
        'nestedState',
        mockRequest,
        mockSuccess,
        mockError,
      );
      result[actionCreator.REQUEST](propperState, null);
      expect(mockRequest).toHaveBeenCalled();
      result[actionCreator.SUCCESS](propperState, null);
      expect(mockSuccess).toHaveBeenCalled();
      result[actionCreator.ERROR](propperState, null);
      expect(mockError).toHaveBeenCalled();
    });

    it('should work without handlers', () => {
      result = asyncReducerCreator(actionCreator, 'nestedState');
      expect(result).toBeInstanceOf(Object);

      result[actionCreator.REQUEST](propperState, null);
      expect(propperState.nestedState.loading).toBe(true);

      result[actionCreator.SUCCESS](propperState, null);
      expect(propperState.nestedState.loading).toBe(false);

      result[actionCreator.ERROR](propperState, { payload: 'test' });
      expect(propperState.nestedState.error).toBe('test');
    });

    it('should work without nestedState', () => {
      const mockRequest = jest.fn();
      const mockError = jest.fn();
      const mockSuccess = jest.fn();
      result = asyncReducerCreator(actionCreator, null, mockRequest, mockSuccess, mockError);
      result[actionCreator.REQUEST](propperState, null);
      expect(mockRequest).toHaveBeenCalled();
      result[actionCreator.SUCCESS](propperState, null);
      expect(mockSuccess).toHaveBeenCalled();
      result[actionCreator.ERROR](propperState, null);
      expect(mockError).toHaveBeenCalled();
    });
  });
});
