const url = 'https://jsonplaceholder.typicode.com/posts';
// es6: ecmascript 6
// const fetchData = async () => {
// 	try {
// 		const response = await fetch(url);
// 		const data = await response.json();
// 		console.log('🚀 ~ fetchData ~ response:', data);
// 	} catch (error) {
// 		console.log('🚀 ~ fetchData ~ error:', error);
// 	}
// };

// es5
fetch(url)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log('🚀 ~ fetchData ~ response:', data);
	})
	.catch((error) => {
		console.log('🚀 ~ fetchData ~ error:', error);
	});
