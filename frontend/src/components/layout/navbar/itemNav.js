const NavLink = ({ className, children, href }) => (
  <a className={className} href={href}>
    {children}
  </a>
);

export default NavLink;
