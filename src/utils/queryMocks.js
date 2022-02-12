import { useState, useEffect } from "react";
import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "../data/mocks";

export function useFetchDataMocks (id) {

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error] = useState(false);
  
  
  useEffect(() => {

    // import mocks in array
    const mock = [
        USER_MAIN_DATA,
        USER_ACTIVITY,
        USER_AVERAGE_SESSIONS,
        USER_PERFORMANCE,
      ];

    if (!id) return;
  setLoading(true);

  // Mock filtered by id in params
  const dataMocks = mock.map((array) =>
    array.filter((obj) => obj.id === parseInt(id))
  );
  const [InfosMock, ActivityMock, AverageSessionsMock, PerformanceMock] = dataMocks;
  
  setData({
    Infos: InfosMock[0],
    Activity: ActivityMock[0],
    AverageSessions: AverageSessionsMock[0].sessions,
    Performance: PerformanceMock[0],
  });

  // Loading spinner
  setTimeout(() => setLoading(false), 1000);
  ;
  }, [id]);
  return { isLoading, data, error };
};

