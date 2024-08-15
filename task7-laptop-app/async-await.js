////////////////// laptop application using async await

let laptopData2 = {
    'HP': [30000, 80000],
    'Dell' : [25000, 50000],
    'Lenovo' : [25000, 75000],
    'Acer' : [18000, 38000]
};

async function checkBrand(brand) {
    if (laptopData2[brand]) {
        // console.log(laptopData[brand])
        return ` ${brand} is available \n What price range are you looking for?`
    } else {
        throw new Error(`${brand} is not available`)
    }
};

// checkBrand('mac')

async function checkPrice(brand,price) {
    const [minPrice, maxPrice] = laptopData2[brand]
    if (price >= minPrice && price<= maxPrice) {
        return `${brand} is available within your price range of ${price}`
    } else {
        throw new Error(`The price range of ${price}  is not available for ${brand}`)
    }
}

async function userInput() {

    try {
        const brand = 'HP' //prompt('enter laptop brand')
        const price = 45000 //prompt('enter price')

        const responseBrand = await checkBrand(brand)
        console.log(responseBrand)
        const response = await checkPrice(brand, price)

        console.log(response)
    } catch (err) {
        console.log(err.message)
    }
}

userInput()