import NewListItem from "./NewsListItem";

/* Компонент возвращает список новостей по категории */
function NewsList({ items }) {
    return items.map((item, i) => {
        return (
          <NewListItem {...item} />
        );
    });
}

export default NewsList