const Footer = () => {
  return (
    <div className="flex justify-center bg-yellow-50 px-12 py-16 gap-10">
      <div className="flex flex-col justify-between w-2/5">
        <div className="flex flex-col gap-3">
          <h2 className="flex items-center gap-2 tracking-tight font-bold text-2xl text-teal-800">
            <img className="w-8 h-8" src="https://placehold.co/40x40" alt="" />
            Let's Picnic
          </h2>
          <p>
            Let's Picnic is a picnic planning app that helps you plan the
            perfect picnic.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-sm">Accepted Payments</h3>
          <div className="flex space-x-2">
            <img
              className="w-8 h-8"
              src="https://cdn-icons-png.flaticon.com/512/349/349228.png"
              alt="Visa"
            />
            <img
              className="w-8 h-8"
              src="https://cdn-icons-png.flaticon.com/512/349/349234.png"
              alt="Mastercard"
            />
            <img
              className="w-8 h-8"
              src="https://cdn-icons-png.flaticon.com/512/349/349221.png"
              alt="American Express"
            />
            <img
              className="w-8 h-8"
              src="https://cdn-icons-png.flaticon.com/512/349/349227.png"
              alt="PayPal"
            />
            <img
              className="w-8 h-8"
              src="https://cdn-icons-png.flaticon.com/512/349/349230.png"
              alt="Apple Pay"
            />
            <img
              className="w-8 h-8"
              src="https://cdn-icons-png.flaticon.com/512/349/349231.png"
              alt="Cash App"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-around">
        <div className="flex flex-col gap-3.5">
          <h3 className="font-semibold">Department</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>Fashion</li>
            <li>Frozen</li>
            <li>Dairy</li>
            <li>Vegetables</li>
            <li>Meat & Fish</li>
            <li>Grocery</li>
            <li>Furniture</li>
            <li>Beauty</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3.5">
          <h3 className="font-semibold">About Us</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>About Let's Picnic</li>
            <li>Careers</li>
            <li>News & Blog</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3.5">
          <h3 className="font-semibold">Services</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>Gift Card</li>
            <li>Mobile App</li>
            <li>Shopping & Delivery</li>
            <li>Order Pickup</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3.5">
          <h3 className="font-semibold">Help</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>Shopcart Help</li>
            <li>Returns</li>
            <li>Track Order</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
