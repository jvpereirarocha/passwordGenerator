function formatDate(date) {
    const day = date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString();
    const month = date.getMonth() + 1 < 10 ? "0" + String(date.getMonth() + 1) : String(date.getMonth() + 1);
    const year = date.getFullYear().toString();

    return `${day}/${month}/${year}`;
}
module.exports = { formatDate }
