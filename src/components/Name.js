import React from 'react';
import Page404 from '../container/Page404';
import { url } from '../utils/constantes';
import { useFetch, useFetchUserById } from '../utils/query';
import { useParams } from "react-router-dom";
import { USER_MAIN_DATA } from '../data/mocks';

const Name = (props) => {
    const { id } = props
  
    const { data, error, isLoading } = useFetchUserById(USER_MAIN_DATA, id);
    if (error) {
      return (
        <>
          <Page404 />
        </>
      );
    }
    return isLoading ? (
      <div>Is Loading</div>
    ) : (
    <>
     <h2>Hello {data.data.userInfos.firstName} {data.data.userInfos.lastName}</h2>
     <p>{data.data.userInfos.age} ans</p>
     <p>id: {data.data.id}</p>

     <p>calories :{data.data.keyData.calorieCount}</p>
     <p>carbohydrate :{data.data.keyData.carbohydrateCount}</p>
     <p>lipides :{data.data.keyData.lipidCount}</p>
     <p>protéines :{data.data.keyData.proteinCount}</p>
     
    </>
  );
};

export default Name;