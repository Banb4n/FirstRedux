export const selectBook = (book) => {
    // Select book is an action creator, it needs to return a object with type // property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}