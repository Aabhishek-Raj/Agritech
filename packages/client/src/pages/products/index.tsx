import Style from './index.module.css'
import ProfileCard from '../../components/ProfileCard'
import profileImg from '../../assets/img/profile-800x800.png'

const Products = () => {
  const data = [
    {
      id: 'profile1',
      name: 'Joe coder',
      img: profileImg,
      quote: 'I code stuff',
    },
    {
      id: 'profile2',
      name: 'Stay classy',
      img: profileImg,
      quote: 'I manage people',
    },
    {
      id: 'profile3',
      name: 'Rodrigo Fern',
      img: profileImg,
      quote: 'I test stuff',
    },
  ]

  return (
    <div className={Style.container}>
      <header>
        <h1>Agritech</h1>
        <nav>
          <a href="#profile1">Joe</a>
          <a href="#profile2">Matt</a>
          <a href="#profile3">Jane</a>
        </nav>
      </header>
      <main>
        {data.map((user) => (
          <ProfileCard key={user.id} user={user} />
        ))}
      </main>
      <div className={Style.element}>
        <div className={Style.colorDiv}></div>
        <label htmlFor="color">type the color</label>
        <input className="input" type="text" />
      </div>
      <footer>Acme.co</footer>
    </div>
  )
}

export default Products
