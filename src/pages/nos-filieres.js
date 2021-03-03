import React from "react";
import Layout from "../components/layout";

export default function Companies() {
    return (
      <Layout>
        <title>Nos Filières | Groupe Mantia</title>
        <div className="h-1/2 flex">
          <div className="py-8 justify-items-center">
            <h1 className="absolute z-50 pl-32 text-2xl block uppercase tracking-wide text-xs font-bold page-title">Page Nos Filières</h1>
          </div>
                <img className="relative h-1/6 opacity-60 companies-img" src="https://via.placeholder.com/1000x500.jpg" alt="mantia filieres"/>
        </div>
      </Layout>
    );
  };