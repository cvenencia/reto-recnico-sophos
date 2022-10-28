export function formatTimestamp(timestamp) {
    return timestamp.split('T')[0] || '-';
}
