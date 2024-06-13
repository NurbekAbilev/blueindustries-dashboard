console.log('running')

axios.get('https://w4i1vz3nzk.execute-api.us-east-1.amazonaws.com/dev/dashboard').then((data) => {
	console.log(data)
  return data
})