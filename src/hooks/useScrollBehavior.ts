import { useEffect } from 'react';
import { scrollToPosition, getScrollPosition } from '../utils/scrollControl';

export function useScrollBehavior(
  selectedGroup: string | null,
  selectedRecipeId: number | null,
  showSelector: boolean
) {
  useEffect(() => {
    const position = getScrollPosition(selectedGroup, selectedRecipeId, showSelector);
    scrollToPosition(position);
  }, [selectedGroup, selectedRecipeId, showSelector]);
}