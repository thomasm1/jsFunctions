// async
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1,2,3,4]);
    }, 1300);
});
const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe =  {
                title: 'Tomatoes',
                publisher: 'Tom'};
            resolve(`${ID}: ${recipe.title}`);
            }, 1500,recID);
        });
};
const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {title: 'Italiano',
            publisher: 'Tomas'};
            resolve(`${pub}: ${recipe}`);
        }, 1500, publisher);
    });
};
getIDs
.then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[2]);
})
.then(recipe => {
    console.log(recipe);
    return getRelated(recipe.publisher);
})
.then(recipe => {
    console.log(recipe);
})
.catch(error => {
    console.log('Error!!!');
});
