// <4
import { call, put, takeEvery } from 'redux-saga/effects'  // OJO AL IMPORTAR ESTE NOMBRE ES DISTINTO A LA SUGERENCIA
import { getCatsSuccess } from './catState'   // <4.2/>


// <4.1
function* workGetCatsFetch(){
    // yield aca lo usamos como un await
    const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
    const formattedCats = yield cats.json();
    const formattedCatsShortened = formattedCats.slice(0,10);
    yield put(getCatsSuccess(formattedCatsShortened));
}
// 4.1>

// Aca empezaria la explicacion de todo
function* catSaga(){
    // cats es el nombre del createSlice.name
    // getCatsFetch es el nombre del reducer
    yield takeEvery('cats/getCatsFetch', workGetCatsFetch);

}

export default catSaga
// 4>