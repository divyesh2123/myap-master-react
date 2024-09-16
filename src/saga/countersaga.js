import {delay, put, takeEvery}  from 'redux-saga/effects'
import { Inc } from '../slice/counterslice';


function* avc()
{

    yield delay(3000);
    yield put(Inc())
}

export function* counterasync()
{

    return yield takeEvery('Counter_ASYC',avc);
}