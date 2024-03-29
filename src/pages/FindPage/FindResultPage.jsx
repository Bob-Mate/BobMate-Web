import React, { useCallback, useState } from 'react';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import LoadingScreen from '../../screen/FindPage/LoadingScreen';
// import FindResultScreen from '../../screen/FindPage/FindResultScreen';
// import AdvertiseBox from '../../containers/AdvertiseBox';
// import Banner from '../../components/FindPage/Banner';
import FindDone from '../FindDone';

const FindResultPage = () => {
  const [results, setResults] = useState([null, null, null]);
  const [isLoading, setIsLoading] = useState(true);

  const completeLoading = useCallback((results) => {
    setResults(results);
    setIsLoading(false);
  }, []);

  return (
    <MaxWidthWrapper className='bg-background font-pre'>
      {/* <Banner className='' title={isLoading || '밥 친구 찾기 완료!'}>
        {isLoading && <AdvertiseBox />}
      </Banner> */}
      {isLoading ? (
        <LoadingScreen completeLoading={completeLoading} />
      ) : (
        <FindDone results={results} />
      )}
    </MaxWidthWrapper>
  );
};

export default FindResultPage;
