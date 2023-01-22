const findUser = (id, arr) => {
    console.log(arr);
    for (const item of arr) {
        if (item._id === id) {
            return item;
        }
    }
};

export default findUser;
