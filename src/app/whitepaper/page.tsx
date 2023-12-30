'use client'

import Image from 'next/image'

import { MathJaxProvider, MathJaxFormula } from 'mathjax3-react'

import Header from '../components/header/header'
import Back from '../components/back/back'

import styles from '../about/about.module.scss'

const subscript = (note1: string, note2: string) =>
  formula(`${note1}_{${note2}}`)

const formula = (formu: string) => (
  <MathJaxProvider>
    <MathJaxFormula formula={`$$${formu}$$`} />
  </MathJaxProvider>
)

export default function Page() {
  if (typeof window === 'undefined') return

  return (
    <div>
      <Header index={'whitepaper'} />
      <div className={`${styles.sectionText} ${styles.whitepaperBg}`}>
        <div className={styles.textContent}>
          <h1 className={styles.textCenter}>Whitepaper</h1>
          <section>
            <h2>Current State of Large Language Models</h2>
            <p>
              The industry currently focuses on the &apos;Less data&apos;
              approach when training large language models. The consensus is
              that while alignment in LLMs demands extensive data and
              computational power, the key is not merely in accumulating data.
              This perspective challenges the traditional approach of data-heavy
              models.
            </p>
            <p>
              The last decade has seen a shift from enterprise cloud adoption to
              ToC applications. This shift has resulted in data quantity
              triumphing over quality. However, this model is in contrast to
              human cognitive processes. Unlike these data-intensive models, the
              human brain does not rely on vast amounts of information to
              process solutions. It is capable of reliable problem-solving,
              self-reflection, and integrative thinking with comparatively less
              data.
            </p>
          </section>

          <section>
            <h3>Training Paradigms and Logical Thinking</h3>
            <p>
              The present training methodology involves human experts who learn
              from the internet and then impart this knowledge to models. This
              creates a paradox where models are being taught information they
              already possess, raising questions about their inherent reasoning
              capabilities.
            </p>
            <p>
              Sole reliance on internet data for model training is insufficient
              for developing logical thinking. This approach overlooks the vast
              array of information not present on the internet.
            </p>
          </section>

          <section>
            <h3>Future Directions in Model Training</h3>
            <p>
              The challenge is to find simple methods to activate logical
              thinking in models. This could involve a shift in training methods
              to include data that stimulate logical and critical thinking
              processes, moving beyond the current internet-centric approach.
            </p>
            <p>
              Current models lack sufficient training in logical thinking modes
              due to data and training limitations. There is a need to explore
              new training paradigms that can adequately activate and utilize
              these modes within models.
            </p>
            <p>
              Exploring the utilization of sparse networks in the context of
              logic training could be key. These networks might offer more
              efficient ways to train models in logical reasoning, moving away
              from the current data-heavy approaches.
            </p>
            <p>
              There might exist a straightforward method to activate logical
              thinking, as relying solely on internet-based training is
              inadequate for learning logical reasoning. The internet is just a
              small part of all the information available in the world. It is
              well-known that when models perform inference, different inputs
              and tasks activate different parts of the model, including those
              responsible for logical thinking. However, projecting the current
              operation and reasoning processes of Large Language Models (LLMs)
              onto neural networks, we observe that Sparse networks show low
              levels of activity, while Dense networks are highly active.
              Therefore, we hypothesize that due to limitations in training data
              or other factors, the model does not sufficiently activate neurons
              in the sparse network. This implies that the model&apos;s
              activation patterns for logical thinking have not been adequately
              trained and expressed. Expanding further, this observation
              suggests that for more effective logical reasoning, LLMs might
              benefit from a more balanced engagement of both Sparse and Dense
              networks. This could potentially be achieved through diversified
              training approaches that include a broader range of data types and
              reasoning tasks, thereby enriching the model&apos;s capability to
              process and reason with logical constructs.
            </p>
          </section>

          <section>
            <h3>Decentralizing Data Across Sparse Networks</h3>
            <p>
              Currently, sparse networks, where only a few neurons are
              interconnected, are underused. These networks offer potential
              pathways for more efficient data processing and reasoning. By
              distributing decentralized human reaction and behavior data across
              sparse networks, there&apos;s potential to enhance the efficiency
              and reasoning capabilities of large models.
            </p>
          </section>

          <section>
            <h3>
              Unleashing the Potential of Personalized LLMs: Overcoming Data and
              Resource Barriers with Q &quot;
            </h3>
            <p>
              The advent of sparse network architectures and the shift towards
              decentralized data ownership could reshape the landscape of LLMs.
              These developments herald a new era where personalized LLMs,
              tailored to individual needs and preferences, are becoming an
              achievable reality.
            </p>
            <p>
              Despite the potential, the path to actualizing personalized LLMs
              has been obstructed by two significant hurdles:
            </p>

            <p>
              <b>Centralized Data Control by Major Corporations: </b>
              The landscape of digital data ownership is predominantly dominated
              by large corporations such as Instagram, TikTok, and Twitter. This
              centralization of data control means that personal user data is
              stored and managed in a way that restricts user access and
              utility. Such a scenario severely limits the ability of
              individuals to employ their own data for training personalized
              LLMs, consequently stifling the advancement of user-specific
              language models.
            </p>
            <p>
              <b>Resource Constraints of Personal Computing Devices: </b>
              The second major challenge lies in the limitations of personal
              computing devices like PCs and mobile phones. The computational
              power and storage capacity required for training and hosting LLMs
              are often beyond the capabilities of these devices. This gap
              between the resource needs for personalized LLMs and the available
              capabilities of personal devices has rendered the concept
              impractical for widespread use.
            </p>
          </section>

          <section>
            <h3>Q&apos;s Solution to Personalized LLMs</h3>
            <p>
              Addressing these challenges, Q* introduces a groundbreaking
              solution that harmonizes decentralized data ownership with sparse
              network training. This innovative approach empowers individuals to
              leverage their own data, overcoming the constraints of
              corporate-controlled, centralized data repositories. Furthermore,
              Q*&apos;s method significantly reduces the computational and
              storage demands, making it viable for anyone with a standard
              personal device to not only train but also host their own
              personalized LLMs. This advancement marks a pivotal shift in the
              democratization of language model technology, paving the way for a
              future where personalized digital experiences are the norm, not
              the exception.
            </p>
          </section>

          <section>
            <h2>Q*.ai in Decentralzinig Data Across Sparse Networks</h2>
            <p>
              Q*.ai is revolutionizing the landscape of Large Language Models
              (LLMs) by building a decentralized data and model hub, leveraging
              the concept of decentralizing data across sparse networks. This
              innovative approach aims to transform the current norms of data
              processing in LLMs. By dispersing a diverse array of human
              behavioral and reaction data throughout sparse networks, Q*.ai is
              not just enhancing the reasoning and inference abilities of its
              models but also fostering a more dynamic and distributed model of
              data and knowledge management. This decentralized hub stands as a
              testament to their commitment to moving beyond the limitations of
              traditional, data-intensive models. It mirrors the human
              brain&apos;s efficiency in processing complex information with
              minimal data, heralding a new era in AI where data is not just
              abundant but strategically utilized for more nuanced and
              intelligent model development.
            </p>
          </section>

          <h3 style={{ marginTop: '3rem' }}>
            <b> Training of Personalized Q Network</b>
          </h3>

          <section>
            <h4>Network Distillation</h4>
            <p>
              Network distillation has been a highly effective approach in
              training a small, dense model to achieve performance levels
              comparable to a larger, sparse model. Evidence from prior research
              suggests that a sparse network with hundreds of billions of
              parameters can be successfully distilled into a more compact,
              dense model with hundreds of millions of parameters. This section
              delves into the specific process of training a dense, personalized
              LLM by distilling knowledge from a larger, sparse LLM.
            </p>
            <p>
              To clarify our methodology, we introduce two key terms: the
              &quot;Personalized Q Network&quot; and the &quot;Teacher
              Model.&quot; The Personalized Q Network refers to the end product
              of our distillation process — a dense, efficient personalized LLM
              tailored for use on personal or mobile devices. The Teacher Model,
              on the other hand, is the larger, sparse LLM from which we distill
              knowledge.
            </p>
            <p>
              The primary concept involves leveraging natural language
              rationales—intermediate reasoning steps—from the teacher model to
              train the Q network more efficiently. These rationales, using a
              chain of thought (CoT) approach, elucidate the links between input
              questions and their outputs, providing enriched guidance for
              training the Q network beyond standard labels.
            </p>
            <p>
              This training comprises two phases. Initially, we employ few-shot
              CoT prompting to extract rationales from the teacher model. This
              involves creating exemplars for the teacher&apos;s input, each
              containing an input, a rationale, and an output. These examples
              enable the teacher to generate rationales for new inputs, learning
              in-context through provided CoT examples paired with rationales.
            </p>
            <p>
              In the second phase, we integrate these rationales into the Q
              network&apos;s training. Here, the training is framed as a
              multi-task challenge, involving a novel rationale generation task
              alongside the usual label prediction. This dual-focus training
              encourages the model to generate reasoning steps and improve label
              predictions. Task prefixes, like [label] and [rationale], are
              added to inputs to help the model distinguish between the two
              tasks.
            </p>
            <p>
              The Q network&apos;s objective function can be formulated as
              follows:
            </p>
            <p className={styles.inlineRow}>
              We denote the dataset as
              <Image
                className={styles.inline}
                src="/math/math_8.jpg"
                alt="Math formula"
                width="145"
                height="64"
              />
              where {subscript('x', 'i')} represents an input,
              {subscript('r', 'i')} represents the rationale extracted from the
              teacher, {subscript('y', 'i')} represents the desired output
              label. Let {formula('f')} denotes the Q network. The rationalel
              prediction loss can be framed as
            </p>
            <Image
              className={styles.inline}
              src="/math/math_9.jpg"
              alt="Math formula"
              width="264"
              height="78"
            />
            <p>The label prediction loss can be framed as</p>
            <Image
              className={styles.inline}
              src="/math/math_10.jpg"
              alt="Math formula"
              width="264"
              height="78"
            />
            <p>And the overall loss is framed as</p>
            <Image
              className={styles.inline}
              src="/math/math_11.jpg"
              alt="Math formula"
              width="264"
              height="78"
            />
          </section>

          <section>
            <h4>Token Incentives for Personalized Q Network</h4>
            <p>
              Community members of Q* can contribute their personal data from
              various sources like email, Instagram, TikTok, and Twitter, to
              develop their personalized Q network. This process involves using
              members&apos; personal data, which is stored off-chain and
              encrypted to guarantee privacy.
            </p>
            <p>
              Users receive Q* tokens as an incentive for contributing their
              personal data. To use their personalized Q network, members must
              burn Q* tokens, initiating a cycle that benefits data volume,
              model quality, and token deflation. Increased data contributions
              enhance the model&apos;s performance, leading to more frequent
              usage of the model. This, in turn, results in more Q* tokens being
              burned, driving token deflation and fostering a sustainable
              ecosystem.
            </p>
            <p>
              Tokens are distributed in epochs. During each epoch,
              community-contributed data trains the personalized Q network. The
              network records loss during each training iteration. At
              epoch&apos;s end, data points causing loss above the epoch&apos;s
              average loss are rewarded. The reward for each data point is
              proportional to its loss weight among all qualifying data points,
              multiplied by the total epoch rewards. This system encourages the
              submission of unique data, pushing the network to learn and adapt.
            </p>
            <p>
              The total token amount allocated per epoch is determined by the
              following formula
            </p>
            <p className={styles.inlineRow}>
              Let {subscript('T', 'max')} denotes the maximum amount of tokens
              that can be released within each epoch, and let L denotes the
              total loss of all data points qualifying for token rewards. The
              total amount of tokens allocated within that epoch is determined
              by the following formula:
            </p>
            <Image
              className={styles.inline}
              src="/math/math_12.jpg"
              alt="Math formula"
              width="224"
              height="63"
            />
            <p>
              This formula ensures fair and effective distribution of rewards,
              aligning with the network&apos;s learning objectives and community
              engagement.
            </p>
          </section>

          <section>
            <h4>Decentralized Data Hub</h4>
            <p>
              A hub that aggregates cross-domain and domain-specific data is
              pivotal for supervised fine-tuning and preference learning in
              LLMs. The utilization of data is meticulously recorded on-chain,
              with token rewards allocated to contributors of high-quality data
              that proves valuable to model developers.
            </p>
          </section>

          <section>
            <h4>Decentralized Model Hub</h4>
            <p>
              A platform that encourages the crowdsourcing of model
              contributions incentivized through token rewards. Q* also offers
              its own endpoints, enabling community members to test models on
              various inputs. Model interactions are recorded on-chain, with
              tokens distributed to reward contributors whose models are
              frequently utilized.
            </p>
          </section>

          <section>
            <h4>Token Distribution Mechanism</h4>
            <p>
              Q*.ai tokens are distributed according to an epoch-based schedule
              to users contributing high-quality data or models to the
              community. The percentage of tokens distributed to data
              contributors and model contributors is determined by the governing
              process. Tokens get distributed to data contributors according to
              the utility value of the data, and the utility value of the data
              is computed as follows.
            </p>
            <p>
              Data collected on our platform are used in two ways: 1) supervised
              fine-tuning of pre-trained LLMs, and 2) human preference learning
              of pre-trained LLMs.
            </p>
            <p className={styles.inlineRow}>
              Let {subscript('D', 'i')} be the dataset we’d like to compute
              utility values for. Let{' '}
              {formula(`M^{D_{i}} = \\{M_{0}, M_{1}, M_{2}, \\ldots\\}`)} be the
              utility values of the models that use {subscript('D', 'i')} within
              this epoch. Let {formula('U_{i}^{M}')} denote the utility value of
              the model {subscript('M', 'i')}, which we’ll discuss in more
              detail in the next section. The utility value of{' '}
              {subscript('D', 'i')} is then computed as the summation of utility
              values of all models that utilizes {subscript('D', 'i')}, which is
            </p>
            <Image
              src="/math/math_13.jpg"
              alt="Math formula"
              width="120"
              height="114"
            />
            <p className={styles.inlineRow}>
              Let T be the total number of tokens allocated to data
              contributors. Tokens allocated to contributors of{' '}
              {subscript('D', 'i')} is
            </p>
            <Image
              src="/math/math_2.jpg"
              alt="Math formula"
              width="120"
              height="114"
            />
          </section>

          <section>
            <h4>Automatic Fine Tuning</h4>
            <p>
              Q*.ai enables token holders, including those without technical
              expertise, to earn rewards through a straightforward token staking
              process. During each epoch, Q*.ai utilizes available supervised
              fine-tuning and human preference data to enhance existing LLMs
              continuously. This process involves a seamless integration of data
              injection and model refinement. The rewards generated from the
              improved model are then distributed among participating token
              stakers. The fine-tuning of these models incorporates supervised
              fine-tuning and direct preference optimization. We prefer direct
              preference optimization over Reinforcement Learning from Human
              Feedback (RLHF) for its stability and faster convergence. A
              detailed explanation of our direct optimization learning algorithm
              is provided below.
            </p>
          </section>

          <section>
            <h4>Directed Preference Optimization in a Nutshell</h4>
            <p className={styles.inlineRow}>
              Let {formula(`D = \\{x^{i}, y^{i}_{w}, y^{i}_{l}\\}`)} be a sample
              instance from the human preference dataset, where {formula('x')}{' '}
              denotes user prompt, {formula('y_{m}')}, {formula('y_{l}')} denote
              the preferred and dispreferred completion from human label. The
              preferences are assumed to be generated by a latent reward model{' '}
              {formula('r(y,x)')}. The human preference distribution can be
              written as 
            </p>
            <Image
              src="/math/math_3.jpg"
              alt="Math formula"
              width="344"
              height="67"
            />
            <p>
              The objective function of the reward model over a dataset D is
              framed as
            </p>
            <Image
              src="/math/math_4.jpg"
              alt="Math formula"
              width="389"
              height="58"
            />
            <p>The objective function of the LLM can then be written as</p>
            <Image
              src="/math/math_5.jpg"
              alt="Math formula"
              width="407"
              height="63"
            />
            <p className={styles.inlineRow}>
              where {subscript('D', 'kl')} represents the KL divergence between
              the reference policy and the language model policy to optimize.
            </p>
            <p>
              It can be shown the language model policy has a closed-form
              solution
            </p>
            <Image
              src="/math/math_14.jpg"
              alt="Math formula"
              width="266"
              height="153"
            />
            <p className={styles.inlineRow}>
              where {formula('Z(x)')} is the normalizing factor
            </p>
            <Image
              src="/math/math_15.jpg"
              alt="Math formula"
              width="237"
              height="74"
            />
            <p>Rearranging, we end up with</p>
            <Image
              src="/math/math_16.jpg"
              alt="Math formula"
              width="297"
              height="87"
            />
            <p>
              Plugging this into the human preference distribution, we end up
              with
            </p>
            <Image
              src="/math/math_17.jpg"
              alt="Math formula"
              width="356"
              height="67"
            />
            <p>The DPO objective function can then be written as</p>
            <Image
              src="/math/math_18.jpg"
              alt="Math formula"
              width="521"
              height="63"
            />
            <p>
              The above can be conveniently optimized by any gradient-based
              optimization method without having to resort to RL.
            </p>
          </section>

          <section>
            <h3>Staying Ahead: Adapting to LLM Trends</h3>
            <p>
              The landscape of LLM development is constantly evolving. Trends
              indicate a preference for:
            </p>
            <ul>
              <li>Lighter LLMs trained with a mixture of experts.</li>
              <li>Models with longer context windows.</li>
              <li>
                Multi-modal models, especially those combining vision and
                language.
              </li>
              <li>
                Models that are easily enhanced with Retrieval-Augmented
                Generation (RAG).
              </li>
            </ul>
            <p>
              To stay at the forefront of these trends, Q*.ai empowers its token
              holders to propose Q* Improvement Proposals (IIPs). These IIPs
              play a crucial role in refining the token distribution rules and
              ensuring that the models contributed align with the latest LLM
              developments.
            </p>
          </section>

          <section>
            <h2>Conclusion: Pioneering ML Development with Q*.ai</h2>
            <p>
              Q*.ai stands out as a pioneering platform, not just in
              democratizing access to LLMs but also in driving innovation and
              collaboration within the ML community. Its unique approach of
              combining decentralized technologies with ML development paves the
              way for a more inclusive, efficient, and transparent ecosystem in
              the realm of artificial intelligence.
            </p>
          </section>

          <section>
            <h2>QNAI Allocations</h2>
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Percentage</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Investors</td>
                  <td>15%</td>
                  <td>
                    <p>Q Investors</p>
                    <i>Cliff/Vest: 1 yr cliff and 4 yr vest</i>
                  </td>
                </tr>
                <tr>
                  <td>Team + Advisor</td>
                  <td>15%</td>
                  <td>
                    <p>Q founding team and consultants</p>
                    <b>
                      <i>Cliff/Vest: 1 yr cliff and 5 yr vest</i>
                    </b>
                  </td>
                </tr>
                <tr>
                  <td>Core Contributor</td>
                  <td>5%</td>
                  <td>
                    <p>
                      AI Sparse Network researcher, AI model training engineer
                      and software developer partners
                    </p>
                    <i>Cliff/Vest: 1 yr cliff and 4 yr vest</i>
                  </td>
                </tr>
                <tr>
                  <td>Community Provisions</td>
                  <td>12%</td>
                  <td>
                    <p>
                      for those who performed work for Q and powered or
                      developed its underlying technology
                    </p>
                    <i>Cliff/Vest: 1 yr cliff and 4 yr vest</i>
                  </td>
                </tr>
                <tr>
                  <td>Community Rebates</td>
                  <td>12%</td>
                  <td>
                    <p>
                      rebates in Q Tokens to partially cover the costs of
                      onboarding to Q Spares Network from Open AI and other open
                      sourced model
                    </p>
                    <i>Cliff/Vest: 1 yr cliff and 4 yr vest</i>
                  </td>
                </tr>
                <tr>
                  <td>Research/ Development</td>
                  <td>12%</td>
                  <td>
                    <p>develop, test, deploy and maintain the Q protocol</p>
                    <i>Cliff/Vest: 1 yr cliff and 4 yr vest</i>
                  </td>
                </tr>
                <tr>
                  <td>Donation</td>
                  <td>3%</td>
                  <td>
                    <p>
                      donations to highly regarded institutions and
                      organizations
                    </p>
                    <i>Cliff/Vest: 1 yr cliff and 4 yr vest</i>
                  </td>
                </tr>
                <tr>
                  <td>Strategic Reserve</td>
                  <td>10%</td>
                  <td>
                    Support activities in line with the Foundation&apos;s
                    mission, as detailed in the previous series blog
                  </td>
                </tr>
                <tr>
                  <td>Unallocated</td>
                  <td>16%</td>
                  <td>
                    Foundation to support the Q Sparse Network community, with
                    usage determined by the community&apos;s decisions
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 
          <p>Automatic Fine Tuning</p>
          <p>
            Q*.ai enables token holders, including those without technical
            expertise, to earn rewards through a straightforward token staking
            process. During each epoch, Q*.ai utilizes available supervised
            fine-tuning and human preference data to enhance existing LLMs
            continuously. This process involves a seamless integration of data
            injection and model refinement. The rewards generated from the
            improved model are then distributed among participating token
            stakers. The fine-tuning of these models incorporates supervised
            fine-tuning and direct preference optimization. We prefer direct
            preference optimization over Reinforcement Learning from Human
            Feedback (RLHF) for its stability and faster convergence. A detailed
            explanation of our direct optimization learning algorithm is
            provided below.
          </p>
          <p>Directed Preference Optimization in a Nutshell</p>
          <p>
            Let D = {`{(xi, yiw, yil)}`} be a sample instance from the human
            preference dataset, where x denotes user prompt, ym, yl denote the
            preferred and dispreferred completion from human label. The
            preferences are assumed to be generated by a latent reward model
            r(y,x). The human preference distribution can be written as
          </p>
          <Image
            src="/math/math_3.jpg"
            alt="Math formula"
            width="287"
            height="56"
          />
          <p>
            The objective function of the reward model over a dataset D is
            framed as
          </p>
          <Image
            src="/math/math_4.jpg"
            alt="Math formula"
            width="389"
            height="58"
          />
          <p>The objective function of the LLM can then be written as</p>
          <Image
            src="/math/math_5.jpg"
            alt="Math formula"
            width="407"
            height="63"
          />
          <p>
            where DKL represents the KL divergence between the reference policy
            and the language model policy to optimize. <br></br>It can be shown
            the language model policy has a closed-form solution
          </p>
          <Image
            src="/math/math_6.jpg"
            alt="Math formula"
            width="274"
            height="49"
          />
          <p>where Z(x) is the normalizing factor</p>
          <Image
            src="/math/math_7.jpg"
            alt="Math formula"
            width="299"
            height="79"
          /> */}
        </div>
      </div>
      <Back />
    </div>
  )
}
