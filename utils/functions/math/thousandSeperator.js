function thousandSeperator(string) {
    const result = string?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return result;
}

export default thousandSeperator;
