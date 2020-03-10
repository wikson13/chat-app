import * as dataActions from './dataActions';
import {put, takeLatest, takeEvery, fork, call} from 'redux-saga/effects';

import axios from 'axios';


function* fetchDataRequest() {
    yield put(dataActions.fetchDataStart());

    try {
        const response = yield axios.get(`https://dreovepanel.firebaseio.com/data.json`)
        yield put(dataActions.fetchDataSuccess(response.data))
    } catch (e) {
        console.log(e);
        yield put(dataActions.fetchDataFailed(e))
    }
}

function* addItem(item) {
    const {
        id, category, name, hexColor, dbId, size, sizeTable, description, sellPriceB,
        buyPriceB, producerName, modelName, supplier, productCategory, modelId, baseColor,color,model,productId,qty
    } = item.payload;
    let newItem = {};
    const generateId = dbId === undefined ? new Date().getTime() : dbId;
    switch (category) {
        case 'colors':
            newItem = {
                id,
                name,
                baseColor,
                hexColor
            };
            break;
        case 'sizes':
            newItem = {
                id,
                size
            };
            break;
        case 'suppliers':
            newItem = {
                id,
                name
            };
            break;
        case 'models':
            newItem = {
                id,
                description,
                sizeTable,
                sellPriceB,
                buyPriceB,
                producerName,
                modelName,
                supplier,
                productCategory,
                modelId
            };
            break;
        case 'categories':
            newItem = {
                id,
                name
            };
            break;
        case 'products':
            newItem = {
                name,
                color,
                model,
                productId,
                size,
                qty
            };
            break;
        default:
            return;
    }
    try {
        yield axios.put(`https://dreovepanel.firebaseio.com/data/${category}/${generateId}.json`, newItem);
        yield call(fetchDataRequest)
    } catch (e) {
        console.log(e)
    }
}

function* deleteItem(item) {
    const {category, id} = item.payload;
    try {
        yield axios.delete(
            `https://dreovepanel.firebaseio.com/data/${category}/${id}.json`,
        );
        yield call(fetchDataRequest)

    } catch (e) {
        console.log(e);
    }
}


function* watchFetchDataRequest() {
    yield takeLatest(dataActions.FETCH_DATA_REQUEST, fetchDataRequest)
}

function* watchAddItem() {
    yield takeLatest(dataActions.ADD_ITEM, addItem)
}

function* watchDeleteItem() {
    yield takeLatest(dataActions.DELETE_ITEM, deleteItem)
}


const dataSagas = [
    fork(watchFetchDataRequest),
    fork(watchAddItem),
    fork(watchDeleteItem),
];

export default dataSagas;
