'use client';

import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/disciplinas/por-curso');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Quantidade de Disciplinas por Curso
      </h1>
      
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <BarChart
          width={1000}
          height={400}
          data={data}
          layout="vertical"
          margin={{
            top: 5,
            right: 30,
            left: 250,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" />
          <YAxis 
            type="category" 
            dataKey="curso" 
            width={200}
            tick={{ 
              fontSize: 14,
              width: 200,
              wordWrap: 'break-word'
            }}
          />
          <Tooltip />
          <Legend />
          <Bar 
            dataKey="quantidade_disciplinas" 
            fill="#1a73e8"
            name="Quantidade de Disciplinas"
          />
        </BarChart>
      </div>
    </div>
  );
}