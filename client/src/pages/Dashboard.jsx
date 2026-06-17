import { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  LineController,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarController,
  LineController,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const kpis = [
  { icon: "💰", label: "Monthly revenue", value: "$83,410", delta: "+18.3%", up: true },
  { icon: "👥", label: "Active users", value: "5,284", delta: "+9.1%", up: true },
  { icon: "🔄", label: "Churn rate", value: "2.4%", delta: "-0.6%", up: false },
  { icon: "🎟️", label: "Avg. deal size", value: "$157", delta: "+4.7%", up: true },
];

const activity = [
  { color: "#EEEDFE", iconColor: "#534AB7", icon: "➕", title: "Priya Mehta signed up", sub: "Enterprise plan", time: "2m ago" },
  { color: "#EAF3DE", iconColor: "#3B6D11", icon: "💳", title: "Payment received", sub: "$1,240 · Acme Corp", time: "14m ago" },
  { color: "#FAEEDA", iconColor: "#854F0B", icon: "⚠️", title: "Trial expiring soon", sub: "3 accounts · 2 days left", time: "1h ago" },
  { color: "#FCEBEB", iconColor: "#A32D2D", icon: "➖", title: "Luca Bianchi churned", sub: "Starter plan", time: "3h ago" },
];

const plans = [
  { label: "Enterprise", value: "$41,200 · 62 accounts", pct: 73, color: "#534AB7" },
  { label: "Pro", value: "$27,600 · 198 accounts", pct: 49, color: "#1D9E75" },
  { label: "Starter", value: "$11,040 · 921 accounts", pct: 20, color: "#BA7517" },
  { label: "Free trial", value: "$0 · 314 accounts", pct: 8, color: "#B4B2A9" },
];

const devices = [
  { label: "Desktop", pct: 58, color: "#534AB7" },
  { label: "Mobile", pct: 31, color: "#AFA9EC" },
  { label: "Tablet", pct: 11, color: "#D3D1C7" },
];

const regions = [
  { label: "North America", pct: "44%" },
  { label: "Europe", pct: "29%" },
  { label: "Asia-Pacific", pct: "18%" },
  { label: "Rest of world", pct: "9%" },
];

const revenueData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      type: "bar",
      label: "Actual",
      data: [54, 61, 58, 70, 75, 83],
      backgroundColor: "#7F77DD",
      borderRadius: 5,
      borderSkipped: false,
      order: 2,
    },
    {
      type: "line",
      label: "Target",
      data: [60, 60, 60, 60, 60, 60],
      borderColor: "#888780",
      borderDash: [5, 4],
      borderWidth: 1.5,
      pointRadius: 0,
      fill: false,
      order: 1,
    },
  ],
};

const revenueOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: {
      grid: { color: "rgba(0,0,0,0.06)" },
      ticks: { color: "#999", font: { size: 11 } },
      border: { display: false },
    },
    y: {
      grid: { color: "rgba(0,0,0,0.06)" },
      ticks: {
        color: "#999",
        font: { size: 11 },
        callback: (v) => "$" + v + "K",
      },
      border: { display: false },
    },
  },
};

const donutData = {
  labels: ["Organic", "Paid", "Referral", "Direct"],
  datasets: [
    {
      data: [42, 28, 19, 11],
      backgroundColor: ["#534AB7", "#1D9E75", "#BA7517", "#888780"],
      borderWidth: 0,
      hoverOffset: 4,
    },
  ],
};

const donutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "68%",
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: { label: (ctx) => " " + ctx.label + " " + ctx.parsed + "%" },
    },
  },
};

const styles = {
  dash: {
    padding: "1.25rem 1rem",
    // fontFamily: "Inter, system-ui, sans-serif",
    background: "#f8f8f8",
    minHeight: "100vh",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.25rem",
  },
  appName: { fontSize: 15, fontWeight: 500, color: "#1a1a1a" },
  appSub: { color: "#999", fontWeight: 400 },
  topRight: { display: "flex", alignItems: "center", gap: 10 },
  avatar: {
    width: 32, height: 32, borderRadius: "50%",
    background: "#534AB7", display: "flex",
    alignItems: "center", justifyContent: "center",
    fontSize: 12, fontWeight: 500, color: "#CECBF6",
  },
  kpiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 10,
    marginBottom: "1rem",
  },
  kpi: {
    background: "#fff",
    borderRadius: 10,
    padding: "0.9rem 1rem",
    border: "0.5px solid rgba(0,0,0,0.08)",
  },
  kpiIcon: { fontSize: 18, marginBottom: 6, color: "#888" },
  kpiVal: { fontSize: 22, fontWeight: 500, color: "#1a1a1a", lineHeight: 1 },
  kpiLabel: { fontSize: 12, color: "#888", marginTop: 4 },
  mainGrid: {
    display: "grid",
    gridTemplateColumns: "1.9fr 1fr",
    gap: 10,
    marginBottom: 10,
  },
  card: {
    background: "#fff",
    border: "0.5px solid rgba(0,0,0,0.08)",
    borderRadius: 12,
    padding: "1rem 1.1rem",
  },
  cardTitle: { fontSize: 13, fontWeight: 500, color: "#1a1a1a", marginBottom: "0.9rem" },
  bottomGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 10,
  },
  actRow: {
    display: "flex", alignItems: "center", gap: 10,
    padding: "7px 0",
    borderBottom: "0.5px solid rgba(0,0,0,0.07)",
  },
  actDot: {
    width: 28, height: 28, borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 13, flexShrink: 0,
  },
  actName: {
    fontSize: 12, fontWeight: 500, color: "#1a1a1a",
    whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
  },
  actSub: { fontSize: 11, color: "#888" },
  actTime: { fontSize: 11, color: "#888", flexShrink: 0 },
  segBarWrap: {
    height: 5, background: "#f0f0f0",
    borderRadius: 4, marginTop: 6, overflow: "hidden",
  },
  devRow: { display: "flex", alignItems: "center", gap: 8, marginBottom: 9 },
  legend: { display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 8 },
  legItem: { display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#888" },
  legSq: { width: 9, height: 9, borderRadius: 2 },
};

