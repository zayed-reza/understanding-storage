const addToDb = item => {
    const db = getDb();
    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }
    saveToDb(db);
}

const removeFromDb = item => {
    const db = getDb();
    delete db[item];
    saveToDb(db);
}

const saveToDb = db => {
    const dbJson = JSON.stringify(db);
    localStorage.setItem('shoping-cart', dbJson);
}
const getDb = () => {
    const savedDb = localStorage.getItem('shoping-cart');
    const savedDbJson = JSON.parse(savedDb);
    return savedDbJson;
}