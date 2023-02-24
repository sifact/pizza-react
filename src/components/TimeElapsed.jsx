export function orderTime(time) {
    const now = new Date();
    const elapsed = now - new Date(time);
    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    let timeAgo;

    if (days > 0) {
        timeAgo = `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
        timeAgo = `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
        timeAgo = `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
        timeAgo = "just now";
    }

    return timeAgo;
}
