import Card from './Card'

function CardList({ data }) {
  return (
    <>
      {data.map((blog, index) => (
        <Card {...blog} key={index} />
      ))}
    </>
  )
}

export default CardList
