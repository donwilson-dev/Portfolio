function normalizeShowcaseItem(item) {
  if (typeof item === 'string') {
    return {
      title: item,
      description: null,
    };
  }

  return item;
}

function ShowcaseList({ ariaLabel, items, ordered = false }) {
  const ListElement = ordered ? 'ol' : 'ul';

  return (
    <ListElement className="showcase-list" aria-label={ariaLabel}>
      {items.map((item) => {
        const normalizedItem = normalizeShowcaseItem(item);

        return (
          <li key={normalizedItem.title}>
            <span className="showcase-list__title">{normalizedItem.title}</span>
            {normalizedItem.description ? (
              <span className="showcase-list__description">{normalizedItem.description}</span>
            ) : null}
          </li>
        );
      })}
    </ListElement>
  );
}

export default ShowcaseList;
