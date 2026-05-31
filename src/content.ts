export type Formula = {
  id: string;
  moduleId: string;
  titleZh: string;
  titleEn: string;
  tex: string;
  noteZh: string;
  noteEn: string;
  tone: "teal" | "amber" | "red" | "green";
};

export type Module = {
  id: string;
  number: string;
  titleZh: string;
  titleEn: string;
  sources: string[];
  lectureCount: number;
  assignmentCount: number;
  overviewZh: string;
  overviewEn: string;
  keyPoints: string[];
  beginnerNotes: string[];
  pitfalls: string[];
  examPhrases: string[];
  formulaIds: string[];
};

export type PracticeQuestion = {
  id: string;
  moduleId: string;
  source: string;
  difficulty: "Core" | "Medium" | "Hard";
  titleZh: string;
  titleEn: string;
  promptZh: string;
  promptEn: string;
  answerZh: string;
  answerEn: string;
  formulaIds: string[];
  options?: string[];
};

export const sourceMaterials = [
  "Derivatives_Pricing_Lecture1.pptx",
  "lecture2_futures_markets.pptx",
  "lecture-3-InterestRates(part1).pptx",
  "lecture-4-InterestRates(part2).pptx",
  "lecture-5-determination of forward and futures price.pptx",
  "lecture-6-InterestRateFutures (part1).pptx",
  "lecture-7-InterestRateFutures (part2).pptx",
  "Lecture 8 Swaps.pptx",
  "lecture-9 Securitization.pptx",
  "lecture-10-OptionProperties.pptx",
  "lecture-11-TradingStrategies.pptx",
  "lecture-12-BinomialTrees.pptx",
  "supplementary material oil futures price today.pptx",
  "Derivatives Pricing syllabus .doc",
  "assignment1.docx and solution",
  "assignment2.docx and solution",
  "assignment3.docx and solution",
  "assignment4.docx"
];

