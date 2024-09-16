import {call, put, takeEvery} from 'redux-saga/effects';
import { UserError, UserRequest, UserSuc } from '../slice/userslice';
import axios from 'axios'

async function  apigetdata()
{
    let d =  await axios.get("https://jsonplaceholder.typicode.com/users");
    
    return await d.data;


}

function* ayncuser()
{
    try
    {
        let p = yield call(apigetdata);

        yield put(UserSuc(p));
    }
    catch(error)
    {
        yield put(UserError(error));
    }

}

export function* watcheruser()
{

    yield takeEvery(UserRequest().type,ayncuser);

}