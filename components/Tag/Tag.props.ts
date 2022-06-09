export interface ITagProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: 's' | 'm' | 'l';
  children: React.ReactNode;
  color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
  href?: string;
}