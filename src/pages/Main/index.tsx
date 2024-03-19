import { useEffect, useState } from 'react'
import { RouteObject } from 'react-router-dom';

import SearchFilter from './SearchFilter'
import { useGithubUserQuery } from '@/hooks/useGetGithubUser';

export default function Main() {

    const [searchFilterValue,setSearchFilterValue] = useState('')
   const {data,isLoading} = useGithubUserQuery(searchFilterValue);

  return (
    <div className='max-w-[350px]'>
        <SearchFilter filterValueSetter={setSearchFilterValue} />
    </div>
  )
}



export const  MainRoute :RouteObject = {
  path: '/',
  element: <Main />,
}