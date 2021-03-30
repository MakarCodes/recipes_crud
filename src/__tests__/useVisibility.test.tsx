import { renderHook, act } from '@testing-library/react-hooks';
import useVisibility from '../customHooks/useVisibility';

describe('useVisibility custom hook works correctly if', () => {
  it('toggles isVisible state correctly on toggleVisibility invoke', () => {
    const { result } = renderHook(() => useVisibility());

    expect(result.current.isVisible).toBeFalsy();

    act(() => {
      result.current.toggleVisibility();
    });

    expect(result.current.isVisible).toBeTruthy();

    act(() => {
      result.current.toggleVisibility();
    });

    expect(result.current.isVisible).toBeFalsy();
  });
});
