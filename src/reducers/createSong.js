const newSong = {
    title: '',
    artist: '',
    genre: '',
    rating: '',
    url: '',
}

const createSong = (state = newSong, action) => {

    switch (action.type) {
        case 'UPDATE':
            const target = action.payload;
            const { name, value } = target;

            return {
                ...state,
                [name]: value
            };
        case 'RESET':
            const emptyForm = newSong;
            return emptyForm;
        default:
            return state;
    }
}

export default createSong;