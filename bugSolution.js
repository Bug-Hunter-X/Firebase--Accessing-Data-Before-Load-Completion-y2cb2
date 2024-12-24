The erroneous code in `bug.js` directly accesses data before the promise resolves:

```javascript
db.collection('myCollection').doc('myDoc').get().then((snapshot) => {
  console.log(snapshot.data().someProperty); //Error prone
});
```

The solution in `bugSolution.js` includes proper error handling and ensures data access only after the promise resolves and the document exists:

```javascript
db.collection('myCollection').doc('myDoc').get().then((snapshot) => {
  if (snapshot.exists) {
    console.log(snapshot.data().someProperty);
  } else {
    console.log('Document does not exist!');
  }
}).catch((error) => {
  console.error('Error getting document:', error);
});
```
Alternatively, use async/await for better readability:
```javascript
async function getData(){
  try{
    const snapshot = await db.collection('myCollection').doc('myDoc').get();
    if (snapshot.exists) {
      console.log(snapshot.data().someProperty);
    } else {
      console.log('Document does not exist!');
    }
  } catch(error){
    console.error('Error getting document:', error)
  }
}
getData();
```