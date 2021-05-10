import App from "next/app";
import Head from "next/head";
import 'react-dates/initialize';
import Layout from "../components/Layout";
import { getCategories } from "../utils/api";
import "../styles/index.scss";
import 'swiper/swiper.scss';
// import { withRedux } from '../lib/redux';
import { Provider } from 'react-redux';
import store from '../store';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store} >
      <Layout categories={pageProps.categories}>
        <Head>
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css"
          />
          <script src="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-XM1RXZ6R6M"></script>
          {/* <script dangerouslySetInnerHTML={
            { __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-XM1RXZ6R6M');
            `}
          }>
            
          </script> */}
          <script dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NH72Q3F');`}} ></script>
          <noscript dangerouslySetInnerHTML={{__html:`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NH72Q3F"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const categories = await getCategories();
  // Pass the data to our page via props
  return { ...appProps, pageProps: { categories, path: ctx.pathname } };
};

export default MyApp;
