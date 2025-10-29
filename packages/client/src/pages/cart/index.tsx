import styles from './index.module.css'

const Cart = () => {
  return (
    <section>
      <div className={styles.section__head}>
        <h3>Price Details</h3>
      </div>
      <table className="price-details-table">
        <tbody>
          <tr>
            <td>Price (2 items)</td>
            <td className="amount">₹1,11,090</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td className="amount discount-amount">− ₹75,991</td>
          </tr>
          <tr>
            <td>Buy more & save more</td>
            <td className="amount discount-amount">− ₹100</td>
          </tr>
          <tr>
            <td>Protect Promise Fee</td>
            <td className="amount">₹99</td>
          </tr>
        </tbody>
      </table>
      {/* A distinct section for the final total and savings message */}
      <hr /> {/* Use <hr> to visually and semantically separate the total */}
      <div className="total-summary">
        <h4>Total Amount</h4>
        <p className="final-amount">₹35,098</p>
      </div>
      <p className="savings-message">
        You will save <strong className="saved-amount">₹75,992</strong> on this order
      </p>
    </section>
  )
}

export default Cart
