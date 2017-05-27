



export const itemCategories = [{
	name: "Cars",
	src: 'https://facebook.github.io/react/img/logo_og.png',
}, {
	name: "Electronics",
	src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Arduino_ftdi_chip-1.jpg/260px-Arduino_ftdi_chip-1.jpg',
}, {
	name:"Mobile Phones",
	src:'http://innovationalsteps.org/uploads/3/4/7/8/34786860/5998084.png?447',
// }, {
// 	name:"Womens Fashion",
// 	src:"hi2",
// }, {
// 	name: "Mens Fashion",
// 	src:"hi2",
// }, {
// 	name:"Sports",
// 	src:"hi2",
}];

export const cars = {
	category: itemCategories[0].name,
	items:[{
		name: 'Toyota',
		price: "120000",
		likes: 2,
		rating: 8,
	}, {
		name: 'Nissan',
		price: "100000",
		likes: 4,
		rating: 6,
	}, {
		name: 'Honda',
		price: "1989002",
		likes: 5,
		rating: 7.6,
	}, {
		name: 'Mercedes',
		price: "2987677",
		likes: 12,
		rating: 5.6,
	}, {
		name: 'Mazda',
		price: "1936457",
		likes: 8,
		rating: 8.3,
	}, {	
		name: 'BMW',
		price: 1935642,
		likes: 8,
		rating: 7,
	}]
}

export const electronics = {
	category: itemCategories[1].name,
	items:[{
		name: 'Computer',
		price: "1200",
		likes: 2,
		rating: 8,
	}, {
		name: 'Keyboard',
		price: "10",
		likes: 4,
		rating: 8,
	}, {
		name: 'Mouse',
		price: "19",
		likes: 5,
		rating: 8,
	}, {
		name: 'iPod',
		price: "297",
		likes: 12,
		rating: 8,
	}, {
		name: 'Tablet',
		price: "197",
		likes: 8,
		rating: 8,
	}, {	
		name: 'Television',
		price: "642",
		likes: 8,
		rating: 8,
	}]
}

export const phones = {
	category: itemCategories[2].name,
	items:[{
		name: 'LG',
		price: "800",
		likes: 2,
		rating: 8,
	}, {
		name: 'iPhone',
		price: "1000",
		likes: 4,
		rating: 8,
	}, {
		name: 'Galaxy note',
		price: "900",
		likes: 5,
		rating: 8,
	}, {
		name: 'Sony Xperia',
		price: "565",
		likes: 12,
		rating: 8,
	}]
}


export const allGoods = [
	cars,
	electronics,
	phones
]






export const serviceCategories = [{
	name: 'Housework',
	src: 'https://facebook.github.io/react/img/logo_og.png',
}, {
	name: 'Medical',
	src: 'https://www.grenadaco-opbank.com/wp-content/uploads/2013/06/Medical.jpg',
}, {
	name: 'Tuition',
	src: 'https://facebook.github.io/react/img/logo_og.png',
}];


export const housework = {
	category: itemCategories[0].name,
	items:[{
		name: 'Cleaning Toilet',
		price: "$40/hour",
		likes: 2,
		rating: 8,
	}, {
		name: 'Full House Cleaning',
		price: "$100 onwards",
		likes: 4,
		rating: 6,
	}, {
		name: 'Baby Sitting',
		price: "$10/hour",
		likes: 5,
		rating: 7.6,
	}]
}

export const medical = {
	category: itemCategories[1].name,
	items:[{
		name: 'Physiotherapy',
		price: "$120 per 1 hour session",
		likes: 2,
		rating: 8,
	}, {
		name: 'TCM Massage',
		price: "$20 onwards",
		likes: 4,
		rating: 8,
	}]
}

export const tuition = {
	category: itemCategories[2].name,
	items:[{
		name: 'Maths Tuition',
		price: "$40/hour",
		likes: 2,
		rating: 8,
	}, {
		name: 'English Tuition',
		price: "$45/hour",
		likes: 4,
		rating: 8,
	}, {
		name: 'Chinese Tuition',
		price: "$30/hour",
		likes: 5,
		rating: 8,
	}, {
		name: 'Science Tuition',
		price: "$50/hour",
		likes: 12,
		rating: 8,
	}]
}

export const allServices = [
	housework,
	medical,
	tuition
]
