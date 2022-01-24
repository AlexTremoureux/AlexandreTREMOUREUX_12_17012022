import React from 'react';
import Page404 from '../container/Page404';
import { url } from '../utils/constantes';
import { useFetch } from '../utils/query';

const UserPerformance = (props) => {
    const { user } = props;
  const id = user.id;
  const { data, error, isLoading } = useFetch(
    url + id + "/performance",
    id
  );
  console.log(data)
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
        <h1>Performance{data.data.id}</h1>
        
    </section>
  );
};

export default UserPerformance;