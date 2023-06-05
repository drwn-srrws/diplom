import React, { FC } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import styled from "@emotion/styled";

interface ChartComponentProps {
  tests: Array<{ name: string; score: number }>;
}

const ChartComponent: FC<ChartComponentProps> = ({ tests }) => {
  return (
    <ChartContainer>
      <BarChart width={500} height={300} data={tests}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="score"
          fill="#ef6817"
          name="Оцінка"
          style={{ opacity: 0.7 }}
        />
      </BarChart>
    </ChartContainer>
  );
};

export default ChartComponent;

const ChartContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;
