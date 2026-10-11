
import { useEffect, useRef, useState } from "react";
import {
  createChart,
  CandlestickSeries,
} from "lightweight-charts";
import "./AnimatedCandlestick.css";

export default function AnimatedCandlestick() {
  const chartRef = useRef(null);
  const timerRef = useRef(null);
  const indexRef = useRef(0);
  const candlesRef = useRef(null);
  const dataRef = useRef([]);

  const [playing, setPlaying] = useState(true);
  const [resetKey, setResetKey] = useState(0);

  // Create the chart only once per replay.
  useEffect(() => {
    const chart = createChart(chartRef.current, {
      autoSize: true,
      layout: {
        background: { color: "#080d18" },
        textColor: "#a7b2c7",
      },
      grid: {
        vertLines: { color: "#172033" },
        horzLines: { color: "#172033" },
      },
      timeScale: {
        timeVisible: true,
        borderColor: "#253047",
      },
      rightPriceScale: {
        borderColor: "#253047",
      },
    });

    const series = chart.addSeries(CandlestickSeries, {
      upColor: "#00d6a3",
      downColor: "#ff5263",
      borderVisible: false,
      wickUpColor: "#00d6a3",
      wickDownColor: "#ff5263",
    });

    // Generate illustrative candles.
    const data = [];
    let price = 25000;

    for (let i = 0; i < 65; i++) {
      const open = price;
      const close = open + (Math.random() - 0.47) * 100;

      data.push({
        time: Math.floor(
          Date.UTC(2026, 0, 1, 9, 15 + i * 5) / 1000
        ),
        open,
        high: Math.max(open, close) + Math.random() * 35,
        low: Math.min(open, close) - Math.random() * 35,
        close,
      });

      price = close;
    }

    candlesRef.current = series;
    dataRef.current = data;
    indexRef.current = 0;

    series.setData([]);
    chart.timeScale().fitContent();

    return () => {
      clearInterval(timerRef.current);
      chart.remove();
      candlesRef.current = null;
    };
  }, [resetKey]);

  // Play and pause without losing animation progress.
  useEffect(() => {
    clearInterval(timerRef.current);

    if (!playing || !candlesRef.current) return;

    timerRef.current = setInterval(() => {
      const index = indexRef.current;
      const data = dataRef.current;

      if (index >= data.length) {
        clearInterval(timerRef.current);
        return;
      }

      candlesRef.current.update(data[index]);
      indexRef.current = index + 1;
    }, 180);

    return () => clearInterval(timerRef.current);
  }, [playing, resetKey]);

  return (
    <section className="animated-chart-card">
      <div className="animated-chart-header">
        <div>
          <span className="chart-eyebrow">
            TRADING STRATEGY LAB
          </span>
          <h2>Market in Motion</h2>
          <p>Learn price action, one candle at a time.</p>
        </div>

        <span className="chart-live-label">
          ● SIMULATION
        </span>
      </div>

      <div
        ref={chartRef}
        className="animated-chart-canvas"
      />

      <div className="animated-chart-footer">
        <span>Green = bullish · Red = bearish</span>

        <div className="chart-controls">
          <button onClick={() => setPlaying(prev => !prev)} style={{margin:"5px"}}>
            {playing ? "⏸ Pause" : "▶ Play"}
          </button>

          <button onClick={() => {
            setPlaying(false);
            setResetKey(key => key + 1);
            setPlaying(true);
          }}style={{margin:"5px"}}>
            ↻ Replay
          </button>
        </div>
      </div>
    </section>
  );
}
