import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
  LineChart,
  CartesianGrid,
  Legend,
} from "recharts";
import Page404 from "../container/Page404";
import { url } from "../utils/constantes";
import { useFetch } from "../utils/query";

const UserAverageSessions = (props) => {
  const { user } = props;
  const id = user.id;
  const { data, error, isLoading } = useFetch(
    url + id + "/average-sessions",
    id
  );
  console.log(data);
  if (error) {
    return (
      <>
        <Page404 />
      </>
    );
  }
  return isLoading ? (
    <div>Chargement en cours...</div>
  ) : (
    <section className="section_averageSessions">
      <h1>Durée moyenne des sessions{data.data.id}</h1>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data.data.sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default UserAverageSessions;
