import { useEffect, useRef } from "react";

export default function TradingViewTicker() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.replaceChildren();

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container";
    widget.style.width = "100%";

    const content = document.createElement("div");
    content.className = "tradingview-widget-container__widget";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;

    script.textContent = JSON.stringify({
      symbols: [
        { proName: "BSE:SENSEX", title: "SENSEX" },
        { proName: "BSE:BANK", title: "BANK" },
        { proName: "BSE:RELIANCE", title: "RELIANCE" },
        { proName: "BSE:TCS", title: "TCS" },
        { proName: "BITSTAMP:BTCUSD", title: "BITCOIN" },
        { proName: "CMCMARKETS:GOLD", title: "GOLD" },
        { proName: "FOREXCOM:SPXUSD", title: "SPXUSD" },
        { proName: "FOREXCOM:NSXUSD", title: "NSXUSD" },
        { proName: "FOREXCOM:DJI", title: "DJI" },
      ],
      showSymbolLogo: true,
      colorTheme: "dark",
      isTransparent: true,
      displayMode: "regular",
      locale: "en"
    });

    widget.appendChild(content);
    widget.appendChild(script);
    container.appendChild(widget);

    return () => {
      widget.remove();
    };
  }, []);

  return <div ref={containerRef} className="trading-ticker" />;
}