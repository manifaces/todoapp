import { Link, useMatch } from 'react-router-dom';

export type CustomLinkProps = {
  to: string;
  children?: React.ReactNode;
}

export const CustomLink: React.FC<CustomLinkProps> = ({children, to, ...props}) => {
  const match = useMatch(to);
  return (
    <Link to={to} {...props} data-active={match ? 'true' : 'false'}>
      {children ? children : null}
    </Link>
  );
};