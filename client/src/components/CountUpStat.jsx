import { useEffect, useState } from "react";

const CountUpStat = ({ target, inView, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1000;
    const stepTime = 10;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.ceil(start));
    }, stepTime);

    return () => clearInterval(counter);
  }, [inView, target]);

  return (
    <div className="stat-box">
      <h3 className="stat-number">{count}k+</h3>
      <p className="stat-label">{label}</p>
    </div>
  );
};

export default CountUpStat;
