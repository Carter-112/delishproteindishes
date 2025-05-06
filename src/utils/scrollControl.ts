import { ScrollPosition } from '../types';

export function scrollToPosition(position: ScrollPosition) {
  const nav = document.querySelector('nav');
  const navHeight = nav?.offsetHeight || 0;
  
  if (position === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // Add a delay to ensure the DOM has updated
  setTimeout(() => {
    const header = document.querySelector('.bg-slate-800\\/80');
    if (header) {
      const headerTop = header.getBoundingClientRect().top + window.scrollY;
      // Reduce spacing to 3px (previously was 6px)
      window.scrollTo({ 
        top: headerTop - navHeight - 3, 
        behavior: 'smooth' 
      });
    }
  }, 100);
}

export function getScrollPosition(
  selectedGroup: string | null,
  selectedRecipeId: number | null,
  showSelector: boolean
): ScrollPosition {
  if (!selectedGroup) {
    return 'top';
  }
  return 'belowNav';
}