export const formulas: Formula[] = [
  {
    id: "continuous-compounding",
    moduleId: "interest-rates",
    titleZh: "连续复利",
    titleEn: "Continuous compounding",
    tex: String.raw`A=Pe^{RT},\qquad P=Ae^{-RT}`,
    noteZh: "所有给出 continuously compounded rate 的题，优先使用指数形式。",
    noteEn: "Use exponential discounting when rates are continuously compounded.",
    tone: "teal"
  },
  {
    id: "rate-conversion",
    moduleId: "interest-rates",
    titleZh: "复利转换",
    titleEn: "Compounding conversion",
    tex: String.raw`R_c=m\ln\left(1+\frac{R_m}{m}\right)`,
    noteZh: "assignment 1 的零息利率题会用到 semiannual 到 continuous 的转换。",
    noteEn: "Converts an m-times compounded quoted rate to a continuous rate.",
    tone: "amber"
  },
  {
    id: "forward-rate",
    moduleId: "interest-rates",
    titleZh: "远期利率",
    titleEn: "Forward rate",
    tex: String.raw`R_F=\frac{R_2T_2-R_1T_1}{T_2-T_1}`,
    noteZh: "由两个 zero rates 推出中间期间的 implied rate。",
    noteEn: "The implied rate between two maturities from the zero curve.",
    tone: "green"
  },
  {
    id: "forward-no-income",
    moduleId: "forward-pricing",
    titleZh: "无收益资产远期价格",
    titleEn: "Forward price with no income",
    tex: String.raw`F_0=S_0e^{rT}`,
    noteZh: "适用于无现金收益、无储藏成本的 investment asset。",
    noteEn: "For an investment asset with no income or storage cost.",
    tone: "teal"
  },
  {
    id: "forward-known-income",
    moduleId: "forward-pricing",
    titleZh: "已知现金收益",
    titleEn: "Known cash income",
    tex: String.raw`F_0=(S_0-I)e^{rT}`,
    noteZh: "I 是持有期间现金收益的现值，例如固定股利。",
    noteEn: "I is the present value of known income during the contract life.",
    tone: "amber"
  },
  {
    id: "forward-yield",
    moduleId: "forward-pricing",
    titleZh: "连续股息收益率",
    titleEn: "Continuous dividend yield",
    tex: String.raw`F_0=S_0e^{(r-q)T}`,
    noteZh: "stock index futures 常用，q 是 continuous dividend yield。",
    noteEn: "Common for stock index futures where q is the dividend yield.",
    tone: "green"
  },
  {
    id: "currency-forward",
    moduleId: "forward-pricing",
    titleZh: "外汇远期",
    titleEn: "Currency forward",
    tex: String.raw`F_0=S_0e^{(r_d-r_f)T}`,
    noteZh: "外币可以看成支付 foreign risk-free rate 的资产。",
    noteEn: "Foreign currency behaves like an asset yielding the foreign risk-free rate.",
    tone: "teal"
  },
  {
    id: "commodity-storage",
    moduleId: "forward-pricing",
    titleZh: "商品储藏成本",
    titleEn: "Commodity with storage cost",
    tex: String.raw`F_0=(S_0+U)e^{rT}`,
    noteZh: "消费资产时通常给出 upper bound，因为 convenience yield 可能存在。",
    noteEn: "For consumption assets this is often an upper bound.",
    tone: "red"
  },
  {
    id: "hedge-ratio",
    moduleId: "futures-hedging",
    titleZh: "最小方差套保比率",
    titleEn: "Minimum variance hedge ratio",
    tex: String.raw`h^\ast=\rho\frac{\sigma_S}{\sigma_F}`,
    noteZh: "先算 hedge ratio，再判断 long/short 方向。",
    noteEn: "Compute the ratio first, then decide the hedge direction.",
    tone: "teal"
  },
  {
    id: "beta-hedge",
    moduleId: "futures-hedging",
    titleZh: "组合 beta 调整",
    titleEn: "Portfolio beta adjustment",
    tex: String.raw`N^\ast=(\beta_T-\beta_P)\frac{V_A}{F_0M}`,
    noteZh: "N 为负数表示 short index futures。",
    noteEn: "A negative N means shorting index futures.",
    tone: "amber"
  },
  {
    id: "duration-hedge",
    moduleId: "interest-rate-futures",
    titleZh: "债券组合久期套保",
    titleEn: "Duration-based futures hedge",
    tex: String.raw`N^\ast=\frac{PD_P}{FD_F}`,
    noteZh: "用于 Treasury bond futures hedge。",
    noteEn: "Used to hedge bond portfolios with Treasury bond futures.",
    tone: "green"
  },
  {
    id: "swap-bonds",
    moduleId: "swaps",
    titleZh: "互换估值",
    titleEn: "Swap valuation as bonds",
    tex: String.raw`V_{\text{pay fixed}}=B_{\text{floating}}-B_{\text{fixed}}`,
    noteZh: "pay fixed, receive floating 的一方使用这个方向。",
    noteEn: "For the party paying fixed and receiving floating.",
    tone: "teal"
  },
  {
    id: "put-call-parity",
    moduleId: "option-properties",
    titleZh: "含股利看跌看涨平价",
    titleEn: "Put-call parity with dividends",
    tex: String.raw`c+D+Ke^{-rT}=p+S_0`,
    noteZh: "Assignment 3 arbitrage 题的核心公式。",
    noteEn: "The central equation for option arbitrage problems.",
    tone: "red"
  },
  {
    id: "binomial-p",
    moduleId: "binomial-trees",
    titleZh: "风险中性概率",
    titleEn: "Risk-neutral probability",
    tex: String.raw`p=\frac{e^{r\Delta t}-d}{u-d}`,
    noteZh: "p 不是真实概率，而是定价权重。",
    noteEn: "This is a pricing weight, not a real-world probability.",
    tone: "amber"
  },
  {
    id: "binomial-value",
    moduleId: "binomial-trees",
    titleZh: "二叉树节点价值",
    titleEn: "Binomial node value",
    tex: String.raw`f=e^{-r\Delta t}\left[pf_u+(1-p)f_d\right]`,
    noteZh: "多步树从终点向前 backward induction。",
    noteEn: "Use backward induction from terminal payoffs.",
    tone: "green"
  }
];

