import db from "./FirebaseConfig";

function database(setNews){
 const database=db.collection('news').onSnapshot(snapshot => {
    setNews(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
    })
    ))
})};

export default database;