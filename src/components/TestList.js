const datas = [
    { id: 1, title: 'title_1' },
    { id: 2, title: 'title_2' },
    { id: 3, title: 'title_3' },
]


const TestList = () => {
    const list = datas.map( (data) =>
        <li key={data.id}>
            {data.title}
        </li>
    )

    return (
        <ul>{list}</ul>
    )
}


export default TestList 