function newAvg(arr, newavg) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const requiredDonation = (newavg * (arr.length + 1)) - sum;

    if (requiredDonation <= 0) {
        throw new Error("Expected New Average is too low");
    }

    return Math.ceil(requiredDonation);
}
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92)) // 645