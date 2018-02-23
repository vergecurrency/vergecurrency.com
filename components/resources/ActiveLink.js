import { withRouter } from 'next/router';

const ActiveLink = ({ children, router, href }) => {
  const style = {
    color: router.pathname === href ? '#0f9dc1' : '#333333',
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
};

export default withRouter(ActiveLink);
