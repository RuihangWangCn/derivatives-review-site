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

export type DeepDiveSection = {
  headingZh: string;
  headingEn: string;
  paragraphs: string[];
  steps?: string[];
  exampleZh?: string;
  examTipZh?: string;
  terms?: string[];
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

export const moduleDeepDives: Record<string, DeepDiveSection[]> = {
  foundations: [
    {
      headingZh: "1. 衍生品到底是什么",
      headingEn: "What a derivative is",
      paragraphs: [
        "Derivative 的中文是衍生品，意思是它自己的价值不是凭空来的，而是从另一个 underlying asset 衍生出来。标的可以是股票、债券、利率、汇率、商品、信用资产，甚至是某个指数。你不要把它理解成一个普通资产，而要理解成一张写清楚未来现金流规则的合约。",
        "Forward, futures, swap, option 的区别主要在现金流规则。Forward 和 futures 是双方承诺未来交易；swap 是多期现金流交换；option 给买方权利但不是义务。只要能把未来每种状态下的现金流写出来，定价就有了起点。",
        "本课程反复使用的主线是 no-arbitrage。它不是说市场永远完美，而是说如果两个组合未来现金流完全一样，它们今天价格就应该一样。否则可以买便宜的、卖贵的，锁定无风险利润。"
      ],
      steps: [
        "先问：合约挂钩的 underlying asset 是什么。",
        "再问：long side 和 short side 分别在未来收什么、付什么。",
        "最后问：有没有一个更简单的资产组合可以复制这些现金流。"
      ],
      exampleZh: "例如一份 forward contract 可以被看成未来必须买入或卖出标的的承诺。今天的 forward price 不是猜未来 spot price，而是让 long 和 short 在签约时都没有套利空间的价格。",
      examTipZh: "考试写解释题时，先写 This is a no-arbitrage argument，再说明两个 portfolios have identical future cash flows。",
      terms: ["derivative", "underlying asset", "no-arbitrage", "long position", "short position"]
    },
    {
      headingZh: "2. 市场参与者和他们的动机",
      headingEn: "Hedgers, speculators and arbitrageurs",
      paragraphs: [
        "Hedger 的目标是降低已有风险。例如航空公司怕燃油涨价，它不是为了赌油价，而是为了锁定成本。Speculator 的目标是主动承担风险来获取收益，例如看涨油价就 long futures。Arbitrageur 的目标是利用价格关系错误，构造无风险或近似无风险利润。",
        "这三类人会出现在同一个市场里，但他们看合约的方式完全不同。Hedger 关心 risk reduction，speculator 关心 view and leverage，arbitrageur 关心 relative price。",
        "考试题如果问为什么 futures market useful，答案通常不是只写 profit，而是 price discovery, hedging, liquidity, risk transfer。"
      ],
      steps: [
        "看到公司、库存、未来购买或未来出售，优先判断为 hedging。",
        "看到投资者没有现货风险但想押方向，优先判断为 speculation。",
        "看到两个价格违反公式，优先判断为 arbitrage。"
      ],
      examTipZh: "不要把 hedging 写成消除所有风险。更准确是 reduce or manage risk，因为 basis risk, quantity mismatch, maturity mismatch 仍然可能存在。",
      terms: ["hedger", "speculator", "arbitrageur", "price discovery", "risk transfer"]
    },
    {
      headingZh: "3. Exchange traded 和 OTC 的差异",
      headingEn: "Exchange traded versus OTC",
      paragraphs: [
        "Exchange traded contracts 的优点是标准化、流动性好、通过 clearing house 降低 counterparty risk。缺点是条款不能完全定制，所以到期日、合约规模、标的规格可能和真实风险不完全匹配。",
        "OTC contracts 的优点是可以定制，比如名义本金、期限、支付频率、参考利率都可以贴合需求。缺点是 counterparty risk 更重要，合约不一定容易转让或平仓。",
        "Futures 和 forwards 的很多差异都来自这里：futures 通常 exchange traded, standardized, marked to market daily；forwards 通常 OTC, customized, settled at maturity。"
      ],
      steps: [
        "比较 liquidity：交易所合约通常更强。",
        "比较 customization：OTC 通常更强。",
        "比较 credit risk：clearing house 会显著改变风险结构。"
      ],
      exampleZh: "一个农产品生产商可能用标准化期货先大致套保，再接受 basis risk；一个企业的长期利率风险可能用 OTC interest rate swap 来精确匹配现金流。",
      terms: ["exchange traded", "OTC", "clearing house", "counterparty risk", "marked to market"]
    },
    {
      headingZh: "4. 学这门课的统一解题框架",
      headingEn: "A reusable pricing workflow",
      paragraphs: [
        "很多同学觉得每章公式很多，其实公式背后只有几个动作：画时间线、写现金流、折现、复制、比较价格。无论是 forward price, swap value, put-call parity 还是 binomial tree，本质都是这几个动作的组合。",
        "时间线尤其重要。利率题要知道现金流发生在 T1 还是 T2；期货保证金题要知道每日结算；FRA 要知道贷款期和 settlement date；option parity 要知道 dividend 发生在到期前还是到期后。",
        "如果题目给出 continuously compounded rate，就用指数折现；如果给 annual compounding 或 semiannual compounding，就先按题目口径计算，必要时再转换。"
      ],
      steps: [
        "画出 today, intermediate dates, maturity。",
        "标注每个日期的 cash inflow 和 cash outflow。",
        "确定要用的 discount rate 和 compounding convention。",
        "写出无套利等式或 backward induction 关系。",
        "最后检查方向：long/short, pay/receive, buy/sell 是否一致。"
      ],
      examTipZh: "最终答案最好带一句 interpretation，例如 The forward price is lower because known dividends are received by the spot holder。",
      terms: ["timeline", "cash flow", "discount factor", "replication", "compounding convention"]
    }
  ],
  "futures-hedging": [
    {
      headingZh: "1. Futures 的每日结算机制",
      headingEn: "Daily settlement and margin accounts",
      paragraphs: [
        "Futures contract 和 forward 最大的操作差异是 marked to market。期货不是等到到期一次性算总盈亏，而是每天按照 settlement price 把当天盈亏打进或扣出 margin account。",
        "Initial margin 是开仓时放进账户的保证金，不是合约成本，也不是已经亏掉的钱。Maintenance margin 是最低账户余额。账户低于 maintenance margin 时触发 margin call，通常要补回 initial margin。",
        "Long futures 在期货价格上涨时盈利，short futures 在期货价格下跌时盈利。保证金题最常见错误是方向写反，或者忘记合约数量和 contract size。"
      ],
      steps: [
        "计算总 initial margin 和总 maintenance margin。",
        "用两者差额算最多能亏多少钱。",
        "用亏损除以 total units 得到价格变动。",
        "根据 long/short 判断触发价格是上升还是下降。"
      ],
      exampleZh: "Assignment 1 Q3 中 long 2 张 FCOJ，每张 15,000 磅。账户从 16,000 跌到 12,000 才 margin call，允许亏损 4,000。每 cent/lb 对总头寸影响 300，所以价格下跌 13.33 cents 触发。",
      examTipZh: "Initial margin is not a cost 这句话很重要。期货开仓本身通常零价值，保证金只是履约担保。",
      terms: ["initial margin", "maintenance margin", "margin call", "settlement price", "marked to market"]
    },
    {
      headingZh: "2. Basis 和 basis risk",
      headingEn: "Basis and basis risk",
      paragraphs: [
        "Basis 定义为 spot price minus futures price。临近交割时，同一标的的 spot 和 futures 通常会 convergence，因为如果差距太大就会出现交割套利。",
        "套保并不保证最终价格完全锁死，因为真实买卖的地点、品级、时间可能与期货合约不同。这种不匹配就是 basis risk。Cross hedge 时，basis risk 往往更明显，因为用的 futures 标的并不是被套保资产本身。",
        "Short hedge 是你已经持有资产或未来会卖出资产，担心价格下跌；long hedge 是你未来要买入资产，担心价格上涨。方向判断先于公式。"
      ],
      steps: [
        "判断被套保风险：价格上涨痛苦还是价格下跌痛苦。",
        "上涨痛苦用 long futures，下跌痛苦用 short futures。",
        "写出 effective price，把 spot transaction 和 futures gain/loss 合并。",
        "说明 basis 的变化会导致 hedge outcome 不确定。"
      ],
      exampleZh: "航空公司未来买 fuel，怕价格上涨，所以 long futures。农场主未来卖 corn，怕价格下跌，所以 short futures。",
      terms: ["basis", "basis risk", "short hedge", "long hedge", "convergence"]
    },
    {
      headingZh: "3. 最小方差套保比率 h*",
      headingEn: "Minimum variance hedge ratio",
      paragraphs: [
        "当 futures 标的和现货风险不是同一个资产，或者价格变化幅度不同，就不能简单一单位现货配一单位期货。Minimum variance hedge ratio 用 correlation 和 volatility 调整 hedge size。",
        "公式 h* = rho sigma_S / sigma_F。rho 越高，期货越适合套保；现货波动越大，需要更多 futures；期货波动越大，单位期货能抵消更多风险，需要更少合约。",
        "合约数量还要除以每张 futures contract 的规模。题目如果用每 1 cent 损失多少美元，要先把它还原成真实数量 exposure。"
      ],
      steps: [
        "算 h*。",
        "把 dollar sensitivity 转成 underlying units。",
        "hedged units = h* times exposure units。",
        "contracts = hedged units / contract size。",
        "根据风险方向决定 long 或 short。"
      ],
      exampleZh: "Assignment 1 Q6 中 rho=0.8，新燃料波动率是 gasoline futures 的 1.5 倍，所以 h*=1.2。每 1 cent 损失 1,000,000 表示 exposure 是 100,000,000 gallons，最终 long 3,000 张 gasoline futures。",
      examTipZh: "考试答案不要只写数字，要写 The company should take a long futures position because it is hurt by price increases。",
      terms: ["cross hedge", "hedge ratio", "correlation", "volatility", "contract size"]
    },
    {
      headingZh: "4. 用 index futures 调整 portfolio beta",
      headingEn: "Changing portfolio beta with index futures",
      paragraphs: [
        "股票组合的系统性风险可以用 beta 表示。卖出股票会改变组合结构且有交易成本，而 index futures 可以较快地把 beta 调高或调低。",
        "公式 N = (beta_T - beta_P) V_A / (F_0 M)。如果目标 beta 小于当前 beta，N 为负，表示 short index futures；如果目标 beta 大于当前 beta，N 为正，表示 long index futures。",
        "这里的 F_0 M 是一张指数期货的名义价值，不是保证金。很多人把保证金放进分母，这是错误的。"
      ],
      steps: [
        "确认 current beta 和 target beta。",
        "计算每张期货名义价值 F_0 times multiplier。",
        "代入公式得到 N。",
        "N 的正负直接给出 long 或 short。"
      ],
      exampleZh: "Assignment 1 Q7 中组合 100 million，beta 从 1.4 降到 0.5，指数 2,000，乘数 250，N=-180，所以 short 180 张。升到 1.8 时 N=80，所以 long 80 张。",
      terms: ["portfolio beta", "target beta", "index futures", "multiplier", "notional exposure"]
    }
  ],
  "interest-rates": [
    {
      headingZh: "1. 利率不是一个数字，而是一套报价规则",
      headingEn: "Rates depend on compounding conventions",
      paragraphs: [
        "同样写 8%，annual compounding, semiannual compounding, continuous compounding 代表的实际增长都不同。衍生品定价最怕把 compounding convention 混在一起。",
        "Continuous compounding 的好处是折现因子非常简洁：未来现金流 A 的现值是 A e^{-RT}，现在本金 P 的未来值是 P e^{RT}。Forward pricing, FRA, binomial tree 中经常用这种形式。",
        "如果题目给 semiannual rate，要么直接按半年复利现金流折现，要么先转换成 continuous rate。转换不是简单除以 2，而是用对数关系。"
      ],
      steps: [
        "先圈出 rate 的 compounding convention。",
        "确认 T 的单位是年，例如 6 months = 0.5。",
        "所有现金流使用同一种口径折现。",
        "如果需要比较不同 rate，先统一成 continuous 或 discount factor。"
      ],
      exampleZh: "Assignment 1 中 zero rate 表格若给 semiannual compounding，转换为 continuous rate 时使用 R_c = m ln(1+R_m/m)。",
      examTipZh: "写计算过程时，把 T=months/12 写出来，可以避免很多小数错误。",
      terms: ["annual compounding", "semiannual compounding", "continuous compounding", "discount factor"]
    },
    {
      headingZh: "2. Zero rate 和 discount factor",
      headingEn: "Zero rates and discount factors",
      paragraphs: [
        "Zero rate 是从今天到某个到期日的一次性投资利率，对应 zero-coupon bond。Coupon bond 可以拆成多笔现金流，所以它的价格是每笔 cash flow 用对应 maturity 的 zero rate 折现后的总和。",
        "Bootstrapping 的核心是用短期限工具先确定短端 discount factors，再用稍长期 coupon bond 或 swap rate 解出下一个未知 discount factor。它不是记公式，而是逐步解未知数。",
        "Discount factor 比 rate 更底层。只要知道每个期限的 discount factor，就能定价任意确定现金流；zero rate 只是 discount factor 的一种表达。"
      ],
      steps: [
        "把债券现金流按时间列出来。",
        "已知期限的现金流直接用已知 discount factor。",
        "剩下价格方程中只有一个未知 discount factor。",
        "解出 discount factor 后再转换为 zero rate。"
      ],
      exampleZh: "如果 2 年 par swap rate 是 11%，可以把它看作价格为 100、每年 coupon 11、到期还本 100 的 par bond。Assignment 3 Q1 就是用这个逻辑从 swap rates 反推 zero rates。",
      terms: ["zero rate", "zero-coupon bond", "coupon bond", "bootstrapping", "discount factor"]
    },
    {
      headingZh: "3. Forward rate 的直觉",
      headingEn: "The intuition behind forward rates",
      paragraphs: [
        "Forward rate 是市场今天隐含的未来某段时间利率。它不是未来一定发生的利率，而是让两种投资路径今天无套利相等的 implied rate。",
        "例如从 0 到 T2 投资，可以直接锁定 T2 的 zero rate；也可以先投到 T1，再在 T1 到 T2 用 forward rate 滚动。无套利要求两条路径的终值相同。",
        "连续复利下公式 R_F=(R_2T_2-R_1T_1)/(T_2-T_1)。这个公式来自指数相乘，不是两个 zero rates 的平均。"
      ],
      steps: [
        "写出直接投资到 T2 的增长因子 e^{R2 T2}。",
        "写出先到 T1 再滚动的增长因子 e^{R1 T1} e^{RF (T2-T1)}。",
        "令两者相等。",
        "取对数并解 RF。"
      ],
      examTipZh: "如果 yield curve upward sloping，远期利率通常可能高于较长期 zero rate；不要用简单平均直觉判断。",
      terms: ["forward rate", "implied rate", "yield curve", "rolling investment"]
    },
    {
      headingZh: "4. FRA 和 duration 为什么放在利率章",
      headingEn: "FRA and duration as interest-rate tools",
      paragraphs: [
        "Forward Rate Agreement 是锁定未来某段借贷利率的 OTC 合约。它的 payoff 取决于实际 market rate 和 agreed rate 的差异。因为结算通常发生在借款开始时，所以 payoff 需要把期末利息差折现回 settlement date。",
        "Duration 衡量债券价格对 yield 变化的敏感度。利率上升，债券价格下降；duration 越长，价格对利率变化越敏感。后面的 Treasury bond futures hedge 会直接用 duration-based hedge ratio。",
        "FRA 关注一个短期未来利率，duration 关注整个债券现金流的平均期限和敏感度。二者都是理解利率风险的工具。"
      ],
      steps: [
        "FRA 题先确定 notional, contract rate, actual rate, period length。",
        "算利息差 notional times rate difference times period。",
        "如果在 period start 结算，把利息差用实际 rate 折现一个 period。",
        "duration 题先确认用 Macaulay duration 还是 modified duration。"
      ],
      terms: ["FRA", "settlement date", "duration", "modified duration", "interest-rate risk"]
    }
  ],
  "forward-pricing": [
    {
      headingZh: "1. Cash-and-carry 是所有 forward pricing 的核心",
      headingEn: "Cash-and-carry as the core pricing argument",
      paragraphs: [
        "无收益资产的 forward price 是 F0 = S0 e^{rT}。直觉是：今天买现货并借钱融资，到期把现货交出去，融资成本必须反映在未来交割价格里。",
        "如果市场 forward price 太高，就 cash-and-carry：借钱买现货，同时 short forward，到期交割现货收高价并还贷款。如果 forward price 太低，就 reverse cash-and-carry：short sell 现货、投资现金、long forward。",
        "这个逻辑的重点是复制未来现金流。不同 forward 公式只是对 spot holder 在持有期间收到收益或支付成本的修正。"
      ],
      steps: [
        "先写无收益基准公式 F0=S0 e^{rT}。",
        "有现金收益就先从 S0 减去收益现值 I。",
        "有持有成本就把成本现值 U 加到 S0。",
        "有连续收益率或成本率，就放进指数的 r-q 或 r+u。"
      ],
      exampleZh: "Assignment 2 Q1 中股票有两次确定现金股利，先算两笔股利现值 I，再用 (S0-I)e^{rT}。这比把股利简单从未来价格中减掉更稳。",
      examTipZh: "看到 arbitrage question，答案结构通常是 identify overpriced side, buy cheap portfolio, sell expensive portfolio, show locked-in profit。",
      terms: ["cash-and-carry", "reverse cash-and-carry", "forward price", "investment asset"]
    },
    {
      headingZh: "2. I, q, U, r_d, r_f 分别是什么意思",
      headingEn: "Interpreting income, yield, storage cost and FX rates",
      paragraphs: [
        "I 是确定现金收益的现值，例如已知每股现金股利。q 是连续收益率，例如 stock index 的 continuous dividend yield。二者不能混用：I 是货币金额，q 是年化比例。",
        "U 是 storage cost 的现值，适用于商品。储藏成本让持有现货更贵，因此提高 forward price。若成本以 continuous rate u 给出，常见形式是 F0=S0 e^{(r+u)T}。",
        "FX forward 中，外币本身可以看成支付 foreign risk-free rate 的资产。若 S 是 domestic currency per unit foreign currency，则 F0=S0 e^{(r_d-r_f)T}。domestic rate 提高会推高 forward，foreign rate 提高会压低 forward。"
      ],
      steps: [
        "题目写 cash dividend, dollar dividend, fixed income，用 I。",
        "题目写 dividend yield, income yield，用 q。",
        "题目写 storage cost in dollars，用 U；写 percentage storage cost，用 u。",
        "题目是 exchange rate，先确认报价方向，再套 r_d-r_f。"
      ],
      exampleZh: "Assignment 2 Q3 中 USD/EUR spot=1.4500 表示每 1 EUR 等于 1.45 USD。USD 是 domestic rate，EUR 是 foreign rate，所以用 r_d-r_f 解 implied euro rate。",
      terms: ["known income", "dividend yield", "storage cost", "domestic rate", "foreign rate"]
    },
    {
      headingZh: "3. Commodities: contango, backwardation 和 convenience yield",
      headingEn: "Commodity futures curves and convenience yield",
      paragraphs: [
        "商品分 investment asset 和 consumption asset。黄金更接近 investment asset，可以存储并用于投资；原油、铜、农产品常有消费用途，持有现货能带来 convenience yield，例如保证生产不中断。",
        "Contango 指远期期货价高于近期期货价或 spot，一般和融资成本、储藏成本有关。Backwardation 指远期价格低于近端价格，通常说明眼前现货稀缺或 convenience yield 很高。",
        "对于 consumption asset，套利通常只能给出 upper bound，因为当 futures price 太低时，reverse cash-and-carry 需要 short sell commodity，但现货短卖可能不可行，且持有现货的便利收益不能被完全复制。"
      ],
      steps: [
        "先判断商品是否可轻易 short sell 和存储。",
        "若是 investment commodity，用 no-arbitrage price 更直接。",
        "若是 consumption commodity，说明 convenience yield 让公式更像 upper bound。",
        "用 oil futures curve 解释市场状态时，把价格曲线和库存、运输、短期供需联系起来。"
      ],
      exampleZh: "Oil futures supplement 的核心不是背某一天油价，而是理解为什么同一种商品不同交割月价格不同：库存压力、短期需求、储藏能力和 convenience yield 会共同影响曲线形状。",
      examTipZh: "Commodity 解释题中写 convenience yield lowers the futures price relative to pure cost-of-carry value 很加分。",
      terms: ["commodity futures", "contango", "backwardation", "convenience yield", "cost of carry"]
    },
    {
      headingZh: "4. Forward contract 的价值和价格不是同一件事",
      headingEn: "Forward value versus forward price",
      paragraphs: [
        "Forward price 是让新签约 forward contract 初始价值为零的交割价格。Forward value 是一份已经签过的合约在今天值多少钱。两者经常被混淆。",
        "对 long forward，合约价值通常写成 f = (S_t - I_t) - K e^{-r(T-t)}，其中 K 是旧合约交割价。对 short forward，价值就是相反数。题目如果问 value of a short forward，一定要注意符号。",
        "Assignment 2 Q1 的第二问就是典型：三个月后股票价格变了，旧合约 K 不变，但剩余股利、剩余期限、当前 spot 都变了。要重新计算这份旧合约的价值，而不是重新求一个新 forward price 后直接当答案。"
      ],
      steps: [
        "确认问的是 forward price 还是 value of existing forward。",
        "如果是新合约价格，令初始价值为零。",
        "如果是旧合约价值，使用旧 K 并按剩余期限折现。",
        "最后按 long 或 short 调整正负号。"
      ],
      terms: ["forward price", "forward value", "delivery price", "long forward", "short forward"]
    }
  ],
  "interest-rate-futures": [
    {
      headingZh: "1. 债券报价：quoted price, cash price, accrued interest",
      headingEn: "Bond quotation and accrued interest",
      paragraphs: [
        "Treasury bond 的 quoted price 通常不是实际成交支付的 cash price。Cash price = quoted price + accrued interest。Accrued interest 是上一付息日到交割日之间卖方已经赚到但还没收到的利息，买方要补给卖方。",
        "美债报价如 102-07 表示 102 加 7/32，而不是 102.07。这个细节很容易让计算错几个点。",
        "Day count convention 决定 accrued interest 按多少天计算。题目如果给 actual days 和 coupon period days，就按比例乘 coupon。"
      ],
      steps: [
        "把 32nds 报价转成小数价格。",
        "计算上一 coupon date 到 settlement date 的天数比例。",
        "accrued interest = coupon payment times elapsed days / coupon period days。",
        "cash price = quoted price + accrued interest。"
      ],
      exampleZh: "如果 quoted price 是 102-07，每 100 面值价格是 102 + 7/32 = 102.21875。再加 accrued interest 才是买方实际支付金额。",
      terms: ["quoted price", "cash price", "accrued interest", "day count convention", "32nds"]
    },
    {
      headingZh: "2. Treasury bond futures 和 conversion factor",
      headingEn: "Treasury bond futures and conversion factors",
      paragraphs: [
        "Treasury bond futures 的交割允许 short party 从一篮子合格债券中选择交割哪一只。为了让不同 coupon 和 maturity 的债券可比，交易所给每只债券一个 conversion factor。",
        "交割收到的金额大致是 futures settlement price times conversion factor plus accrued interest。Short 会选择 cheapest-to-deliver bond，也就是交割后净成本最低的债券。",
        "CTD 不是 coupon 最低或价格最低的债券，而是比较 quoted bond price 和 futures-adjusted invoice amount 后的经济结果。"
      ],
      steps: [
        "对每个可交割债券计算 invoice price。",
        "用 market cash price 减去 invoice price 得到 delivery cost。",
        "选择 cost 最低的债券作为 CTD。",
        "如果做 hedge，通常用 CTD 的价格和 duration 近似 futures exposure。"
      ],
      examTipZh: "解释 conversion factor 时写 It standardizes deliverable bonds by converting them into an equivalent notional bond。",
      terms: ["conversion factor", "deliverable bond", "invoice price", "cheapest-to-deliver", "CTD"]
    },
    {
      headingZh: "3. Eurodollar futures 的报价方向",
      headingEn: "Eurodollar futures quote and rate direction",
      paragraphs: [
        "Eurodollar futures quote Q = 100 - implied 3-month LIBOR rate。报价越高，隐含利率越低；报价越低，隐含利率越高。这和很多同学的直觉相反。",
        "借款人怕未来利率上升。利率上升会让 Eurodollar futures price 下跌，所以借款人应该 short Eurodollar futures，价格下跌时 futures gain 抵消更高借款成本。",
        "投资者或未来要存款的一方怕利率下降，因为未来收益变少。利率下降时期货价格上涨，所以可以 long Eurodollar futures。"
      ],
      steps: [
        "用 implied rate = 100 - quote。",
        "判断自己怕利率上升还是下降。",
        "怕上升就 short，怕下降就 long。",
        "把 futures gain/loss 和实际 borrowing/lending rate 合并，得到 locked-in rate。"
      ],
      exampleZh: "Assignment 2 Q8 中 quote=98.40，隐含 LIBOR=1.60%。公司未来借款且支付 LIBOR+0.5%，所以锁定约 2.10%，并应 short futures。",
      terms: ["Eurodollar futures", "implied LIBOR", "short hedge", "locked-in borrowing rate"]
    },
    {
      headingZh: "4. Duration-based futures hedge",
      headingEn: "Duration-based hedging with bond futures",
      paragraphs: [
        "债券组合面对的是利率风险，而不是单纯价格风险。Duration-based hedge 用价格敏感度匹配：现货组合价格变化约等于 -D_P P delta y，期货对应债券价格变化约等于 -D_F F delta y。",
        "常用公式 N = P D_P / (F D_F)。如果要 hedge 一个 long bond portfolio 的利率上升风险，一般 short Treasury bond futures，因为利率上升时债券和期货价格下跌，short futures 盈利。",
        "实际题目可能还要乘 conversion factor 或用 CTD duration，取决于讲义给出的口径。做题时不要只背一个公式，要看 F 和 D_F 对应的是 futures contract 还是 CTD bond。"
      ],
      steps: [
        "确认现货组合价值 P 和 duration D_P。",
        "确认 futures exposure F 和可交割债券 duration D_F。",
        "代入 N=P D_P/(F D_F)。",
        "根据持仓方向决定 short 或 long futures。"
      ],
      terms: ["duration hedge", "Treasury bond futures", "yield change", "CTD duration", "price sensitivity"]
    }
  ],
  swaps: [
    {
      headingZh: "1. Plain vanilla interest rate swap 的现金流",
      headingEn: "Cash flows of a plain vanilla interest rate swap",
      paragraphs: [
        "Plain vanilla interest rate swap 是一方支付固定利率、收取浮动利率，另一方相反。Notional principal 通常不交换，只是用来计算利息。",
        "支付频率很重要。例如半年支付一次，则每期 fixed payment = fixed rate times notional times 0.5。Floating leg 通常以 LIBOR 或类似 reference rate 重置。",
        "Swap 可以把 borrowing exposure 转换成另一个形式。公司已有 floating-rate debt，如果进入 pay fixed receive floating swap，收到的 floating 可以抵消债务浮动利息，净效果接近 fixed-rate debt。"
      ],
      steps: [
        "写出原始债务或资产的现金流。",
        "写出 swap 中 pay leg 和 receive leg。",
        "把两者相加，看剩下 fixed 还是 floating。",
        "注意 notional 一般不交换。"
      ],
      exampleZh: "如果公司借入 LIBOR+0.8%，再进入 pay 5% receive LIBOR swap，LIBOR 支付和 LIBOR 收入抵消，净成本约为 5.8%。",
      terms: ["plain vanilla swap", "notional principal", "pay fixed", "receive floating", "reference rate"]
    },
    {
      headingZh: "2. Swap 估值：拆成债券",
      headingEn: "Valuing swaps as bonds",
      paragraphs: [
        "对 pay fixed receive floating 的一方，swap value = floating-rate bond value - fixed-rate bond value。直觉是你收浮动现金流，等价于持有浮息债；你付固定现金流，等价于做空固定利率债。",
        "Floating-rate bond 在 reset date 刚重置后通常接近 par，因为下一期 coupon 按市场利率重新设定。Fixed-rate bond 则需要把未来固定 coupon 和本金用当前 zero rates 折现。",
        "估值符号很关键。同一个 swap 对 receive fixed pay floating 的一方，价值就是相反数。"
      ],
      steps: [
        "确定估值视角：pay fixed 还是 receive fixed。",
        "计算 fixed leg 的 present value。",
        "计算 floating leg 的 present value，reset date 附近可用 par plus accrued logic。",
        "按视角做 B_floating - B_fixed 或相反。"
      ],
      examTipZh: "先写 For the party paying fixed, V = B_fl - B_fix，可以让阅卷人看到你的符号方向。",
      terms: ["swap valuation", "fixed-rate bond", "floating-rate bond", "present value", "reset date"]
    },
    {
      headingZh: "3. Swap 估值：拆成 FRA",
      headingEn: "Valuing swaps as a strip of FRAs",
      paragraphs: [
        "一个 interest rate swap 也可以看作一串 FRA。每个 payment date 上，固定利率和未来浮动利率的差额形成一个净现金流，然后折现回今天。",
        "这种方法在理解 par swap rate 时特别有用。Par swap rate 是让 fixed leg PV 等于 floating leg PV 的固定利率，也就是初始 swap value 为零的 rate。",
        "如果所有 discount factors 已知，par swap rate = (1 - P(0,T_n)) / sum alpha_i P(0,T_i)，这里 alpha_i 是每期 year fraction。"
      ],
      steps: [
        "列出每个 payment date。",
        "用 forward rates 估计每期 floating payment。",
        "计算 fixed minus floating 或 floating minus fixed 的净额。",
        "用对应 discount factor 折现并求和。"
      ],
      terms: ["strip of FRAs", "par swap rate", "payment date", "year fraction", "discount factor"]
    },
    {
      headingZh: "4. Comparative advantage 题怎么做",
      headingEn: "Comparative advantage swap problems",
      paragraphs: [
        "Comparative advantage 题通常给 A、B 两家公司在 fixed 和 floating 市场的借款成本。绝对成本更低的一方不一定在两个市场优势相同，优势差额创造了 swap savings。",
        "做题关键是比较 quality spread differential。两个市场利差之差就是可分配总收益，再扣除金融中介收益，剩下由双方分配。",
        "这类题要清楚最终谁想要 fixed，谁想要 floating，然后让各自在相对优势市场借款，再通过 swap 交换现金流。"
      ],
      steps: [
        "计算 fixed market 中 A 和 B 的利差。",
        "计算 floating market 中 A 和 B 的利差。",
        "两者差额是总 comparative advantage。",
        "按双方目标设计直接借款和 swap 支付。",
        "检查每一方最终成本是否低于直接进入目标市场。"
      ],
      terms: ["comparative advantage", "quality spread differential", "financial intermediary", "borrowing cost"]
    }
  ],
  securitization: [
    {
      headingZh: "1. 证券化的基本结构",
      headingEn: "Basic securitization structure",
      paragraphs: [
        "Securitization 是把一组贷款或应收现金流打包，转移给 SPV，再由 SPV 发行证券给投资者。投资者实际拿到的是基础资产池产生的现金流。",
        "SPV 的作用是把资产和发起人的信用风险隔离。理论上，如果发起人破产，SPV 中资产仍然支持证券现金流，这叫 bankruptcy remoteness。",
        "证券化不是让风险消失，而是把风险重新分层、重新分配。Senior tranche 风险低但收益低，equity tranche 风险最高但最先享受超额收益。"
      ],
      steps: [
        "识别 collateral pool 是什么资产。",
        "识别 SPV 是否把资产从 originator 转移出来。",
        "识别 tranches 的 seniority 顺序。",
        "说明现金流和损失如何按 waterfall 分配。"
      ],
      terms: ["securitization", "SPV", "originator", "collateral pool", "bankruptcy remote"]
    },
    {
      headingZh: "2. Waterfall: 收益从上往下，损失从下往上",
      headingEn: "Waterfall rules for cash flows and losses",
      paragraphs: [
        "Waterfall 是证券化最重要的考试点。正常现金流通常先支付 senior，再支付 mezzanine，最后剩余给 equity。损失方向相反：equity 先亏，亏完后 mezzanine 亏，最后才轮到 senior。",
        "因此 senior tranche 不是无风险，而是有 credit enhancement。只有当底层资产损失超过低层 tranche 的保护厚度时，senior 才开始损失。",
        "做题时不要直接把总资产损失率乘到每个 tranche。应该先用总损失按层级打穿，然后再除以每层自己的本金得到该 tranche 的损失率。"
      ],
      steps: [
        "把每个 tranche 的 thickness 写成百分比。",
        "从 equity 开始吸收总资产损失。",
        "equity 用完后才进入 mezzanine。",
        "mezzanine 用完后才进入 senior。",
        "每层损失率 = 该层承担损失 / 该层本金。"
      ],
      exampleZh: "Assignment 3 Q5 中 ABS 结构为 senior 75%, mezzanine 20%, equity 5%。若 mortgage loss 为 16%，equity 损失 100%，mezzanine 损失 (16-5)/20=55%，senior 不损失。",
      terms: ["waterfall", "senior tranche", "mezzanine tranche", "equity tranche", "credit enhancement"]
    },
    {
      headingZh: "3. ABS CDO 为什么会放大风险",
      headingEn: "Why ABS CDOs can amplify losses",
      paragraphs: [
        "ABS CDO 不是直接买原始 mortgages，而是把 ABS 的某些 tranche，常见是 mezzanine tranche，再打包成新的 CDO collateral。也就是说，CDO 的底层资产已经是分层后的风险。",
        "如果原始 mortgage pool 有一定损失，ABS mezzanine tranche 可能已经遭受很高损失。这个高损失率再传到 ABS CDO 中，会打穿 CDO 的 equity 和 mezzanine，甚至伤到 CDO senior。",
        "这就是 assignment 中想强调的结构性杠杆：同样的底层 mortgage loss，经过再证券化后，某些被标成 senior 的 CDO tranche 也可能损失很大。"
      ],
      steps: [
        "第一层：先算原始 ABS 各 tranche 损失。",
        "第二层：取被再证券化的 tranche 损失作为 CDO collateral loss。",
        "第三层：按 CDO 自己的 waterfall 再分配。",
        "不要把 mortgage loss 直接套到 CDO tranche。"
      ],
      exampleZh: "Assignment 3 Q5 中 mortgage loss 16% 导致 ABS mezzanine loss 55%。ABS CDO 的 collateral loss 就是 55%，所以 CDO equity 和 mezzanine 被打穿，CDO senior 也损失 40%。",
      examTipZh: "解释题可写 Re-securitization concentrates mezzanine risk and can create highly sensitive senior CDO tranches。",
      terms: ["ABS", "CDO", "re-securitization", "collateral loss", "structural leverage"]
    }
  ],
  "option-properties": [
    {
      headingZh: "1. Payoff 和 profit 的区别",
      headingEn: "Payoff versus profit",
      paragraphs: [
        "Option payoff 是到期时合约本身支付多少；profit 是 payoff 再减去期初 premium 的成本，通常还可以考虑 premium 的时间价值。很多基础图题默认忽略利息，但 parity 和套利题不能随便忽略。",
        "Long call payoff = max(S_T-K,0)，long put payoff = max(K-S_T,0)。Short option 的 payoff 是对应 long payoff 的相反数。",
        "Exercise condition 不是 profit condition。Call 只要 S_T>K 就会被行权，但买方只有 S_T>K+premium 时才真正盈利。Put 类似，行权条件是 S_T<K，盈利条件还要考虑 premium。"
      ],
      steps: [
        "先写 payoff，不急着减 premium。",
        "再写 initial cost 或 premium。",
        "profit = payoff - future value of cost，简单图题可直接 payoff - premium。",
        "最后分清 exercise, break-even, maximum profit, maximum loss。"
      ],
      terms: ["payoff", "profit", "premium", "exercise", "break-even"]
    },
    {
      headingZh: "2. 期权价格上下界",
      headingEn: "Option price bounds",
      paragraphs: [
        "Option price 不能乱给。Call 的价值不能超过 stock price，因为 call 只是买股票的权利；put 的价值不能超过 strike 的现值或 strike 本身，取决于 European 还是 American。",
        "Lower bound 来自 intrinsic value 和 no-arbitrage。例如 European call on non-dividend stock 至少为 S0 - K e^{-rT} 和 0 的较大值。如果价格低于下界，就可以买入便宜 call 并构造套利。",
        "有 dividend 时，股票持有者会收到股利，而 call holder 不收到，所以 call lower bound 要扣除 dividend present value。"
      ],
      steps: [
        "确认是 call 还是 put。",
        "确认 European 还是 American。",
        "确认是否有 dividend。",
        "写出 upper bound 和 lower bound。",
        "若市场价违反 bounds，说明套利方向。"
      ],
      examTipZh: "Bounds 题不要只给公式，最好补一句 If the option is below the lower bound, buy the option and sell the replicating portfolio。",
      terms: ["upper bound", "lower bound", "intrinsic value", "time value", "dividend"]
    },
    {
      headingZh: "3. Put-call parity 的复制逻辑",
      headingEn: "Replication behind put-call parity",
      paragraphs: [
        "Put-call parity 不是死记公式，而是比较两个到期现金流完全一样的组合。一个组合是 long call 加上 cash to pay strike，另一个组合是 long put 加上 stock。到期无论 S_T 高低，两边都得到同样资产价值。",
        "无股利 European options 的基本形式是 c + K e^{-rT} = p + S0。有确定股利时，股票持有者会收到股利，所以公式变为 c + D + K e^{-rT} = p + S0，其中 D 是股利现值。",
        "套利题就是检查左右两边哪边贵。卖贵的一边，买便宜的一边，未来现金流抵消，今天差价就是利润。"
      ],
      steps: [
        "写出正确 parity 公式，注意 dividend。",
        "计算 left side 和 right side 的今天成本。",
        "贵的一边 short，便宜的一边 long。",
        "用到期两种状态说明现金流相同。",
        "今天收到的净现金就是 arbitrage profit。"
      ],
      exampleZh: "Assignment 3 Q8 中 call 和 put 都为 3，K=20，S0=19，且 1 个月后有 1 股利。左边 c+D+Ke^{-rT} 约 23.50，右边 p+S0=22，左边贵，所以 short call, borrow PV(K), buy put and stock。",
      terms: ["put-call parity", "replicating portfolio", "arbitrage", "present value of dividend"]
    },
    {
      headingZh: "4. American option 的提前行权直觉",
      headingEn: "Early exercise intuition for American options",
      paragraphs: [
        "American option 可以提前行权，所以价值至少不低于 European option。是否提前行权取决于 immediate exercise value 和 continuation value 的比较。",
        "不支付股利的 American call 通常不应提前行权。原因是提前行权会放弃时间价值，并且提前支付 strike；继续持有 call 可以保留上涨空间和现金利息。",
        "American put 可能提前行权，尤其是深度实值、利率较高、继续持有的时间价值不足时。因为提前收到 K-S 可以把现金拿去投资。"
      ],
      steps: [
        "对每个节点计算 continuation value。",
        "计算 immediate exercise value。",
        "American value = max(immediate exercise, continuation)。",
        "European option 不做这个比较，只能继续持有到期。"
      ],
      terms: ["American option", "European option", "early exercise", "continuation value", "time value"]
    }
  ],
  "trading-strategies": [
    {
      headingZh: "1. 策略题的统一方法：逐项相加",
      headingEn: "Add individual payoffs piece by piece",
      paragraphs: [
        "Trading strategies 看起来名字很多：covered call, protective put, bull spread, bear spread, butterfly, straddle, strangle。但考试真正要你会的是把每个 leg 的 payoff 写出来并相加。",
        "先不要背图。把每个 option 的 long/short、call/put、strike、premium 写成表格。然后按 strike 把 S_T 分成区间，在每个区间里合并 payoff。",
        "Short option 的 payoff 是负数，premium 是一开始收到的钱。很多策略最大亏损和最大盈利都来自 short leg 的形状。"
      ],
      steps: [
        "列出所有 legs。",
        "为每个 leg 写 payoff。",
        "找出所有 strikes，把数轴切成区间。",
        "每个区间加总 payoff。",
        "再加上或减去 initial premium 得到 profit。"
      ],
      examTipZh: "图形题先用分段表达式，再画图；不要只凭图形记忆。",
      terms: ["option leg", "piecewise payoff", "premium", "long option", "short option"]
    },
    {
      headingZh: "2. Covered call 和 protective put",
      headingEn: "Covered calls and protective puts",
      paragraphs: [
        "Covered call = long stock + short call。它适合持有股票但认为上涨空间有限的人。卖 call 收 premium，但如果股票涨过 strike，上方收益被放弃。",
        "Protective put = long stock + long put。它像给股票买保险：如果股票下跌，put payoff 抵消损失；如果股票上涨，仍保留上涨收益，但要付 premium。",
        "这两个策略和 put-call parity 关系很深。Protective put 和 fiduciary call 在 European 情况下可以通过 parity 联系起来。"
      ],
      steps: [
        "Covered call：股票 payoff 是 S_T，short call 是 -max(S_T-K,0)。",
        "Protective put：股票 payoff 是 S_T，long put 是 max(K-S_T,0)。",
        "分别讨论 S_T 小于 K 和大于 K。",
        "加入 premium 后找最大收益、最大亏损和 break-even。"
      ],
      terms: ["covered call", "protective put", "fiduciary call", "insurance", "upside cap"]
    },
    {
      headingZh: "3. Spreads: bull, bear, butterfly",
      headingEn: "Spread strategies",
      paragraphs: [
        "Bull spread 是看温和上涨，通常买低 strike call、卖高 strike call。它牺牲极端上涨收益来降低初始成本。Bear spread 则是看温和下跌。",
        "Butterfly spread 是押价格到期靠近中间 strike，通常买低 strike、买高 strike、卖两份中间 strike。它的图形像中间凸起，两边亏损有限。",
        "Put butterfly 和 call butterfly 在相同 strikes 下可以构造出相似 payoff。Assignment 3 Q9 用 put 构造 butterfly，核心仍是逐区间相加。"
      ],
      steps: [
        "确认 strikes 的低中高顺序。",
        "写出每个 strike 附近的 payoff 变化。",
        "检查中间 strike 是否是最大收益点。",
        "用 net premium 调整 payoff 得 profit。"
      ],
      exampleZh: "Assignment 3 Q9：buy 55 put, buy 65 put, sell two 60 puts。净成本 1，利润在 56 到 64 之间为正，S_T=60 时最大。",
      terms: ["bull spread", "bear spread", "butterfly spread", "strike price", "net premium"]
    },
    {
      headingZh: "4. Combinations: straddle 和 strangle",
      headingEn: "Volatility strategies",
      paragraphs: [
        "Straddle = long call + long put，通常相同 strike 和 maturity。它不是押方向，而是押大波动。只要价格大幅上升或大幅下跌，都可能盈利；如果价格停在 strike 附近，会亏掉 premium。",
        "Strangle 也是买 call 和 put，但 strikes 不同，通常 put strike 更低、call strike 更高。它成本较低，但需要更大的价格波动才盈利。",
        "Short straddle 或 short strangle 则相反，是押低波动，收 premium，但极端价格移动会导致大亏损。"
      ],
      steps: [
        "判断策略是 long volatility 还是 short volatility。",
        "计算总 premium。",
        "分别求上行和下行 break-even。",
        "说明最大亏损或潜在无限亏损。"
      ],
      terms: ["straddle", "strangle", "volatility", "break-even", "unlimited loss"]
    }
  ],
  "binomial-trees": [
    {
      headingZh: "1. 一步二叉树：复制组合和风险中性定价",
      headingEn: "One-step binomial tree and replication",
      paragraphs: [
        "Binomial tree 把未来价格简化成 up 和 down 两种状态。虽然真实世界不只两种状态，但这个模型可以清楚展示 no-arbitrage pricing 的逻辑。",
        "复制组合方法是找 delta 股股票和一笔借贷 B，让组合在 up 和 down 两种状态的价值都等于衍生品 payoff。因为未来两种状态都复制成功，今天价格必须等于 delta S0 + B。",
        "Risk-neutral valuation 是同一逻辑的简写。先算 p=(e^{r dt}-d)/(u-d)，再用 risk-neutral expected payoff 折现。p 不是现实上涨概率，而是让股票预期收益等于无风险利率的定价权重。"
      ],
      steps: [
        "计算 u 和 d。",
        "计算 up/down 状态下的 underlying price。",
        "计算每个状态的 derivative payoff。",
        "算 risk-neutral probability p。",
        "折现期望 payoff 得到 today value。"
      ],
      exampleZh: "Assignment 4 Q3 中 S0=25，两个月后为 27 或 23，payoff 是 S_T^2，所以 up payoff=729, down payoff=529。用 p=0.60504 折现，价值得 639.26。",
      terms: ["binomial tree", "replicating portfolio", "delta", "risk-neutral probability", "discounted expectation"]
    },
    {
      headingZh: "2. 两步树的 backward induction",
      headingEn: "Backward induction in a two-step tree",
      paragraphs: [
        "多步二叉树不是一次从今天跳到终点，而是先画 stock price tree，再从最后一期 payoff 往前推。每一个中间节点都像一个小的一步树。",
        "European option 只在 maturity 行权，所以终点 payoff 确定后，所有中间节点都用 continuation value 折现回来。",
        "如果树是 recombining tree，先上后下和先下后上到达同一个中间价格，这会减少节点数量。Assignment 4 的 u=1.06, d=0.95 就是两步 recombining tree。"
      ],
      steps: [
        "画 S0, Su, Sd, Suu, Sud, Sdd。",
        "在终点写 call 或 put payoff。",
        "从倒数第二层开始，每个节点用 f=e^{-r dt}[p f_u+(1-p)f_d]。",
        "一路推回 t=0。"
      ],
      exampleZh: "Assignment 4 Q1 中 S0=50，u=1.06，d=0.95，K=51。终点价格为 56.18, 50.35, 45.125。call payoff 为 5.18,0,0，向前折现得到 call 约 1.64。",
      terms: ["backward induction", "terminal payoff", "recombining tree", "continuation value"]
    },
    {
      headingZh: "3. American option 每个节点都要比较提前行权",
      headingEn: "American option early exercise checks at every node",
      paragraphs: [
        "American option 的关键不是最后多一个公式，而是每个可行权节点都要比较 immediate exercise 和 continuation value。只在初始节点比较是不完整的。",
        "American put 的 immediate exercise value 是 K-S。若该值大于继续持有价值，就应该提前行权。Call 则是 S-K，但无股利股票的 American call 一般不提前行权。",
        "Assignment 4 Q2 的 American put 在 down node 提前行权更优，因为当时股价已经跌到 47.5，立即行权价值 3.5，大于继续价值约 2.87。"
      ],
      steps: [
        "终点 payoff 与 European 相同。",
        "倒数第二层先算 continuation value。",
        "再算 immediate exercise value。",
        "节点价值取二者最大。",
        "继续向前推，直到 t=0。"
      ],
      examTipZh: "答案中明确写 At the down node, early exercise is optimal，因为这是 American put 题最容易丢分的点。",
      terms: ["American put", "immediate exercise value", "continuation value", "early exercise boundary"]
    },
    {
      headingZh: "4. Assignment 4 的完整复习抓手",
      headingEn: "How to review Assignment 4",
      paragraphs: [
        "Assignment 4 没有官方答案，所以网站和 PDF 中的解析是按 Lecture 12 的二叉树方法推导。复习时不要只背最后数值，要能独立从 stock tree 推到 option value tree。",
        "Q1-Q2 训练两步 European call, European put 和 American put 的区别。Q3 训练非标准 payoff S_T^2，这说明 binomial tree 不只适用于普通 call/put，只要能写出终点 payoff 就能定价。",
        "检查答案时，先看 p 是否在 0 到 1 之间。如果 p 不在这个区间，通常说明 u, d, r 或 dt 用错，或者模型存在套利。"
      ],
      steps: [
        "把 dt 写成 0.25 或 2/12，不要把月份当成年。",
        "用 e^{r dt} 而不是 1+r，除非题目明确 simple compounding。",
        "每一步折现一次，不要最后一次性用错误期限折现。",
        "American 节点写 max，European 节点不写 max。"
      ],
      terms: ["Assignment 4", "non-standard payoff", "risk-neutral valuation", "model check"]
    }
  ]
};

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
