export function highlightMatch(text: string, query: string) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex).map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
            <span key={i} style={{ color: '#2DB100', fontWeight: 600 }}>
                {part}
            </span>
        ) : (
            part
        ),
    );
}
