import {all}  from 'redux-saga/effects'
import { counterasync } from './countersaga';
import { watcheruser } from './useSaga';

export function* rootSaga()
{

    return yield all([counterasync(),watcheruser()]);
}