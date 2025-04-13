import { useEffect, useRef, useState } from "react";
import "../styles/platformStats.style.css";
import CountUpStat from "../../../components/CountUpStat";

const PlatformStats = () => {
  const containerRef = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div className="platform-stats-container" ref={containerRef}>
      <h2 className="platform-stats-heading">Our Numbers</h2>
      <p className="platform-stats-subheading">
        A quick look at our growing community
      </p>

      <div className="platform-stats-grid">
        <CountUpStat target={245} inView={inView} label="Blog Posts" />
        <CountUpStat target={130} inView={inView} label="Active Users" />
        <CountUpStat target={680} inView={inView} label="Comments Shared" />
      </div>
    </div>
  );
};

export default PlatformStats;
