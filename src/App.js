import React, { useState } from "react";
import "./style.css";
import Representation from "./Representation";

export default function App() {
  return (
    <main>
      <div className="container">
        <h3>React Chart Representation</h3>
        <section className="info">
          <Representation />
        </section>
      </div>

      
    </main>
  );
}