export const modules: Module[] = [
  {
    id: "foundations",
    number: "1",
    titleZh: "基础回顾",
    titleEn: "Foundations",
    sources: ["Lecture 1", "Syllabus"],
    lectureCount: 1,
    assignmentCount: 0,
    overviewZh: "衍生品的价值来自标的资产。pricing 的核心不是预测价格，而是在 no-arbitrage 条件下找到今天合理价格。",
    overviewEn: "A derivative derives value from an underlying asset. Pricing is about no-arbitrage value, not forecasting.",
    keyPoints: [
      "Derivatives include forwards, futures, swaps, options and structured products.",
      "Hedgers reduce risk, speculators take risk, arbitrageurs enforce price relations.",
      "Exchange traded contracts are standardized; OTC contracts are customized but carry counterparty risk."
    ],
    beginnerNotes: [
      "先理解现金流，再看公式。每个定价公式都可以用两个未来现金流相同的组合推出来。",
      "遇到英文题，先圈出 long/short, buy/sell, receive/pay, call/put, fixed/floating。"
    ],
    pitfalls: [
      "把 pricing 当成预测未来价格。",
      "忽略 long 和 short 的现金流方向。"
    ],
    examPhrases: ["no arbitrage", "underlying asset", "long position", "short position", "clearing house"],
    formulaIds: []
  },
  {
    id: "futures-hedging",
    number: "2",
    titleZh: "期货机制与套保",
    titleEn: "Futures Markets and Hedging",
    sources: ["Lecture 2", "Assignment 1"],
    lectureCount: 1,
    assignmentCount: 1,
    overviewZh: "期货是标准化、每日结算的远期类合约。套保题的重点是方向、合约数量、basis risk 和 margin。",
    overviewEn: "Futures are standardized forward-like contracts with daily settlement. Hedge questions focus on direction, contract count, basis risk and margin.",
    keyPoints: [
      "Daily settlement moves gains and losses through the margin account each day.",
      "Basis equals spot price minus futures price and converges near delivery.",
      "Minimum variance hedging uses correlation and relative volatility.",
      "Index futures can change a portfolio beta without selling the underlying stock portfolio."
    ],
    beginnerNotes: [
      "担心未来买入成本上涨，一般 long futures；担心持有资产价格下跌，一般 short futures。",
      "合约数量不是简单等于现货数量除以合约大小，cross hedge 还要乘 h*。"
    ],
    pitfalls: [
      "把 initial margin 当成交易成本。",
      "忘记一张合约对应的 contract size。",
      "beta hedge 里 N 为负数时应 short。"
    ],
    examPhrases: ["initial margin", "maintenance margin", "margin call", "basis risk", "hedge ratio"],
    formulaIds: ["hedge-ratio", "beta-hedge"]
  },
  {
    id: "interest-rates",
    number: "3",
    titleZh: "利率、零息与 FRA",
    titleEn: "Interest Rates, Zero Rates and FRA",
    sources: ["Lecture 3", "Lecture 4", "Assignment 1"],
    lectureCount: 2,
    assignmentCount: 1,
    overviewZh: "利率章节是所有定价的地基：discount factor, zero rate, forward rate, FRA 和 duration 都会在后续产品中反复出现。",
    overviewEn: "Interest rates are the foundation for discounting, zero curves, forward rates, FRAs and duration-based hedging.",
    keyPoints: [
      "Continuous compounding makes discount factors equal e^{-rT}.",
      "Zero rates price single cash flows; coupon bonds are sums of discounted cash flows.",
      "Forward rates come from matching a long investment with rolling shorter investments.",
      "FRA payoff is a future interest-rate difference, often settled at the start of the loan period."
    ],
    beginnerNotes: [
      "所有现金流先画时间线，再决定用哪个 rate discount。",
      "Bootstrapping 的本质是：已知短端 discount factor，再解未知长端 discount factor。"
    ],
    pitfalls: [
      "混用 semiannual compounding 和 continuous compounding。",
      "把 forward rate 写成两个 zero rates 的简单平均。",
      "FRA 结算时点 T1/T2 搞反。"
    ],
    examPhrases: ["zero rate", "discount factor", "bootstrapping", "forward rate agreement", "duration"],
    formulaIds: ["continuous-compounding", "rate-conversion", "forward-rate"]
  },
  {
    id: "forward-pricing",
    number: "4",
    titleZh: "远期与期货定价",
    titleEn: "Forward and Futures Pricing",
    sources: ["Lecture 5", "Assignment 2", "Oil futures supplement"],
    lectureCount: 2,
    assignmentCount: 1,
    overviewZh: "远期定价来自 cash-and-carry arbitrage。不同公式只是在处理持有现货期间的收益、成本、外币利率或 convenience yield。",
    overviewEn: "Forward pricing follows cash-and-carry arbitrage. Variants adjust for income, costs, foreign rates and convenience yield.",
    keyPoints: [
      "Known income lowers the forward price because the spot holder receives income.",
      "Storage cost raises the forward price; convenience yield lowers it.",
      "FX forwards use domestic minus foreign interest rates.",
      "Oil futures curves reveal scarcity and logistics pressures through contango/backwardation."
    ],
    beginnerNotes: [
      "先判断标的是 investment asset 还是 consumption asset。",
      "看到 dividend yield 用 q；看到 fixed cash dividend 用 I；看到 foreign currency 用 r_d-r_f。"
    ],
    pitfalls: [
      "把现金股利 I 和股息率 q 混用。",
      "忘记 storage cost 如果是未来支付，要先折现成 U。",
      "消费资产题通常问 upper bound 而不是 exact futures price。"
    ],
    examPhrases: ["cash-and-carry", "cost of carry", "convenience yield", "contango", "backwardation"],
    formulaIds: ["forward-no-income", "forward-known-income", "forward-yield", "currency-forward", "commodity-storage"]
  },
  {
    id: "interest-rate-futures",
    number: "5",
    titleZh: "利率期货",
    titleEn: "Interest Rate Futures",
    sources: ["Lecture 6", "Lecture 7", "Assignment 2"],
    lectureCount: 2,
    assignmentCount: 1,
    overviewZh: "利率期货题通常不是难在金融逻辑，而是难在报价方式、day count、accrued interest、conversion factor 和 hedge direction。",
    overviewEn: "Interest-rate futures problems often hinge on quotations, day count, accrued interest, conversion factors and hedge direction.",
    keyPoints: [
      "Treasury bond cash price equals quoted price plus accrued interest.",
      "Treasury futures delivery uses conversion factors and the short chooses the cheapest-to-deliver bond.",
      "Eurodollar quote Q equals 100 minus the implied three-month rate.",
      "A borrower hedging a future floating-rate loan shorts Eurodollar futures."
    ],
    beginnerNotes: [
      "看到 102-07，要先转成 102 + 7/32。",
      "Eurodollar futures 价格和利率方向相反。"
    ],
    pitfalls: [
      "忘记 quoted bond price 不等于 cash price。",
      "Eurodollar hedge 方向做反。",
      "duration hedge 漏掉 futures contract 的价格或面值单位。"
    ],
    examPhrases: ["day count convention", "accrued interest", "conversion factor", "cheapest-to-deliver", "Eurodollar futures"],
    formulaIds: ["duration-hedge"]
  },
  {
    id: "swaps",
    number: "6",
    titleZh: "互换",
    titleEn: "Swaps",
    sources: ["Lecture 8", "Assignment 3"],
    lectureCount: 1,
    assignmentCount: 1,
    overviewZh: "Plain vanilla interest rate swap 是固定利率和浮动利率现金流的交换。估值时可以拆成债券，也可以拆成一串 FRA。",
    overviewEn: "A plain vanilla swap exchanges fixed and floating cash flows. It can be valued as bonds or as a strip of FRAs.",
    keyPoints: [
      "Pay fixed, receive floating equals long floating-rate bond and short fixed-rate bond.",
      "A par swap rate makes the initial swap value zero.",
      "Swap rates can bootstrap zero rates by treating a par swap as a par coupon bond.",
      "Comparative advantage problems allocate borrowing-cost savings through a swap."
    ],
    beginnerNotes: [
      "先写出你这一方 pay 什么、receive 什么，再决定 valuation sign。",
      "Swap notional 通常不交换，只用于计算利息。"
    ],
    pitfalls: [
      "把 pay fixed 和 receive fixed 的估值符号写反。",
      "忘记 floating bond 在 reset date 附近约等于 par。",
      "把 swap rate 当成 zero rate。"
    ],
    examPhrases: ["plain vanilla swap", "notional principal", "par swap rate", "fixed-rate bond", "floating-rate bond"],
    formulaIds: ["swap-bonds"]
  },
  {
    id: "securitization",
    number: "7",
    titleZh: "证券化与分层损失",
    titleEn: "Securitization",
    sources: ["Lecture 9", "Assignment 3"],
    lectureCount: 1,
    assignmentCount: 1,
    overviewZh: "证券化把贷款现金流打包成不同优先级的 tranche。考试重点是 waterfall：收益从 senior 往下，损失从 equity 往上。",
    overviewEn: "Securitization packages asset cash flows into tranches. The key exam idea is the waterfall of losses.",
    keyPoints: [
      "Equity tranche absorbs first losses.",
      "Mezzanine tranche absorbs losses after equity is exhausted.",
      "Senior tranche is protected but not risk-free.",
      "ABS CDO can magnify losses because it repackages mezzanine risk."
    ],
    beginnerNotes: [
      "算损失时先用总资产损失百分比打穿低层级，再除以该 tranche principal。",
      "看到 ABS CDO，要先算 ABS mezzanine tranche 损失，再把它当作 CDO collateral loss。"
    ],
    pitfalls: [
      "用总资产损失直接除以 senior tranche。",
      "忘记 CDO 的资产是 ABS mezzanine tranches，不是原始 mortgages。"
    ],
    examPhrases: ["SPV", "senior tranche", "mezzanine tranche", "equity tranche", "waterfall"],
    formulaIds: []
  },
  {
    id: "option-properties",
    number: "8",
    titleZh: "期权性质与平价",
    titleEn: "Option Properties and Put-Call Parity",
    sources: ["Lecture 10", "Assignment 1", "Assignment 3"],
    lectureCount: 1,
    assignmentCount: 2,
    overviewZh: "期权 payoff 是非线性的。考试基础是 long/short call/put 的 profit 图、价格上下界、early exercise 和 put-call parity。",
    overviewEn: "Option payoffs are nonlinear. Core topics are payoff diagrams, bounds, early exercise and put-call parity.",
    keyPoints: [
      "Long call payoff is max(S_T-K, 0); long put payoff is max(K-S_T, 0).",
      "Profit equals payoff minus premium, often ignoring time value in simple diagrams.",
      "Put-call parity equates two portfolios with identical terminal cash flows.",
      "American puts may be exercised early; non-dividend American calls usually should not be."
    ],
    beginnerNotes: [
      "先画 payoff，再减 premium 得 profit。",
      "Parity arbitrage 题先比较 left side and right side，卖贵买便宜。"
    ],
    pitfalls: [
      "混淆 exercise condition 和 profit condition。",
      "忘记有确定股利时 parity 要加 D。",
      "把 American call 的提前行权规则背反。"
    ],
    examPhrases: ["intrinsic value", "time value", "exercise", "put-call parity", "arbitrage opportunity"],
    formulaIds: ["put-call-parity"]
  },
  {
    id: "trading-strategies",
    number: "9",
    titleZh: "期权交易策略",
    titleEn: "Trading Strategies",
    sources: ["Lecture 11", "Assignment 3"],
    lectureCount: 1,
    assignmentCount: 1,
    overviewZh: "策略题本质是把多个 option payoff 加总。记名字不如会分段计算 payoff。",
    overviewEn: "Strategy problems are sums of option payoffs. Piecewise payoff calculation matters more than memorizing names.",
    keyPoints: [
      "Covered call equals long stock plus short call.",
      "Protective put equals long stock plus long put.",
      "Butterfly spread profits when the stock ends near the middle strike.",
      "Straddle and strangle are volatility bets."
    ],
    beginnerNotes: [
      "策略题统一写每个 option 的 payoff，再按 strike 区间合并。",
      "Butterfly 的最大利润在中间 strike，最大亏损通常是初始成本。"
    ],
    pitfalls: [
      "只看图形不写分段 payoff。",
      "忘记 short option 的 payoff 要取负。",
      "用 call parity 推 put butterfly 时没有让 stock/bond 项抵消。"
    ],
    examPhrases: ["covered call", "protective put", "bull spread", "butterfly spread", "straddle"],
    formulaIds: ["put-call-parity"]
  },
  {
    id: "binomial-trees",
    number: "10",
    titleZh: "二叉树定价",
    titleEn: "Binomial Trees",
    sources: ["Lecture 12", "Assignment 4"],
    lectureCount: 1,
    assignmentCount: 1,
    overviewZh: "二叉树把未来价格离散成 up/down 节点，用复制组合或 risk-neutral valuation 定价。American option 需要每个节点比较提前行权。",
    overviewEn: "Binomial trees discretize future prices into up/down states. American options require early-exercise checks at each node.",
    keyPoints: [
      "Delta comes from matching up and down state portfolio values.",
      "Risk-neutral probability is a pricing weight.",
      "Multi-step trees are valued backward from terminal payoffs.",
      "American put value is max(immediate exercise, continuation value)."
    ],
    beginnerNotes: [
      "二叉树题先画 stock tree，再写 terminal payoff，最后向前折现。",
      "Assignment 4 Q2 的 American put 在 down node 提前行权更优。"
    ],
    pitfalls: [
      "把 risk-neutral probability 当成真实上涨概率。",
      "忘记每一步折现 e^{-r dt}。",
      "American option 只在初始节点比较提前行权，漏掉中间节点。"
    ],
    examPhrases: ["risk-neutral probability", "backward induction", "delta", "continuation value", "early exercise"],
    formulaIds: ["binomial-p", "binomial-value"]
  }
];

