import React, { useState, useEffect, useMemo } from 'react';
import { 
  Calculator, Clock, DollarSign, PieChart, ArrowRight, FileText, 
  Shield, Info, Mail, Menu, X, ChevronRight, TrendingUp, 
  CheckCircle2, Briefcase, Landmark, Percent, Calendar, User, Scale,
  Wallet, Lightbulb, Target, ArrowUpRight, MapPin, Phone, Globe,
  Award, Coffee, Sparkles, BookOpen, HeartPulse, Zap, Scale as ScaleIcon,
  ShieldCheck, HelpCircle, FileCheck
} from 'lucide-react';

/**
 * CalcHub - Integrated Financial Toolset
 * Fully AdSense Compliant & Navigation Optimized
 */

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [calcInput, setCalcInput] = useState({ amount: 25, hours: 40, tax: 18, otHours: 0, bonus: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [currentPage]);

  // Global Calculation Engine
  const stats = useMemo(() => {
    const hourly = Number(calcInput.amount) || 0;
    const hours = Number(calcInput.hours) || 0;
    const taxRate = Number(calcInput.tax) || 0;
    const bonus = Number(calcInput.bonus) || 0;

    const weekly = hourly * hours;
    const yearly = (weekly * 52) + bonus;
    const monthly = yearly / 12;
    const biweekly = yearly / 26;
    const netYearly = yearly * (1 - taxRate / 100);

    return { hourly, weekly, biweekly, monthly, yearly, netYearly, bonus };
  }, [calcInput]);

  const calculators = [
    { id: 'full-time-calc', title: 'Full-Time Salary', icon: <Award />, desc: 'Calculate total annual comp including bonuses.' },
    { id: 'part-time-calc', title: 'Part-Time Pay', icon: <Coffee />, desc: 'Flexible calculation for varied shifts.' },
    { id: 'hourly-to-salary', title: 'Hourly to Salary', icon: <Clock />, desc: 'Convert hourly wage to annual salary.' },
    { id: 'salary-to-hourly', title: 'Salary to Hourly', icon: <DollarSign />, desc: 'Find your hourly rate from annual pay.' },
    { id: 'paycheck-calc', title: 'Paycheck Estimator', icon: <Landmark />, desc: 'Estimate take-home pay after taxes.' },
    { id: 'overtime-pay-calc', title: 'Overtime Pay', icon: <TrendingUp />, desc: 'Calculate time-and-a-half earnings.' },
    { id: 'weekly-pay-calc', title: 'Weekly Pay', icon: <Calendar />, desc: 'Calculate gross weekly earnings.' },
    { id: 'biweekly-pay-calc', title: 'Biweekly Pay', icon: <Briefcase />, desc: 'Break down your 26 pay periods.' },
    { id: 'monthly-income-calc', title: 'Monthly Income', icon: <PieChart />, desc: 'Ideal for budgeting and rent apps.' },
    { id: 'annual-income-calc', title: 'Annual Income', icon: <FileText />, desc: 'Yearly view including bonuses.' },
  ];

  const guides = [
    { id: '15-an-hour', title: '$15 an Hour', rate: 15 },
    { id: '18-an-hour', title: '$18 an Hour', rate: 18 },
    { id: '20-an-hour', title: '$20 an Hour', rate: 20 },
    { id: '22-an-hour', title: '$22 an Hour', rate: 22 },
    { id: '25-an-hour', title: '$25 an Hour', rate: 25 },
    { id: '28-an-hour', title: '$28 an Hour', rate: 28 },
    { id: '30-an-hour', title: '$30 an Hour', rate: 30 },
    { id: '35-an-hour', title: '$35 an Hour', rate: 35 },
    { id: '40-an-hour', title: '$40 an Hour', rate: 40 },
    { id: '45-an-hour', title: '$45 an Hour', rate: 45 },
    { id: '50-an-hour', title: '$50 an Hour', rate: 50 },
    { id: '60-an-hour', title: '$60 an Hour', rate: 60 },
    { id: '75-an-hour', title: '$75 an Hour', rate: 75 },
    { id: '100k-a-year', title: '$100k a Year', rate: 48.08 },
  ];

  const AdSlot = ({ label, className = "" }) => (
    <div className={`bg-gray-50 border border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center p-8 my-8 min-h-[120px] relative overflow-hidden ${className}`}>
      <span className="absolute top-0 left-0 bg-gray-200 text-[10px] font-bold px-2 py-0.5 uppercase text-gray-500">Ad</span>
      <div className="text-gray-400 font-medium italic text-sm">{label || "AdSense Placeholder"}</div>
    </div>
  );

  const ResultsTable = ({ customStats }) => {
    const data = customStats || stats;
    const rows = [
      { label: 'Yearly Gross', value: data.yearly },
      { label: 'Monthly Gross', value: data.monthly },
      { label: 'Biweekly Gross', value: data.biweekly },
      { label: 'Weekly Gross', value: data.weekly },
      { label: 'Hourly Rate', value: data.hourly },
    ];
    return (
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm mt-6">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Period</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-indigo-50/30 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-700">{row.label}</td>
                <td className="px-6 py-4 font-mono font-bold text-indigo-900 text-right">
                  ${row.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const HomePage = () => (
    <div className="animate-in fade-in duration-500">
      <section className="pt-20 pb-16 px-4 text-center bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            Financial Precision <br />
            <span className="text-indigo-600">For Your Paycheck.</span>
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            Calculate your take-home pay, convert hourly wages, and explore detailed salary guides with our professional toolset.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setCurrentPage('full-time-calc')} className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg hover:bg-indigo-700 transition-all">Start Calculating</button>
            <button onClick={() => setCurrentPage('about')} className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-2xl font-bold hover:bg-gray-50 transition-all">Learn More</button>
          </div>
        </div>
      </section>

      {/* NEW: Financial Importance Long Form Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-100">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="prose prose-indigo max-w-none">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Why Accurate Salary Calculation Matters</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              In an era of economic volatility and complex tax structures, understanding the true value of your time is the foundation of personal financial security. Many professionals focus solely on their "gross annual number," yet fail to account for the nuances of pay frequency, tax withholdings, and the "real" hourly rate of their labor.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Precision in financial modeling allows you to negotiate from a position of power. Whether you are transitioning from a freelance hourly role to a salaried position or evaluating a job offer with a high bonus structure, being able to deconstruct these numbers into weekly and monthly cash flow estimates is essential for effective budgeting.
            </p>
            <div className="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
              <h4 className="font-bold text-indigo-900 mb-2">The "Hidden" Cost of Miscalculation</h4>
              <p className="text-sm text-indigo-800">
                A discrepancy of just $2.00 per hour in a standard 40-hour work week results in over $4,000 of lost gross income annually. Without accurate tools, these small gaps can significantly hinder long-term wealth accumulation and retirement planning.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Target className="text-indigo-600" size={20} /> Empowering Your Career
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our tools provide more than just numbers—they provide clarity. Use our comparisons to see how a promotion actually impacts your take-home pay after moving into a higher tax bracket.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="text-indigo-600" size={20} /> Data-Driven Decisions
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Stop guessing your budget. By using bi-weekly and monthly breakdowns, you can align your mortgage, rent, and loan payments with your actual cash inflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <AdSlot label="Top Billboard - Homepage" className="h-24 md:h-32" />
      </div>

      {/* Calculator Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-black">Popular Calculators</h2>
          <div className="h-px flex-1 bg-gray-100 mx-8 hidden md:block"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map(calc => (
            <div key={calc.id} onClick={() => setCurrentPage(calc.id)} className="p-8 rounded-3xl border border-gray-100 bg-white hover:border-indigo-600 hover:shadow-xl cursor-pointer transition-all group">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {calc.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{calc.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{calc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <AdSlot label="Horizontal Banner - Middle of Home" />
      </div>

      {/* Salary Guides Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50/50 rounded-[40px]">
        <div className="max-w-4xl mb-12">
          <h2 className="text-3xl font-black mb-4">Salary Knowledge Base</h2>
          <p className="text-gray-500">Explore our most requested hourly-to-salary conversion guides. Select a benchmark to see the full breakdown.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {guides.slice(0, 8).map(guide => (
            <button 
              key={guide.id} 
              onClick={() => setCurrentPage(guide.id)}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all text-left flex flex-col"
            >
              <span className="text-indigo-600 font-black text-xl mb-1">{guide.title}</span>
              <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">Annual Breakdown</span>
              <div className="mt-4 self-end bg-gray-50 p-1.5 rounded-full text-gray-400 group-hover:text-indigo-600 transition-colors">
                <ChevronRight size={16} />
              </div>
            </button>
          ))}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-indigo-600 p-6 rounded-2xl shadow-lg hover:bg-indigo-700 transition-all text-left flex flex-col justify-between group"
          >
            <span className="text-white font-black text-xl leading-tight">View All 14 Salary Guides</span>
            <div className="flex items-center gap-2 text-indigo-100 text-sm font-bold mt-4">
              Browse Library <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <AdSlot label="Footer-level Banner - Homepage" />
      </div>
    </div>
  );

  const CalculatorPage = ({ id, title, icon: Icon }) => (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-in slide-in-from-bottom-4 duration-500">
      <AdSlot label="Header Billboard - Calculator Page" className="h-24 mb-12" />
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">{Icon}</div>
            <h1 className="text-3xl font-black">{title}</h1>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <p className="text-sm text-gray-500 italic">Adjust the inputs below to calculate your real-world income metrics based on standard payroll algorithms.</p>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Hourly Wage ($)</label>
              <input 
                type="number" 
                value={calcInput.amount} 
                onChange={(e) => setCalcInput({...calcInput, amount: e.target.value})}
                className="w-full p-4 bg-gray-50 rounded-xl text-2xl font-black outline-none border-2 border-transparent focus:border-indigo-600 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Hours per Week</label>
              <input 
                type="number" 
                value={calcInput.hours} 
                onChange={(e) => setCalcInput({...calcInput, hours: e.target.value})}
                className="w-full p-4 bg-gray-50 rounded-xl text-xl font-bold outline-none border-2 border-transparent focus:border-indigo-600 transition-all"
              />
            </div>
          </div>
          
          <ResultsTable />
          
          <AdSlot label="In-feed Ad - Below Results" className="mt-12" />
          
          <div className="mt-12 prose prose-indigo text-gray-600 max-w-none">
            <h2 className="text-2xl font-bold text-gray-900">Professional Methodology of {title}</h2>
            <p>Our {title} engine uses the 2,080-hour work year standard (40 hours/week x 52 weeks). This is the benchmark used by the Bureau of Labor Statistics (BLS) and most major financial institutions for assessing loan eligibility and salary benchmarks.</p>
            <h3 className="text-xl font-bold text-gray-900 mt-8">Why Periodical Breakdowns Matter</h3>
            <p>
              Understanding your <strong>bi-weekly</strong> vs <strong>monthly</strong> pay is crucial for debt-to-income (DTI) calculations. Lenders typically look at your gross monthly income, while your daily life is governed by your weekly or bi-weekly take-home. By seeing all these metrics simultaneously, you can bridge the gap between "paper wealth" and "spendable cash."
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex gap-2">
                <CheckCircle2 size={18} className="text-indigo-600 flex-shrink-0" />
                <span><strong>Tax Efficiency:</strong> Gross income calculations are the first step in estimating your effective tax rate.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 size={18} className="text-indigo-600 flex-shrink-0" />
                <span><strong>Compounding Labor:</strong> Small adjustments in hourly rates lead to massive annual shifts.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Sidebar Ad */}
        <div className="w-full lg:w-80 space-y-6">
          <div className="bg-indigo-600 p-8 rounded-3xl text-white shadow-xl shadow-indigo-100">
            <h3 className="text-xs font-black uppercase tracking-widest opacity-70 mb-2">Yearly Estimated</h3>
            <div className="text-4xl font-black">${stats.yearly.toLocaleString()}</div>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-2 text-sm">Quick Pro Tip</h4>
            <p className="text-xs text-gray-500 leading-relaxed">If you work a salaried job, your "hourly rate" often includes unpaid overtime. Use this tool to find your <strong>effective</strong> hourly wage to see if that high-salary job is actually worth the extra hours.</p>
          </div>
          <AdSlot label="Sticky Sidebar Ad" className="min-h-[600px] sticky top-24" />
        </div>
      </div>
    </div>
  );

  const GuidePage = ({ slug }) => {
    const guide = guides.find(g => g.id === slug);
    const hourly = guide.rate;
    const yearly = hourly * 40 * 52;
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 animate-in fade-in">
        <AdSlot label="Header Billboard - Guide Page" className="h-24 mb-12" />
        
        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-center">{guide.title} is How Much a Year?</h1>
        <p className="text-gray-500 text-lg mb-8 text-center max-w-2xl mx-auto">A comprehensive financial breakdown and socio-economic analysis of a ${hourly}/hour wage in today's economy.</p>
        
        <ResultsTable customStats={{ yearly, monthly: yearly/12, biweekly: yearly/26, weekly: yearly/52, hourly }} />
        
        <AdSlot label="In-Article Banner" className="my-12" />

        <div className="mt-12 prose prose-indigo max-w-none text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Economic Context for {guide.title}</h2>
          <p>
            Earning <strong>${hourly} per hour</strong> translates to a gross annual salary of <strong>${yearly.toLocaleString()}</strong>. While this figure represents your top-line earnings, the real-world utility of this income varies drastically depending on your local cost of living (COL) index.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-8">Lifestyle and Budgeting Breakdown</h3>
          <p>
            At this income level, typical budgeting frameworks like the <strong>50/30/20 rule</strong> (50% for needs, 30% for wants, 20% for savings) require careful management. For someone earning ${yearly.toLocaleString()} per year, your gross monthly income is approximately ${(yearly/12).toLocaleString(undefined, {minimumFractionDigits: 2})}.
          </p>
          <div className="grid md:grid-cols-2 gap-8 my-10 not-prose">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="font-bold text-indigo-900 mb-3">Purchasing Power</h4>
              <p className="text-sm text-gray-600">This wage is often considered a "living wage" in many mid-sized cities, providing enough for basic housing, transportation, and healthcare without severe financial strain.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="font-bold text-indigo-900 mb-3">Savings Potential</h4>
              <p className="text-sm text-gray-600">To reach an emergency fund of $10,000 at this rate, an individual saving 10% of their gross pay would take approximately two years, highlighting the importance of consistent financial tracking.</p>
            </div>
          </div>
          <p>
            Understanding this rate is the first step in career laddering. If your goal is a higher salary, use this baseline to calculate the "gap" between your current earnings and your desired lifestyle costs. 
          </p>
        </div>
        
        <AdSlot label="End-of-Content Ad" className="mt-16" />
      </div>
    );
  };

  const LegalPage = ({ title, content }) => (
    <div className="max-w-3xl mx-auto px-4 py-16 animate-in fade-in">
      <h1 className="text-4xl font-black mb-8">{title}</h1>
      <div className="prose prose-indigo text-gray-600 leading-relaxed whitespace-pre-line">{content}</div>
    </div>
  );

  const AboutPage = () => (
    <div className="max-w-4xl mx-auto px-4 py-16 animate-in fade-in">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-6">About CalcHub</h1>
        <p className="text-xl text-gray-500">Precision-built financial tools for the modern workforce.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">CalcHub was designed to eliminate the guesswork from salary negotiations and personal budgeting. We provide clear, accurate, and private calculation tools to help you understand your worth.</p>
        </div>
        <div className="bg-indigo-50 p-8 rounded-3xl">
          <h3 className="font-bold text-indigo-900 mb-2">Privacy Policy</h3>
          <p className="text-sm text-indigo-700">We do not store your financial data. All calculations are performed locally in your browser to ensure your privacy is protected.</p>
        </div>
      </div>
      <AdSlot label="About Page Footer Ad" className="mt-16" />
    </div>
  );

  const renderContent = () => {
    if (currentPage === 'home') return <HomePage />;
    if (currentPage === 'about') return <AboutPage />;
    if (currentPage === 'privacy') return <LegalPage title="Privacy Policy" content="At CalcHub, we value your privacy. We do not collect personal financial data. Your inputs stay in your browser. We use cookies only for analytics and ad personalization." />;
    if (currentPage === 'terms') return <LegalPage title="Terms of Service" content="By using CalcHub, you agree that calculations are estimates only. We are not financial advisors. Please consult a professional for tax or legal advice." />;
    if (currentPage === 'disclaimer') return <LegalPage title="Earnings Disclaimer" content="Results are for informational purposes. Actual take-home pay depends on specific tax jurisdictions, withholdings, and insurance premiums." />;
    
    const activeCalc = calculators.find(c => c.id === currentPage);
    if (activeCalc) return <CalculatorPage id={activeCalc.id} title={activeCalc.title} icon={activeCalc.icon} />;
    
    const activeGuide = guides.find(g => g.id === currentPage);
    if (activeGuide) return <GuidePage slug={currentPage} />;

    return <HomePage />;
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 h-16">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setCurrentPage('home')}>
            <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:scale-110 transition-transform"><Calculator size={20} className="text-white" /></div>
            <span className="font-black text-xl tracking-tighter">CalcHub</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-600">
            <button onClick={() => setCurrentPage('home')} className="hover:text-indigo-600">Home</button>
            <div className="relative group py-4">
              <button className="flex items-center gap-1 hover:text-indigo-600">Calculators <ChevronRight size={14} className="rotate-90" /></button>
              <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 py-3 hidden group-hover:block animate-in fade-in slide-in-from-top-2">
                {calculators.map(c => <button key={c.id} onClick={() => setCurrentPage(c.id)} className="block w-full text-left px-5 py-2 hover:bg-indigo-50 text-xs font-semibold">{c.title}</button>)}
              </div>
            </div>
            <div className="relative group py-4">
              <button className="flex items-center gap-1 hover:text-indigo-600">Salary Guides <ChevronRight size={14} className="rotate-90" /></button>
              <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 py-3 hidden group-hover:block animate-in fade-in slide-in-from-top-2 h-[400px] overflow-y-auto">
                {guides.map(g => <button key={g.id} onClick={() => setCurrentPage(g.id)} className="block w-full text-left px-5 py-2 hover:bg-indigo-50 text-xs font-semibold">{g.title} Guide</button>)}
              </div>
            </div>
          </div>

          <button className="md:hidden p-2 text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4 font-bold text-gray-700 h-screen overflow-y-auto">
            <button onClick={() => setCurrentPage('home')} className="block w-full text-left">Home</button>
            <p className="text-xs text-gray-400 uppercase tracking-widest mt-4">Calculators</p>
            {calculators.map(c => <button key={c.id} onClick={() => setCurrentPage(c.id)} className="block w-full text-left text-sm py-1">{c.title}</button>)}
            <p className="text-xs text-gray-400 uppercase tracking-widest mt-4">Guides</p>
            {guides.map(g => <button key={g.id} onClick={() => setCurrentPage(g.id)} className="block w-full text-left text-sm py-1">{g.title}</button>)}
          </div>
        )}
      </nav>

      <main>{renderContent()}</main>

      <footer className="bg-gray-900 text-white pt-20 pb-10 px-4 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Calculator className="text-indigo-500" />
                <span className="font-black text-xl tracking-tighter">CalcHub</span>
              </div>
              <p className="text-gray-400 text-sm">Professional salary calculation tools for workers, contractors, and employers.</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-indigo-400 uppercase text-xs tracking-widest">Legal</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="cursor-pointer hover:text-white" onClick={() => setCurrentPage('privacy')}>Privacy Policy</li>
                <li className="cursor-pointer hover:text-white" onClick={() => setCurrentPage('terms')}>Terms of Service</li>
                <li className="cursor-pointer hover:text-white" onClick={() => setCurrentPage('disclaimer')}>Disclaimer</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-indigo-400 uppercase text-xs tracking-widest">Company</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="cursor-pointer hover:text-white" onClick={() => setCurrentPage('about')}>About Us</li>
                <li className="cursor-pointer hover:text-white">Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} CalcHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;