const handleNavigation = (data) => {
  const mainLinks = data.filter((item) => item.isMainLink === true);

  const customNavigations = mainLinks.map((item) => {
    if (item.hasSubLinks) {
      return {
        ...item,
        subLinks: data.navigasyons.filter(
          (link) => link.kategori === item.kategori && !link.hasSubLinks
        ),
      };
    }
    return item;
  });
  const initialNavigation = [
    {
      label: 'Anasayfa',
      route: '/',
    },
  ];

  return initialNavigation.concat(customNavigations);
};

export default handleNavigation;