function Badge({ up, label }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 3,
      fontSize: 11, padding: "2px 7px", borderRadius: 20, marginTop: 6, fontWeight: 500,
      background: up ? "#E1F5EE" : "#FCEBEB",
      color: up ? "#0F6E56" : "#A32D2D",
    }}>
      {up ? "↑" : "↓"} {label}
    </span>
  );
}

export default function Dashboard() {
  return (
    <div style={styles.dash} className="bg-white">
      <div style={styles.topBar}>
        <div>
          <span style={styles.appName}>
            Dashboard <span style={styles.appSub}>/ Overview</span>
          </span>
        </div>
        {/* <div style={styles.topRight}>
          <span style={{ fontSize: 18, color: "#888", cursor: "pointer" }}>🔔</span>
          <div style={styles.avatar}>SK</div>
        </div> */}
      </div>

      <div style={styles.kpiGrid}>
        {kpis.map((k) => (
          <div key={k.label} style={styles.kpi}>
            <div style={styles.kpiIcon}>{k.icon}</div>
            <div style={styles.kpiVal}>{k.value}</div>
            <div style={styles.kpiLabel}>{k.label}</div>
            <Badge up={k.up} label={k.delta} />
          </div>
        ))}
      </div>

      <div style={styles.mainGrid}>
        <div style={styles.card}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.9rem" }}>
            <span style={{ ...styles.cardTitle, marginBottom: 0 }}>Revenue vs targets</span>
            <div style={styles.legend}>
              <span style={styles.legItem}>
                <span style={{ ...styles.legSq, background: "#7F77DD" }}></span>Actual
              </span>
              <span style={styles.legItem}>
                <span style={{ ...styles.legSq, background: "#D3D1C7", border: "1px dashed #888" }}></span>Target
              </span>
            </div>
          </div>
          <div style={{ position: "relative", width: "100%", height: 200 }}>
            <Bar data={revenueData} options={revenueOptions} />
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardTitle}>Traffic sources</div>
          <div style={{ position: "relative", width: "100%", height: 170, marginBottom: "0.75rem" }}>
            <Doughnut data={donutData} options={donutOptions} />
          </div>
          <div style={{ ...styles.legend, justifyContent: "center" }}>
            {[
              { label: "Organic 42%", color: "#534AB7" },
              { label: "Paid 28%", color: "#1D9E75" },
              { label: "Referral 19%", color: "#BA7517" },
              { label: "Direct 11%", color: "#888780" },
            ].map((l) => (
              <span key={l.label} style={styles.legItem}>
                <span style={{ ...styles.legSq, background: l.color }}></span>
                {l.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={styles.bottomGrid}>
        <div style={styles.card}>
          <div style={styles.cardTitle}>Recent activity</div>
          {activity.map((a, i) => (
            <div key={i} style={{ ...styles.actRow, ...(i === activity.length - 1 ? { borderBottom: "none", paddingBottom: 0 } : {}) }}>
              <div style={{ ...styles.actDot, background: a.color }}>
                <span style={{ fontSize: 11 }}>{a.icon}</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={styles.actName}>{a.title}</div>
                <div style={styles.actSub}>{a.sub}</div>
              </div>
              <div style={styles.actTime}>{a.time}</div>
            </div>
          ))}
        </div>

        <div style={styles.card}>
          <div style={styles.cardTitle}>Plan breakdown</div>
          {plans.map((p) => (
            <div key={p.label} style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 12, color: "#888", marginBottom: 2 }}>{p.label}</div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "#1a1a1a" }}>{p.value}</div>
              <div style={styles.segBarWrap}>
                <div style={{ height: "100%", borderRadius: 4, width: p.pct + "%", background: p.color }}></div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.card}>
          <div style={styles.cardTitle}>Devices</div>
          {devices.map((d) => (
            <div key={d.label} style={styles.devRow}>
              <span style={{ fontSize: 12, color: "#888", width: 52, flexShrink: 0 }}>{d.label}</span>
              <div style={{ flex: 1, height: 5, background: "#f0f0f0", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ height: "100%", width: d.pct + "%", background: d.color, borderRadius: 4 }}></div>
              </div>
              <span style={{ fontSize: 11, color: "#888", minWidth: 28, textAlign: "right" }}>{d.pct}%</span>
            </div>
          ))}

          <div style={{ marginTop: "1rem", paddingTop: "0.75rem", borderTop: "0.5px solid rgba(0,0,0,0.07)" }}>
            <div style={{ ...styles.cardTitle, marginBottom: "0.6rem" }}>Top regions</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {regions.map((r) => (
                <div key={r.label} style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                  <span style={{ color: "#888" }}>{r.label}</span>
                  <span style={{ fontWeight: 500, color: "#1a1a1a" }}>{r.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}