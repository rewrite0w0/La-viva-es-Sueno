import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import { ArticleTabs } from './Tabs';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--offset-2 col-4">
            <ArticleTabs />
          </div>
        </div>
      </div>
    </section>
  );
}
