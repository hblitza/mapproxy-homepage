import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import MDXContent from '@theme/MDXContent';

import Translate from '@docusaurus/Translate';

import styles from './index.module.css';

import Startpage from './startpage.mdx'

function MapProxyIntro() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          MapProxy
        </h1>
        <p className="hero__subtitle">
          <Translate>
            startpage-mapproxy-description
          </Translate>
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout>
      <MapProxyIntro />
      <div class="main-wrapper mainWrapper_node_modules-@docusaurus-theme-classic-lib-theme-Layout-styles-module">
        <main class="container container--fluid margin-vert--lg">
          <MDXContent>
            <Startpage />
          </MDXContent>
        </main>
      </div>
    </Layout>
  );
}
