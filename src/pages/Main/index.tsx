import { useEffect, useState } from 'react'
import { RouteObject } from 'react-router-dom';

import SearchFilter from './SearchFilter'
import { useGithubUserQuery } from '@/hooks/useGetGithubUser';

export default function Main() {

    const [searchFilterValue,setSearchFilterValue] = useState('')
   const {data,isLoading} = useGithubUserQuery(searchFilterValue);

  return (
    <div className='flex flex-row mt-5 '>
    <div className='basis-2/6	border-w'>
        <SearchFilter filterValueSetter={setSearchFilterValue} />
    </div>
    <div className='basis-4/6	'></div>
    </div>
  )
}



export const  MainRoute :RouteObject = {
  path: '/',
  element: <Main />,
}