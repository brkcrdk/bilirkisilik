import Layout from 'layout';
import { handleNavigation, footerNavigation } from 'utils';
import { pageSettings, heroSlides } from 'queries';
import { Hero, Services, WorkWithUs, Faq } from 'page-components/Home';

export default function Home({ settings, slides }) {
  console.log(slides);
  return (
    <Layout settings={settings}>
      <Hero data={slides} />
      <WorkWithUs />
      <Services />
      <Faq />
    </Layout>
  );
}

export async function getStaticProps() {
  const settings = await pageSettings();
  const slides = await heroSlides();
  const navigation = handleNavigation(settings.navigasyons);
  const footerNav = footerNavigation(settings.navigasyons);

  return {
    props: {
      settings: {
        navigation,
        footerNav,
        settings: settings.settings[0],
      },
      slides,
    },
  };
}
