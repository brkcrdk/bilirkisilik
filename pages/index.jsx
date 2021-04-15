import Layout from 'layout';
import { handleNavigation, footerNavigation } from 'utils';
import { pageSettings, heroSlides, nedenBiz } from 'queries';
import { Hero, Services, WorkWithUs, Faq } from 'page-components/Home';

export default function Home({ settings, slides, whyUs }) {
  return (
    <Layout settings={settings}>
      <Hero data={slides} />
      <WorkWithUs data={whyUs} />
      <Services />
      <Faq />
    </Layout>
  );
}

export async function getStaticProps() {
  const settings = await pageSettings();
  const footerNav = footerNavigation(settings.navigasyons);
  const navigation = handleNavigation(settings.navigasyons);
  const slides = await heroSlides();
  const whyUs = await nedenBiz();

  return {
    props: {
      settings: {
        navigation,
        footerNav,
        settings: settings.settings[0],
      },
      slides,
      whyUs,
    },
  };
}
