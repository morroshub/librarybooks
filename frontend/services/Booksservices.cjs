class Bookservices{

    constructor(){
        this.URI = 'http://localhost:3000/api/books'
    }



    async getBooks(){ //Peticion get al backend
        const response = await fetch(this.URI);
        const books = await response.json(); //transformamos el string a json
        return books;
    }

    async postBook(book){  //Peticion post al backend
        const response = await fetch(this.URI, {
            method: 'POST',
            body: book
        });
        const data = await response.json();
        console.log(data)

    }

    async deleteBook(bookId){
        const response = await fetch(`${this.URI}/${bookId}`, {
            headers: {
                'Content-Type': 'application/json'  // Esto nos habilita recibir strings como tambien la imagen de portada de libro.
            },
            method: 'DELETE'

        })
        const data = await response.json();
        console.log(data)
    } 
    


}

module.exports = Bookservices;