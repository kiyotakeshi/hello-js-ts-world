const counter = () => {
    let count = 0;

    const increment = () => {
        return count++;
    };

    return increment;
};
