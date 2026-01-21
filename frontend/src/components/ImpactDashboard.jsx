import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler 
} from 'chart.js';
import { Users, Heart, TrendingUp, Activity, ArrowUpRight, ShieldCheck } from 'lucide-react';

// Register ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const ImpactDashboard = () => {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate Fetch
    setTimeout(() => {
      setMetrics({
        volunteers: 1250,
        livesTouched: 5400,
        fundsRaised: 850000,
        monthlyData: [65, 59, 80, 81, 95, 140],
        recentActivity: [
          { id: 1, user: "Amit V.", action: "Joined as Volunteer", time: "2m ago" },
          { id: 2, user: "Sarah K.", action: "Donated ₹12,000", time: "15m ago" },
          { id: 3, user: "Rahul M.", action: "Donated ₹7,500", time: "1h ago" },
          { id: 4, user: "TMS Team", action: "Deployed Mobile App", time: "3h ago" },
        ]
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-500 font-medium animate-pulse">Syncing Impact Data...</p>
      </div>
    </div>
  );

  // Premium Chart Config
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Growth',
      data: metrics.monthlyData,
      borderColor: '#4F46E5', // Indigo
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(79, 70, 229, 0.25)');
        gradient.addColorStop(1, 'rgba(79, 70, 229, 0.0)');
        return gradient;
      },
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#FFFFFF',
      pointBorderColor: '#4F46E5',
      pointBorderWidth: 2,
    }],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#94a3b8' } },
      y: { grid: { borderDash: [4, 4], color: '#f1f5f9' }, ticks: { color: '#94a3b8' } }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-10">
      
      {/* 1. VISUAL ENHANCEMENT: Gradient Top Border */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 sticky top-0 z-50 shadow-md"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bharat Yuva <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Impact</span>
            </h1>
            <p className="text-slate-500 mt-2 text-sm sm:text-base">Real-time transparency for our donors.</p>
          </div>
          
          {/* Live Badge */}
          <div className="self-start md:self-auto flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-semibold text-slate-700">System Live</span>
          </div>
        </div>

        {/* 2. VISUAL ENHANCEMENT: Gradient Cards with Hover Lift */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard 
            icon={<Users className="text-white" />} 
            label="Volunteers" 
            value={metrics.volunteers} 
            sub="+12% this week"
            color="from-blue-500 to-blue-600"
            shadow="shadow-blue-200"
          />
          <StatCard 
            icon={<Heart className="text-white" />} 
            label="Lives Touched" 
            value={metrics.livesTouched} 
            sub="Verified Impact"
            color="from-rose-500 to-rose-600"
            shadow="shadow-rose-200"
          />
          <StatCard 
            icon={<TrendingUp className="text-white" />} 
            label="Funds Raised" 
            value={`₹${metrics.fundsRaised.toLocaleString()}`} 
            sub="85% of Goal"
            color="from-emerald-500 to-emerald-600"
            shadow="shadow-emerald-200"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Chart Section */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-800">Donation Trends</h3>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Last 6 Months</p>
              </div>
              <button className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-2 rounded-lg transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
            <div className="h-[300px] w-full">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-5 h-5 text-indigo-500" />
              <h3 className="text-lg font-bold text-slate-800">Live Feed</h3>
            </div>
            
            <div className="space-y-6">
              {metrics.recentActivity.map((item) => (
                <div key={item.id} className="relative pl-6 border-l-2 border-slate-100 last:border-0 group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-indigo-500 shadow-sm ring-2 ring-indigo-50 group-hover:ring-indigo-100 transition-all"></div>
                  
                  <div>
                    <p className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                      {item.user}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{item.action}</p>
                    <span className="text-[10px] font-semibold text-slate-400 mt-2 block">
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-center text-xs text-slate-400 gap-1">
              <ShieldCheck className="w-3 h-3" /> Secure SSL Connection
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Reusable Card with Gradients
const StatCard = ({ icon, label, value, sub, color, shadow }) => (
  <div className={`relative overflow-hidden bg-white rounded-2xl p-6 shadow-lg ${shadow} border border-slate-50 group hover:-translate-y-1 transition-transform duration-300`}>
    <div className="flex justify-between items-start relative z-10">
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{label}</p>
        <h3 className="text-3xl font-black text-slate-800 tracking-tight">{value}</h3>
        <span className={`inline-block mt-2 px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-600`}>
          {sub}
        </span>
      </div>
      <div className={`p-3 rounded-xl bg-gradient-to-br ${color} shadow-inner text-white transform group-hover:rotate-6 transition-transform`}>
        {React.cloneElement(icon, { size: 24 })}
      </div>
    </div>
    {/* Decorative Background Blob */}
    <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${color} opacity-10 group-hover:scale-110 transition-transform duration-500`}></div>
  </div>
);

export default ImpactDashboard;