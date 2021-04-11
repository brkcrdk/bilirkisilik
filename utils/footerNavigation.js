const footerNavigation = (data) => {
  const footerNav = data.filter((item) => !item.isMainLink);
  const initialNavigation = [
    {
      linkLabel: 'Anasayfa',
      linkRoute: '/',
    },
  ];
  return initialNavigation.concat(footerNav);
};

export default footerNavigation;
