import Layout from 'layout';
import { handleNavigation, footerNavigation } from 'utils';
import { pageSettings, innerPages } from 'queries';

function DetailPage({ settings, contentData }) {
  console.log(contentData);
  return (
    <Layout settings={settings}>
      <div>This is detail page</div>;
    </Layout>
  );
}

export default DetailPage;

export async function getServerSideProps(context) {
  const settings = await pageSettings();
  const footerNav = footerNavigation(settings.navigasyons);
  const navigation = handleNavigation(settings.navigasyons);
  const contentData = await innerPages(context?.query?.slug);
  return {
    props: {
      settings: {
        navigation,
        footerNav,
        settings: settings.settings[0],
      },
      contentData,
    },
  };
}
