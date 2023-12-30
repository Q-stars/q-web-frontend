'use client'

import Header from '../components/header/header'
import Back from '../components/back/back'

import styles from './about.module.scss'

export default function Page() {
  return (
    <div>
      <Header index={'about'} />
      <div className={`${styles.sectionText} ${styles.aboutBg}`}>
        <div className={styles.textContent}>
          <h1 className={styles.textCenter} style={{ marginBottom: '15.2rem' }}>
            Distribution architecture on large sparse network{' '}
          </h1>
          <section>
            <h2>Bridging the AI Gap for Non-IT Businesses</h2>
            <p>
              Highlights the challenges small to medium-sized businesses face in
              AI integration, especially those outside the IT sector, and
              Informy.ai’s role in democratizing AI utilization.
            </p>
          </section>

          <section>
            <h2>Transforming Business Operations through Effective Data Use</h2>
            <p>
              Discusses the potential of businesses, like restaurants, to
              transform operations by analyzing and utilizing their own data
              effectively, a core capability provided by Informy.ai.
            </p>
          </section>

          <section>
            <h2>Making Large Language Models Accessible to All</h2>
            <p>
              Describes Informy.ai’s mission to provide SMBs with user-friendly
              AI tools, bridging the gap between advanced technology and
              practical business applications.
            </p>
          </section>

          <section>
            <h2>
              Connecting ML Professionals and Businesses on a Secure Platform
            </h2>
            <p>
              Introduces a decentralized platform for talent matching where
              businesses can find ML professionals, with secure, transparent
              transactions and Zero-Knowledge proofs to ensure satisfaction.
            </p>
          </section>

          <section>
            <h2>
              Comprehensive Ecosystem from Data Aggregation to Model Utilization
            </h2>
            <p>
              Offers a holistic approach to ML model development, from data
              collection to crowdsourced model contributions, incentivized
              through a token-based ecosystem.
            </p>
          </section>

          <section>
            <h2>Staying Ahead with Community-Driven Innovations</h2>
            <p>
              Addresses the evolving landscape of LLM development and
              Informy.ai’s strategy to stay ahead through community proposals
              and adapting to the latest trends in lighter LLMs, multi-modal
              models, and more.
            </p>
          </section>

          <section>
            <h2>Staying Ahead with Community-Driven Innovations</h2>
            <p>
              Addresses the evolving landscape of LLM development and
              Informy.ai’s strategy to stay ahead through community proposals
              and adapting to the latest trends in lighter LLMs, multi-modal
              models, and more.
            </p>
          </section>

          <section>
            <h2>A Revolutionary Platform for Collaborative AI Innovation</h2>
            <p>
              Concludes by positioning Informy.ai as a pioneer in democratizing
              LLM access and fostering innovation and collaboration within the
              ML community.
            </p>
          </section>
        </div>
      </div>
      <Back />
    </div>
  )
}
