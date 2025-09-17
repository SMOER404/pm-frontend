// CustomPrice component not available in UI Kit
export const Price = ({ value, currency = '₽', ...props }: any) => (
  <span {...props}>{value} {currency}</span>
);