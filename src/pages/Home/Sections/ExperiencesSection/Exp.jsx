import React, { useRef } from 'react';
import './Exp.css'

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Exp(props) {
  const { company, address, startDate, endDate, responsibilities, title } = props;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "1 1"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1],[0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [`100%`, `0%`]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacity,
        scale: scale,
        y: y,
      }}
      className="expCard"
    >
      <div className="expHeading">
        <p className="expAddress">
          {company} <br /> {address}
        </p>
        <p className="expDate">
          {startDate} - {endDate}
        </p>
      </div>

    <ul className="expContent">
        {responsibilities.map((resp, index) => (
        <li className="resp" key={index}>{resp}</li>
        ))}
    </ul>
      <h1 className="expTitle">
        {title}
      </h1>
    </motion.div>
  );
}
