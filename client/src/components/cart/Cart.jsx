import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Long Sleeve T-Shirt",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In et, esse quas voluptas aliquam non expedita at reiciendis doloremque minima temporibus praesentium nostrum perferendis quo ducimus pariatur magni deserunt perspiciatis!",
    isNew: true,
    oldPrice: 1599,
    price: 999,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/1267369/pexels-photo-1267369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Coat",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In et, esse quas voluptas aliquam non expedita at reiciendis doloremque minima temporibus praesentium nostrum perferendis quo ducimus pariatur magni deserunt perspiciatis!",
    oldPrice: 1999,
    price: 1299,
  },
];

const Cart = () => {
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 70)}</p>
            <div className="price">1 x ₹{item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>₹999</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
