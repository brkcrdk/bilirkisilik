import Layout from 'layout';
import { handleNavigation, footerNavigation } from 'utils';
import { pageSettings } from 'queries';
import { Hero, Services, WorkWithUs, Faq } from 'page-components/Home';

export default function Home({ settings }) {
  return (
    <Layout settings={settings}>
      <Hero />
      <WorkWithUs />
      <Services />
      <Faq />
    </Layout>
  );
}

export async function getStaticProps() {
  const settings = await pageSettings();
  const navigation = handleNavigation(settings.navigasyons);
  const footerNav = footerNavigation(settings.navigasyons);

  return {
    props: {
      settings: {
        navigation,
        footerNav,
        settings: settings.settings[0],
      },
    },
  };
}
