async function fetchBooks(){
    let response = await fetch('https://localhost:7200/api/books')
    let json = await response.json()
    console.log(json)
}

fetchBooks()