import Layout from 'layout';
import { handleNavigation, footerNavigation } from 'utils';
import { pageSettings, heroSlides, whyUs, services, faq } from 'queries';
import { Hero, Services, WorkWithUs, Faq } from 'page-components/Home';

function Home({ settings, slides, whyUsData, servicesData, faqData }) {
  return (
    <Layout settings={settings}>
      <Hero data={slides} />
      <WorkWithUs data={whyUsData} />
      <Services data={servicesData} />
      <Faq data={faqData} />
    </Layout>
  );
}

export default Home;

export async function getStaticProps() {
  const settings = await pageSettings();
  const footerNav = footerNavigation(settings.navigasyons);
  const navigation = handleNavigation(settings.navigasyons);
  const slides = await heroSlides();
  const whyUsData = await whyUs();
  const servicesData = await services();
  const faqData = await faq();

  return {
    revalidate: 1,
    props: {
      settings: {
        navigation,
        footerNav,
        settings: settings.settings[0],
      },
      slides,
      whyUsData,
      servicesData,
      faqData,
    },
  };
}
