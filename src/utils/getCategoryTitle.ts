export function getCategoryTitle(groupId: string): string {
  switch (groupId) {
    case 'quick-lunches':
      return '3-Minute Protein Lunches';
    case 'chicken-omelettes':
      return 'Chicken Egg Omelettes';
    case 'protein-bowls':
      return 'Protein Power Bowls';
    case 'smoothie-bowls':
      return 'Smoothie Bowls';
    case 'desserts':
      return 'Simple Delicious Desserts';
    case 'protein-snacks':
      return 'Protein-Rich Snacks';
    default:
      return 'Recipe Variations';
  }
}