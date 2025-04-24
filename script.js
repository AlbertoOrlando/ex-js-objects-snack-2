// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = 'Double Cheese Burger';
// secondBurger.weight = 500;

// console.log(hamburger.name); // 'Double Cheese Burger'
// console.log(secondBurger.name); // 'Double Cheese Burger'
// 1 oggetto


// const hamburger = {
//     name: "Cheese Burger",
//     weight: 250,
//     ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
// };

// const secondBurger = { ...hamburger };
// secondBurger.ingredients[0] = "Salad";

// console.log(hamburger.ingredients[0]); // "Salad"
// console.log(secondBurger.ingredients[0]); // "Salad"
// 3 oggetti


// const hamburger = { 
// 	name: "Cheese Burger", 
// 	weight: 250,
// 	maker: {
// 		name: "Anonymous Chef",
// 		restaurant: {
// 			name: "Hyur's Burgers",
// 			address: "Main Street, 123",
// 			isOpen: true,
// 		},
// 		age: 29
// 	}
// };

// const secondBurger = structuredClone(hamburger);
// const thirdBurger = structuredClone(hamburger);
// 9 oggetti

// const chef = {
// 	name: "Chef Hyur",
// 	age: 29,
// 	makeBurger: (num = 1) => {
// 		console.log(`Ecco ${num} hamburger per te!`);
// 	},
// }

// const restaurant = {
// 	name: "Hyur's Burgers",
// 	address: {
// 		street: 'Main Street',
// 		number: 123,
// 	},
// 	openingDate: new Date(2025, 3, 11),
// 	isOpen: false,
// };

//spread perchè copia la funzione
//structuredclone() perchè ha oggetti annidati


// const hamburger = {
//     name: "Cheese Burger",
//     weight: 250,
//     maker: {
//         name: "Anonymous Chef",
//         restaurant: {
//             name: "Hyur's Burgers",
//             address: "Main Street, 123",
//             isOpen: true,
//         },
//         age: 29
//     }
// };

// const newRestaurant = { ...hamburger.maker.restaurant };
// newRestaurant.name = "Hyur's II";
// newRestaurant.address = "Second Street, 12";
// const secondBurger = { ...hamburger };
// secondBurger.maker.restaurant = newRestaurant;
// secondBurger.maker.name = "Chef Hyur";

// console.log(hamburger.maker.name); // chef hyur
// console.log(secondBurger.maker.name); // chef hyur
// console.log(hamburger.maker.restaurant.name); // hyur's 2
// console.log(secondBurger.maker.restaurant.name); // hyur's 2
//5 oggetti



const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}
//triplo spread

function deeepcopy(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj
    }
    const copy = Array.isArray(obj) ? [] : {}

    for (const key in obj) {
        const value = obj[key]
        if (typeof value === 'object' && value !== null) {
            copy[key] = deeepcopy(value);
        } else {
            copy[key] = value;
        }
    }

    return copy;

}

console.log(deeepcopy(chef));

