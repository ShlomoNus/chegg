import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRef } from 'react';
import { inputPlaceholder } from './consts';

export default function SearchFilter({filterValueSetter}: {filterValueSetter:(str: string) => void}) {

    const inputRef = useRef<HTMLInputElement>(null);

   function setFilterVaule(){

    const str = inputRef.current?.value

    if(!!str){filterValueSetter(str)}
    
   }

    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder={inputPlaceholder}  ref={inputRef}/>
            <Button type="submit" onClick={setFilterVaule}>Subscribe</Button>
        </div>
    );
}
