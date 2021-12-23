const string = "abcdefghijklmnopqrstuvwxyz";
let pagination = {
    bookPages: function getPages(str = string, count = 4) {
        const alphabetArray = str.split("");
        let pageContent = [];

        for (let i = 0; i < alphabetArray.length; i += count) {
            pageContent.push(alphabetArray.slice(i, i + count));
        }
        return pageContent;
    },

    firstPage: 1,
    currentPage: 1,

    prevPage: function () {
        if (this.currentPage > 1){
            return --this.currentPage;
        } else {
            return "N/A";
        }
    },

    nextPage: function () {
        return ++this.currentPage;
    },

    lastPage: function () {
        return this.currentPage = this.bookPages().length;
    },

    goToPage (pageN) { return this.currentPage = pageN; },

    getPageItems: function () { return this.bookPages()[pagination.currentPage-1]; },

} /* OBJECT CLOSURE BRACES */

console.log(pagination.prevPage())
console.log(pagination.nextPage().nextPage())
console.log(pagination.firstPage)
console.log(pagination.lastPage())
console.log(pagination.goToPage(2))
console.log(pagination.getPageItems())