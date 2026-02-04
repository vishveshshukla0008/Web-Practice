const userProfile = {
    id: 101,
    details: {
        firstName: "Rahul",
        lastName: "Sharma",
        address: {
            city: "Mumbai",
            coordinates: {
                lat: 19.076,
                lng: 72.877
            }
        }
    },
    hobbies: ["Photography", "Coding", { type: "Sport", name: "Cricket" }],
    createdAt: new Date()
};

function makeDeepCopy(obj) {
    if (obj == null || typeof obj !== 'object') {
        return obj;
    }

    if (obj instanceof Date) {
        return new Date(obj.getTime())
    }

    //perform Deepclone :

    let copiedVal = Array.isArray(obj) ? [] : {};
    let keys = Object.keys(obj);

    keys.forEach((el, idx) => {
        copiedVal[el] = makeDeepCopy(obj[el]);
    })

    return copiedVal
}

let copy = makeDeepCopy(userProfile);
console.log(copy)
