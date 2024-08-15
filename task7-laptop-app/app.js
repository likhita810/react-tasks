////////////////// laptop application using functions and promises

let laptopData = {
    'HP': [30000, 80000],
    'Dell' : [25000, 50000],
    'Lenovo' : [25000, 75000],
    'Acer' : [18000, 38000]
};

function checkBrand(brand) {
    return new Promise((resolve, reject) => {
        if (laptopData[brand]) {
            // console.log(laptopData[brand])
            resolve(` ${brand} is available \n What price range are you looking for?`)
        } else {
            reject(`${brand} is not available`)
        }
    });
};

// checkBrand('mac')

function checkPrice(brand,price) {
    return new Promise((resolve, reject) => {
        const [minPrice, maxPrice] = laptopData[brand]
        if (price >= minPrice && price<= maxPrice) {
            resolve(`${brand} is available within your price range of ${price}`)
        } else {
            reject(`The price range of ${price}  is not available for ${brand}`)
        }
    })
}

function userInput() {
    const brand = 'HP' //prompt('enter laptop brand')
    const price = 45000 //prompt('enter price')

    checkBrand(brand)
        .then((responseBrand)=> {return checkPrice(brand, price)})
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
        .finally((msg) => console.log('Laptop purchase enquiry is done'))
}

userInput()

