'use client'

import Image from 'next/image'

import Header from '../components/header/header'
import Back from '../components/back/back'

import styles from '../about/about.module.scss'

export default function Page() {
  return (
    <div>
      <Header index={'whitepaper'} />
      <div className={`${styles.sectionText} ${styles.whitepaperBg}`}>
        <h1 className={styles.textCenter}>Whitepaper</h1>
        <section>
          <h2>Current State of Large Language Models</h2>
          <p>
            The industry currently focuses on the &apos;Less data&apos; approach
            when training large language models. The consensus is that while
            alignment in LLMs demands extensive data and computational power,
            the key is not merely in accumulating data. This perspective
            challenges the traditional approach of data-heavy models.
          </p>
          <p>
            The last decade has seen a shift from enterprise cloud adoption to
            ToC applications. This shift has resulted in data quantity
            triumphing over quality. However, this model is in contrast to human
            cognitive processes. Unlike these data-intensive models, the human
            brain does not rely on vast amounts of information to process
            solutions. It is capable of reliable problem-solving,
            self-reflection, and integrative thinking with comparatively less
            data.
          </p>
        </section>

        <section>
          <h2>Training Paradigms and Logical Thinking</h2>
          <p>
            The present training methodology involves human experts who learn
            from the internet and then impart this knowledge to models. This
            creates a paradox where models are being taught information they
            already possess, raising questions about their inherent reasoning
            capabilities. Sole reliance on internet data for model training is
            insufficient for developing logical thinking. This approach
            overlooks the vast array of information not present on the internet.
          </p>
          <p>
            For SMBs, particularly those outside the IT sector, the journey into
            AI integration is fraught with challenges. These businesses often
            lack the necessary expertise and access to substantial data sets,
            which are crucial for implementing effective AI solutions. This
            disparity has created a gap where smaller enterprises struggle to
            leverage AI to their advantage. Recognizing this issue, solutions
            like Informy.ai have emerged, aiming to democratize AI utilization
            and empower these businesses.
          </p>
        </section>

        <section>
          <h2>Future Directions in Model Training</h2>
          <p>
            The challenge is to find simple methods to activate logical thinking
            in models. This could involve a shift in training methods to include
            data that stimulate logical and critical thinking processes, moving
            beyond the current internet-centric approach.
          </p>
          <p>
            Current models lack sufficient training in logical thinking modes
            due to data and training limitations. There is a need to explore new
            training paradigms that can adequately activate and utilize these
            modes within models.
          </p>
          <p>
            Exploring the utilization of sparse networks in the context of logic
            training could be key. These networks might offer more efficient
            ways to train models in logical reasoning, moving away from the
            current data-heavy approaches.
          </p>
          <p>
            There might exist a straightforward method to activate logical
            thinking, as relying solely on internet-based training is inadequate
            for learning logical reasoning. The internet is just a small part of
            all the information available in the world. It is well-known that
            when models perform inference, different inputs and tasks activate
            different parts of the model, including those responsible for
            logical thinking. However, projecting the current operation and
            reasoning processes of Large Language Models (LLMs) onto neural
            networks, we observe that Sparse networks show low levels of
            activity, while Dense networks are highly active. Therefore, we
            hypothesize that due to limitations in training data or other
            factors, the model does not sufficiently activate neurons in the
            sparse network. This implies that the model&apos;s activation
            patterns for logical thinking have not been adequately trained and
            expressed. Expanding further, this observation suggests that for
            more effective logical reasoning, LLMs might benefit from a more
            balanced engagement of both Sparse and Dense networks. This could
            potentially be achieved through diversified training approaches that
            include a broader range of data types and reasoning tasks, thereby
            enriching the model&apos;s capability to process and reason with
            logical constructs.
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
            and reasoning capabilities of large models.Currently, sparse
            networks, where only a few neurons are interconnected, are
            underused. These networks offer potential pathways for more
            efficient data processing and reasoning. By distributing
            decentralized human reaction and behavior data across sparse
            networks, there&apos;s potential to enhance the efficiency and
            reasoning capabilities of large models.
          </p>
        </section>

        <section>
          <h3>Q*.ai in Decentralzinig Data Across Sparse Networks</h3>
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
            abundant but strategically utilized for more nuanced and intelligent
            model development.
          </p>
          <h4>Decentralized Data Hub</h4>
          <p>
            A hub that aggregates cross-domain and domain-specific data is
            pivotal for supervised fine-tuning and preference learning in LLMs.
            The utilization of data is meticulously recorded on-chain, with
            token rewards allocated to contributors of high-quality data that
            proves valuable to model developers.
          </p>
          <h4>Decentralized Model Hub</h4>
          <p>
            A platform that encourages the crowdsourcing of model contributions
            incentivized through token rewards. Q* also offers its own
            endpoints, enabling community members to test models on various
            inputs. Model interactions are recorded on-chain, with tokens
            distributed to reward contributors whose models are frequently
            utilized.
          </p>
          <h4>Token Distribution Mechanism</h4>
          <p>
            Q*.ai tokens are distributed according to an epoch-based schedule to
            users contributing high-quality data or models to the community. The
            percentage of tokens distributed to data contributors and model
            contributors is determined by the governing process. Tokens get
            distributed to data contributors according to the utility value of
            the data, and the utility value of the data is computed as follows.
            Data collected on our platform are used in two ways: 1) supervised
            fine-tuning of pre-trained LLMs, and 2) human preference learning of
            pre-trained LLMs. Let Di be the dataset we’d like to compute utility
            values for. Let MDi = {`{M0, M1, M2,...}`} be the utility values of
            the models that use Di within this epoch. Let UiM denote the utility
            value of the model Mi, which we’ll discuss in more detail in the
            next section. The utility value of Di is then computed as the
            summation of utility values of all models that utilizes Di, which is
          </p>
          <Image
            src="/math/math_1.jpg"
            alt="Math formula"
            width="145"
            height="64"
          />
          <p>
            Let T be the total number of tokens allocated to data contributors.
            Tokens allocated to contributors of Di is
          </p>
          <Image
            src="/math/math_2.jpg"
            alt="Math formula"
            width="134"
            height="81"
          />
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
          />
        </section>
      </div>
      <Back />
    </div>
  )
}
