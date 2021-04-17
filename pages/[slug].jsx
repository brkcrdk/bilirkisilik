import Layout from 'layout';
import { handleNavigation, footerNavigation } from 'utils';
import { pageSettings } from 'queries';

function DetailPage({ settings }) {
  return (
    <Layout settings={settings}>
      <div>This is detail page</div>;
    </Layout>
  );
}

export default DetailPage;

export async function getServerSideProps() {
  const settings = await pageSettings();
  const footerNav = footerNavigation(settings.navigasyons);
  const navigation = handleNavigation(settings.navigasyons);

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
