import './Card.css'

export default function Card({ name, images, types, id }) {
  return (
    <section className="Card">
      <h2>
        {name} @{id}
      </h2>
      <ul>
        {types.map(type => (
          <li key={type}>{type}</li>
        ))}
      </ul>
      <div>
        <img src={images.front} alt="" />
        <img src={images.back} alt="" />
      </div>
    </section>
  )
}
