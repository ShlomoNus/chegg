import { Segment } from '@/types/api';
import { atom } from 'jotai';

export const segmentAtom = atom<Segment>('repos');