export const practiceQuestions: PracticeQuestion[] = [
  {
    id: "a1-q3-margin",
    moduleId: "futures-hedging",
    source: "Assignment 1 Q3",
    difficulty: "Core",
    titleZh: "保证金追缴",
    titleEn: "Margin call threshold",
    promptZh: "买入 2 张 FCOJ futures，每张 15,000 磅，当前价格 200 cents/lb。每张 initial margin 为 8,000，maintenance margin 为 6,000。什么价格触发 margin call？什么时候可取出 3,000？",
    promptEn: "Long two frozen orange juice futures contracts. Each contract is 15,000 pounds, current futures price is 200 cents/lb, initial margin is 8,000 per contract and maintenance margin is 6,000 per contract. What price triggers a margin call? When can 3,000 be withdrawn?",
    answerZh: "总 initial margin 为 16,000，总 maintenance margin 为 12,000。亏损 4,000 触发追缴，2 张合约共 30,000 磅，所以价格下跌 4,000/30,000=0.1333 dollars=13.33 cents。触发价为 186.67 cents/lb。可取出 3,000 需要账户升至 19,000，即盈利 3,000，对应价格上涨 10 cents，到 210 cents/lb。",
    answerEn: "Total initial margin is 16,000 and maintenance margin is 12,000. A loss of 4,000 triggers the call. With 30,000 pounds, the price fall is 13.33 cents, so the trigger price is 186.67 cents/lb. A 3,000 withdrawal requires a 3,000 gain, or a 10-cent rise to 210 cents/lb.",
    formulaIds: []
  },
  {
    id: "a1-q6-cross-hedge",
    moduleId: "futures-hedging",
    source: "Assignment 1 Q6",
    difficulty: "Medium",
    titleZh: "Cross hedge 套保比率",
    titleEn: "Cross hedge ratio",
    promptZh: "公司每遇到新燃料价格上涨 1 cent/gallon 就损失 1,000,000。该价格变化与 gasoline futures 相关系数 0.8，新燃料波动率比 gasoline futures 高 50%。每张 gasoline futures 为 40,000 gallons。应交易多少张？",
    promptEn: "The company loses 1,000,000 for each 1 cent/gallon increase in a new fuel. Correlation with gasoline futures changes is 0.8 and the new fuel volatility is 50 percent greater. Each gasoline futures contract is 40,000 gallons. How many contracts are needed?",
    answerZh: "h*=0.8*1.5=1.2。风险暴露为 1,000,000/0.01=100,000,000 gallons。公司怕价格上涨，所以做 long futures。套保数量为 1.2*100,000,000=120,000,000 gallons，对应 3,000 张合约。",
    answerEn: "h*=0.8*1.5=1.2. Exposure is 1,000,000/0.01=100,000,000 gallons. The firm loses when prices rise, so it needs a long futures hedge. Hedge 120,000,000 gallons, or 3,000 contracts.",
    formulaIds: ["hedge-ratio"]
  },
  {
    id: "a1-q7-beta",
    moduleId: "futures-hedging",
    source: "Assignment 1 Q7",
    difficulty: "Core",
    titleZh: "用指数期货调整 beta",
    titleEn: "Changing portfolio beta",
    promptZh: "股票组合价值 100 million，beta=1.4，S&P 500 index=2,000，乘数 250。要把 beta 降到 0.5，应如何操作？若升到 1.8 呢？",
    promptEn: "A stock portfolio is worth 100 million with beta 1.4. The index is 2,000 and the futures multiplier is 250. How to reduce beta to 0.5? How to increase it to 1.8?",
    answerZh: "N=(beta_T-beta_P)V/(F*M)。降到 0.5：N=(0.5-1.4)*100,000,000/(2,000*250)=-180，short 180 张。升到 1.8：N=(1.8-1.4)*100,000,000/(2,000*250)=80，long 80 张。",
    answerEn: "Use N=(beta_T-beta_P)V/(F*M). For 0.5, N=-180, so short 180 contracts. For 1.8, N=80, so long 80 contracts.",
    formulaIds: ["beta-hedge"]
  },
  {
    id: "a2-q1-dividend-forward",
    moduleId: "forward-pricing",
    source: "Assignment 2 Q1",
    difficulty: "Core",
    titleZh: "含现金股利的远期价格",
    titleEn: "Forward price with known dividends",
    promptZh: "股票 S0=100，2 个月和 5 个月各支付 1，r=8% continuous，6 个月远期价格是多少？三个月后 S=48，空头远期价值是多少？",
    promptEn: "A stock price is 100 and pays 1 in two months and 1 in five months. r=8 percent continuous and T=6 months. What is the forward price? Three months later S=48; what is the value of the short forward?",
    answerZh: "I=e^{-0.08*2/12}+e^{-0.08*5/12}=1.9540。F0=(100-1.9540)e^{0.08*0.5}=102.05。三个月后只剩一个股利，I=e^{-0.08*2/12}=0.9868。空头价值 = -(48-0.9868-102.05e^{-0.08*3/12})=51.05。新远期价约 47.96。",
    answerEn: "PV of dividends is 1.9540, so F0=(100-1.9540)e^{0.04}=102.05. Three months later one dividend remains with PV 0.9868. The short forward value is 51.05 and the new forward price is about 47.96.",
    formulaIds: ["forward-known-income"]
  },
  {
    id: "a2-q3-fx",
    moduleId: "forward-pricing",
    source: "Assignment 2 Q3",
    difficulty: "Medium",
    titleZh: "由外汇远期推出外币利率",
    titleEn: "Implied foreign interest rate",
    promptZh: "USD/EUR spot=1.4500，6 个月 forward=1.3950，USD 利率 1% continuous。估计 euro 6 个月利率。",
    promptEn: "USD/EUR spot is 1.4500, six-month forward is 1.3950, and the USD continuous rate is 1 percent. Estimate the euro rate.",
    answerZh: "用 F=S e^{(r_d-r_f)T}。1.3950=1.4500e^{(0.01-r_f)0.5}，所以 r_f=0.01-ln(1.395/1.450)/0.5=8.73%。",
    answerEn: "Using F=S e^{(r_d-r_f)T}, r_f=0.01-ln(1.395/1.450)/0.5=8.73 percent.",
    formulaIds: ["currency-forward"]
  },
  {
    id: "a2-q8-eurodollar",
    moduleId: "interest-rate-futures",
    source: "Assignment 2 Q8",
    difficulty: "Core",
    titleZh: "Eurodollar futures hedge",
    titleEn: "Eurodollar futures hedge",
    promptZh: "December Eurodollar futures quote=98.40，公司计划 December 起借 8 million，利率 LIBOR+0.5%。锁定利率是多少？应 long 还是 short？若实际三个月利率 1.3%，最终结算价是多少？",
    promptEn: "The December Eurodollar futures quote is 98.40. A company plans to borrow 8 million for three months starting in December at LIBOR plus 0.5 percent. What rate is locked in? Long or short? If actual LIBOR is 1.3 percent, what is the final settlement price?",
    answerZh: "quote 98.40 表示 implied LIBOR=1.60%，加 0.5% 后锁定约 2.10%。借款人怕利率上升，利率上升时 Eurodollar futures price 下跌，所以应 short。若 LIBOR=1.3%，结算价为 100-1.3=98.70。",
    answerEn: "The quote implies LIBOR of 1.60 percent, so the borrowing rate is about 2.10 percent. The borrower should short futures. If actual LIBOR is 1.3 percent, the final settlement price is 98.70.",
    formulaIds: []
  },
  {
    id: "a3-q1-swap-zero",
    moduleId: "swaps",
    source: "Assignment 3 Q1",
    difficulty: "Hard",
    titleZh: "用 swap rate 推 zero rate",
    titleEn: "Bootstrapping zero rates from swap rates",
    promptZh: "1 年 LIBOR=10% annual compounding，2 年 swap rate=11%，3 年 swap rate=12%。估计 2 年和 3 年 LIBOR zero rates。",
    promptEn: "One-year LIBOR is 10 percent annually compounded. Two- and three-year swap rates are 11 and 12 percent. Estimate the two- and three-year LIBOR zero rates.",
    answerZh: "2 年 par swap 等价于 11% coupon bond at par：11/1.10 + 111/(1+R2)^2=100，得 R2=11.05%。3 年：12/1.10 + 12/(1.1105)^2 + 112/(1+R3)^3=100，得 R3=12.17%。",
    answerEn: "Treat par swaps as par coupon bonds. 11/1.10 + 111/(1+R2)^2=100 gives R2=11.05 percent. Then 12/1.10 + 12/(1.1105)^2 + 112/(1+R3)^3=100 gives R3=12.17 percent.",
    formulaIds: ["swap-bonds"]
  },
  {
    id: "a3-q5-cdo",
    moduleId: "securitization",
    source: "Assignment 3 Q5",
    difficulty: "Medium",
    titleZh: "ABS CDO 损失分配",
    titleEn: "ABS CDO waterfall",
    promptZh: "ABS: senior 75%, mezzanine 20%, equity 5%。由 mezzanine tranche 再做同样结构的 ABS CDO。若 mortgage portfolio 损失 16%，各 tranche 损失是多少？",
    promptEn: "ABS tranches are senior 75 percent, mezzanine 20 percent and equity 5 percent. An ABS CDO is created from mezzanine tranches with the same allocation. Mortgage losses are 16 percent. What are tranche losses?",
    answerZh: "ABS: equity 被打穿，损失 100%；mezzanine 承担 (16-5)/20=55%；senior 为 0。ABS CDO 的 collateral 是 mezzanine tranches，因此 collateral loss=55%。CDO equity 100%，CDO mezzanine 100%，CDO senior=(55-25)/75=40%。",
    answerEn: "ABS equity loses 100 percent, mezzanine loses 55 percent, senior loses 0. The ABS CDO collateral loss is 55 percent, so CDO equity and mezzanine are wiped out and CDO senior loses (55-25)/75=40 percent.",
    formulaIds: []
  },
  {
    id: "a3-q8-parity",
    moduleId: "option-properties",
    source: "Assignment 3 Q8",
    difficulty: "Hard",
    titleZh: "Put-call parity 套利",
    titleEn: "Put-call parity arbitrage",
    promptZh: "同一股票 European call 和 put，K=20，T=3 months，价格都为 3。r=10% continuous，S0=19，1 个月后有 1 的股利。找套利机会。",
    promptEn: "A European call and put with K=20 and T=3 months both cost 3. r=10 percent continuous, S0=19, and a 1 dividend is expected in one month. Identify the arbitrage.",
    answerZh: "含确定股利 parity：c+D+Ke^{-rT}=p+S0。左边=3+e^{-0.10/12}+20e^{-0.10*0.25}=23.50，右边=22，左边贵。卖贵买便宜：short call，借入 PV(K)，buy put and stock，并利用股利现金流锁定利润。",
    answerEn: "Parity with dividends is c+D+Ke^{-rT}=p+S0. The left side is about 23.50 and the right side is 22, so the left side is overpriced. Sell the call, borrow PV(K), buy the put and stock, and use the dividend cash flow to lock in the profit.",
    formulaIds: ["put-call-parity"]
  },
  {
    id: "a3-q9-butterfly",
    moduleId: "trading-strategies",
    source: "Assignment 3 Q9",
    difficulty: "Medium",
    titleZh: "Put butterfly spread",
    titleEn: "Put butterfly spread",
    promptZh: "三只同到期 put，K=55,60,65，价格 4,6,9。如何构造 butterfly？何时亏损？",
    promptEn: "Three puts have strikes 55, 60, 65 and prices 4, 6, 9. How can a butterfly spread be created and when does it lose money?",
    answerZh: "Buy 55 put, buy 65 put, sell two 60 puts。成本=4+9-2*6=1。净利润：S<=55 为 -1；55<S<=60 为 S-56；60<S<=65 为 64-S；S>65 为 -1。亏损区间为 S<56 或 S>64。",
    answerEn: "Buy the 55 put, buy the 65 put and sell two 60 puts. Cost is 1. Profit is -1 for S<=55, S-56 for 55<S<=60, 64-S for 60<S<=65, and -1 for S>65. Loss occurs below 56 or above 64.",
    formulaIds: ["put-call-parity"]
  },
  {
    id: "a4-q1-binomial-call",
    moduleId: "binomial-trees",
    source: "Assignment 4 Q1-Q2",
    difficulty: "Hard",
    titleZh: "两步二叉树 call/put",
    titleEn: "Two-step binomial call and put",
    promptZh: "S0=50，每个 3 个月 period 上涨 6% 或下跌 5%，r=5% continuous，K=51。6 个月 European call 和 put 价值是多少？American put 是否提前行权？",
    promptEn: "S0=50, each three-month period has up 6 percent or down 5 percent, r=5 percent continuous and K=51. Value the six-month European call and put. Should the American put be exercised early?",
    answerZh: "p=(e^{0.05*0.25}-0.95)/(1.06-0.95)=0.568895。终点价格为 56.18, 50.35, 45.125。call payoff 为 5.18,0,0，call 价值约 1.64。put payoff 为 0,0.65,5.875，European put 约 1.38。American put 在 down node 即时行权 3.5，大于 continuation 2.87，因此会提前行权，价值约 1.65。",
    answerEn: "p=0.568895. Terminal prices are 56.18, 50.35 and 45.125. Call payoffs are 5.18, 0, 0, giving c≈1.64. Put payoffs are 0, 0.65, 5.875, giving p≈1.38. For the American put, early exercise at the down node gives 3.5 versus continuation 2.87, so early exercise is optimal there and the value is about 1.65.",
    formulaIds: ["binomial-p", "binomial-value"]
  },
  {
    id: "a4-q3-st-squared",
    moduleId: "binomial-trees",
    source: "Assignment 4 Q3",
    difficulty: "Medium",
    titleZh: "支付 ST^2 的一阶二叉树衍生品",
    titleEn: "One-step derivative paying ST squared",
    promptZh: "S0=25，两个月后为 23 或 27，r=10% continuous。衍生品在两个月后支付 S_T^2，价值是多少？",
    promptEn: "S0=25 and in two months the stock will be 23 or 27. r=10 percent continuous. A derivative pays S_T^2 at that time. What is its value?",
    answerZh: "u=27/25，d=23/25。p=(e^{0.10*2/12}-d)/(u-d)=0.60504。payoff up=729，down=529。价值=e^{-0.10*2/12}[0.60504*729+(1-0.60504)*529]=639.26。",
    answerEn: "u=27/25 and d=23/25, so p=0.60504. Payoffs are 729 and 529. The value is e^{-0.10*2/12}[0.60504*729+(1-0.60504)*529]=639.26.",
    formulaIds: ["binomial-p", "binomial-value"]
  }
];
