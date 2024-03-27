import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRef } from 'react';
import { inputPlaceholder } from './consts';
import { useKeyPressEvent } from 'react-use';

export default function SearchFilter({
    filterValueSetter,
}: {
    filterValueSetter: (str: string) => void;
}) {
    const inputRef = useRef<HTMLInputElement>(null);

    function setFilterVaule() {
                const str = inputRef.current?.value;

        if (!!str) {
            filterValueSetter(str);
        }
    }

    useKeyPressEvent('Enter', setFilterVaule);

    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder={inputPlaceholder} ref={inputRef} />
            <Button type="submit" onClick={setFilterVaule}>
                Search
            </Button>
        </div>
    );
}
