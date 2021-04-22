import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import field from "./fieldData";
import PieChartComponent from "./chartComponent/PieChartComponent";
import BarChartComponent from "./chartComponent/BarChartComponent";
import LineChartComponent from "./chartComponent/LineChartComponent";
import {dataWeek, dataMax, dataMin } from "./data";

export default function Representation() {
  const [fieldItem, setFieldItem] = useState(field);
  const [showDeathInWeek, setShowDeathInWeek] = useState(false);
  const [showMaxDeath, setShowMaxDeath] = useState(false);
  const [showMinDeath, setShowMinDeath] = useState(false);
  const [isLineClick, setIsLineClick] = useState(false);
  const [isPieClick, setIsPieClick] = useState(false);
  const [isBarClick, setIsBarClick] = useState(false);
  const [isPieClickMin, setIsPieClickMin] = useState(false);
  const [isBarClickMin, setIsBarClickMin] = useState(false);
  const [weekData, setWeekData] = useState(dataWeek);
  const [minData, setMinData] = useState(dataMin);
  const [maxData, setMaxData] = useState(dataMax);

  const lineClick = () => {
    setIsLineClick(true);
  };

  const pieClick = () => {
    setIsPieClick(true);
    setIsBarClick(false);
  };

  const barClick = () => {
    setIsBarClick(true);
    setIsPieClick(false);
  };

  const pieClickMin = () => {
    setIsPieClickMin(true);
    setIsBarClickMin(false);
  };

  const barClickMin = () => {
    setIsBarClickMin(true);
    setIsPieClickMin(false);
  };

  return (
    <>
      <article className="question">
        <div className="header">
          <h4>{fieldItem.deathInLastWeek.title}</h4>
          <button
            className="btn"
            onClick={() => setShowDeathInWeek(!showDeathInWeek)}
          >
            {showDeathInWeek ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
        {showDeathInWeek && (
          <div>
            <button className="btn1" type="button" onClick={lineClick}>
              {fieldItem.deathInLastWeek.chart}
            </button>
            <div className="mr-top">
              {isLineClick && <LineChartComponent data={weekData} />}
            </div>
          </div>
        )}
      </article>
      <article className="question">
        <div className="header">
          <h4>{fieldItem.maxDeath.title}</h4>
          <button
            className="btn"
            onClick={() => setShowMaxDeath(!showMaxDeath)}
          >
            {showMaxDeath ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
        {showMaxDeath && (
          <div>
            <button className="btn1" type="button" onClick={pieClick}>
              {fieldItem.maxDeath.chart.pie}
            </button>
            <button className="btn1" type="button" onClick={barClick}>
              {fieldItem.maxDeath.chart.bar}
            </button>
            <div className="mr-top">
              {isPieClick && <PieChartComponent data={maxData} />}
              {isBarClick && <BarChartComponent data={maxData} />}
            </div>
          </div>
        )}
      </article>
      <article className="question">
        <div className="header">
          <h4>{fieldItem.minDeath.title}</h4>
          <button
            className="btn"
            onClick={() => setShowMinDeath(!showMinDeath)}
          >
            {showMinDeath ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
        {showMinDeath && (
          <div>
            <button className="btn1" type="button" onClick={pieClickMin}>
              {fieldItem.minDeath.chart.pie}
            </button>
            <button className="btn1" type="button" onClick={barClickMin}>
              {fieldItem.minDeath.chart.bar}
            </button>
            <div className="mr-top">
              {isPieClickMin && <PieChartComponent data={minData} />}
              {isBarClickMin && <BarChartComponent data={minData} />}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
