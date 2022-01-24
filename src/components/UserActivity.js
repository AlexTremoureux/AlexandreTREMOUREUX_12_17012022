import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Page404 from "../container/Page404";
import { url } from "../utils/constantes";
import { useFetch } from "../utils/query";
import '../styles/UserActivity.css'

const UserActivity = (props) => {
  const { user } = props;
  const id = user.id;
  const { data, error, isLoading } = useFetch(url + id + "/activity", id);
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
    <section className="section_activity">
      <h1 className="activity">Activité quotidienne</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          
          data={data.data.sessions}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={data.data.sessions.index} />
          <YAxis orientation='right'/>
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#282D30" barSize={20} radius={10}/>
          <Bar dataKey="calories" fill="#E60000" barSize={20} radius={10}/>
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default UserActivity;
