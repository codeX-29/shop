import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDashboard.css';

// Sample product data (in a real app, this would come from an API)
const productsData = [
   {
    id: 1,
    name: "LED Bulbs Pack",
    price: 499,
    category: "Lighting",
    image: "https://kosilight.uk/12910-thickbox_default/huge-30cm-bulb-with-twisted-filament-e27-4w.jpg"
  },
  {
    id: 2,
    name: "Ceiling Fan",
    price: 1299,
    category: "Appliances",
    image: "https://m.media-amazon.com/images/I/81pZcNzZOwL.jpg"
  },
  {
    id: 3,  
    name: "Solar Panels",
    price: 15999,
    category: "Solar",
    image: "https://tse1.mm.bing.net/th/id/OIP.IocyrBHQYr7iYwDC1im5qAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 4,
    name: "Circuit Breaker",
    price: 899,
    category: "Components",
    image: "https://www.thespruce.com/thmb/hghLc6UscZ9OJB2HRE6lCJb3mro=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc()/safely-install-a-circuit-breaker-1152745-08-6f6a59afc5a24dd189ef645617d1ee54.jpg"
  },
  {
    id: 5,
    name: "Power Inverter",
    price: 3499,
    category: "Components",
    image: "https://tse1.mm.bing.net/th/id/OIP.cYCiKi_hUXLPc4vQ4LEwOQHaFs?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 6,
    name: "Smart Switch",
    price: 1199,
    category: "Home Automation",
    image: "https://tse2.mm.bing.net/th/id/OIP.gXKNlIXWYcjHOGcl8xX3gwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 7,
    name: "LED Strip Lights",
    price: 799,
    category: "Lighting",
    image: "https://tse2.mm.bing.net/th/id/OIP.GBNxhrIT6eDy4dZ7wEDqawHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 8,
    name: "Table Lamp",
    price: 399,
    category: "Lighting",
    image: "https://5.imimg.com/data5/SELLER/Default/2020/11/CL/NO/WE/97653226/antique-table-lamp-1000x1000.jpg"
  },
  {
    id: 9,
    name: "Wall Switch",
    price: 199,
    category: "Components",
    image: "https://stylesatlife.com/wp-content/uploads/2023/10/Modern-Electric-Switch-Board-Design-for-House.jpg"
  },
  {
    id: 10,
    name: "Socket Outlet",
    price: 149,
    category: "Components",
    image: "https://th.bing.com/th/id/OIP.b2xXzJPIAFRNQCXD0YjQSQHaHa?w=180&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    id: 11,
    name: "LED Flood Light",
    price: 899,
    category: "Lighting",
    image: "https://i.ytimg.com/vi/xqfEBkAvlkk/maxresdefault.jpg"
  },
  {
    id: 12,
    name: "LED Tube Light",
    price: 299,
    category: "Lighting",
    image: "https://tse4.mm.bing.net/th/id/OIP.TeExfiaHLKq7jrK39WisqwHaEp?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 13,
    name: "Solar Water Heater",
    price: 12999,
    category: "Solar",
    image: "https://tse3.mm.bing.net/th/id/OIP.46FOrLwcjmsfQxUbenNTnQHaDr?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 14,
    name: "Solar Charger",
    price: 2499,
    category: "Solar",
    image: "https://th.bing.com/th/id/OIP.sMO9858pJGep9VPWRBShUAHaEo?w=257&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    id: 15,
    name: "Solar Battery",
    price: 4999,
    category: "Solar",
    image: "https://tse1.mm.bing.net/th/id/OIP.c39LJRrX0Wg0ffn3MN3rCwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 16,
    name: "LED Ceiling Light",
    price: 699,
    category: "Lighting",
    image: "https://imgaz.staticbg.com/images/oaupload/ser1/banggood/images/1E/96/4aaa4b57-1526-4cf6-ae06-ec14d97262e9.jpg"
  },
  {
    id: 17,
    name: "LED Street Light",
    price: 1299,
    category: "Lighting",
    image: "https://tse2.mm.bing.net/th/id/OIP.kLRS89P7Qqdb6LktXcrqvwHaHB?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 18,
    name: "LED Corn Light",
    price: 399,
    category: "Lighting",
    image: "https://m.media-amazon.com/images/I/71+mOfUDD1L._AC_SL1500_.jpg"
  },
  {
    id: 19,
    name: "LED High Bay Light",
    price: 1499,
    category: "Lighting",
    image: "https://tse4.mm.bing.net/th/id/OIP.uiV_HoCeuZONK9UCijUk7AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 20,
    name: "LED Panel Light",
    price: 599,
    category: "Lighting",
    image: "https://image.made-in-china.com/2f0j00wdHTVQUKEBke/Daylight-5000k-6500k-600X1200-LED-Panel-Light-2X4-72W.jpg"
  },
  {
    id: 21,
    name: "LED Wall Light",
    price: 499,
    category: "Lighting",
    image: "https://i5.walmartimages.com/seo/Outdoor-Modern-Wall-Light-LED-Sconce-Fixture-Rectangular-Black-lamp-Elegant-Frosted-White-Acrylic-IP65-Anti-Rust-Proch-Background-Wall-1_2035379c-c763-43ff-bac5-881195e851b6.6b96777153ede2085c7f40183b4dd68d.jpeg"
  },
  {
    id: 22,
    name: "LED Garden Light",
    price: 799,
    category: "Lighting",
    image: "https://image.made-in-china.com/2f0j00PWKGDIHcgSbR/Landscape-Garden-Pathway-LED-Waterproof-Commercial-Solar-Bollard-Lights.jpg"
  },
  {
    id: 23,
    name: "LED Underwater Light",
    price: 1199,
    category: "Lighting",
    image: "https://m.media-amazon.com/images/I/71wQVcCuKBL._AC_SL1500_.jpg"
  },
  {
    id: 24,
    name: "LED Emergency Light",
    price: 399,
    category: "Lighting",
    image: "https://www.atotalsolution.com/wp-content/uploads/2018/06/Fire-Alarm-Systems-The-Benefits-of-LED-Emergency-Lights.jpg"
  },
  {
    id: 25,
    name: "LED Night Light",
    price: 199,
    category: "Lighting",
    image: "https://m.media-amazon.com/images/I/61swHziQpGL.jpg"
  },
  {
    id: 26,
    name: "LED Bulb 9W",
    price: 99,
    category: "Lighting",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/12/WY/ZC/SW/121907975/crompton-led-bulb-1000x1000.jpg"
  },
  {
    id: 27,
    name: "LED Bulb 12W",
    price: 129,
    category: "Lighting",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/12/WY/ZC/SW/121907975/crompton-led-bulb-1000x1000.jpg"
  },
  {
    id: 28,
    name: "LED Bulb 15W",
    price: 149,
    category: "Lighting",
    image: "https://m.media-amazon.com/images/I/71Ytcq1vnEL._SL1500_.jpg"
  },
  {
    id: 29,
    name: "LED Bulb 18W",
    price: 179,
    category: "Lighting",
    image: "https://m.media-amazon.com/images/I/31R79qb2maL.jpg"
  },
  {
    id: 30,
    name: "LED Bulb 20W-50w",
    price: 199,
    category: "Lighting",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/9/TH/WV/PM/137616057/50w-crompton-led-bulb-1000x1000.jpg"
  },
  {
    id: 31,
    name: "LED Downlight",
    price: 299,
    category: "Lighting",
    image: "https://tse4.mm.bing.net/th/id/OIP.44ZMKzicC8D0Ii1gM74PCgHaEr?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 32,
    name: "LED Uplight",
    price: 399,
    category: "Lighting",
    image: "https://tse1.mm.bing.net/th/id/OIP.3xoxucxMTpoNcLjwZB_dPAHaIt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 33,
    name: "LED Spotlight",
    price: 499,
    category: "Lighting",
    image: "https://tse4.mm.bing.net/th/id/OIF.kQsXAHnaAOPGx6diYd0S7w?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 34,
    name: "LED Decorative Light",
    price: 599,
    category: "Lighting",
    image: "https://cdn2.shopify.com/s/files/1/0274/2111/products/LED-Lighted-Wall-Art-2.jpg?v=1556307462"
  },
  {
    id: 35,
    name: "coper pipe",
    price: 699,
    category: "pipe",
    image: "https://tse1.explicit.bing.net/th/id/OIP.ShKhafsZDJuC2oA84tYcGQHaDs?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 36,
    name: "pipe wrench",
    price: 299,
    category: "pipe",
    image: "https://my-test-11.slatic.net/p/a9a2364371a5e34383f9275341ce8b57.jpg"
  },
  {
    id: 37,
    name: "LED Lamp Holder",
    price: 149,
    category: "Lighting",
    image: "https://tse3.mm.bing.net/th/id/OIP.d5H8iMjYi0AcfRplygHzlwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  
  {
    id: 38,
    name: "Solar wall Light",
    price: 1999,
    category: "Solar",
    image: "https://i.etsystatic.com/23896889/r/il/fb6ab4/3217042781/il_fullxfull.3217042781_pyww.jpg"
  },
  {
    id: 39,
    name: "Solar Security camera",
    price: 3999,
    category: "Solar camera",
    image: "https://www.luxmanlight.com/wp-content/uploads/2020/07/1.jpg?x49836"
  },
  {
    id: 40,
    name: "Solar Flashlight",
    price: 499,
    category: "Solar",
    image: "https://tse3.mm.bing.net/th/id/OIP.MU9QqUhHdpcagETXm4FPQwHaEO?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  }
];

// Sample orders data (in a real app, this would come from an API)
const ordersData = [
  {
    id: 101,
    userId: "user1",
    items: [
      { productId: 1, quantity: 2, price: 499 },
      { productId: 4, quantity: 1, price: 899 }
    ],
    total: 1897,
    date: "2023-05-15",
    status: "Delivered"
  },
  {
    id: 102,
    userId: "user2",
    items: [
      { productId: 2, quantity: 1, price: 1299 },
      { productId: 6, quantity: 3, price: 1199 }
    ],
    total: 4896,
    date: "2023-05-18",
    status: "Processing"
  },
  {
    id: 103,
    userId: "user1",
    items: [
      { productId: 3, quantity: 1, price: 15999 }
    ],
    total: 15999,
    date: "2023-05-20",
    status: "Shipped"
  }
];

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/user/login');
    } else {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      
      // Filter orders for this user
      const userOrders = ordersData.filter(order => order.userId === parsedUser.username);
      setOrders(userOrders);
    }
  }, [navigate]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const placeOrder = () => {
    if (cart.length === 0) return;
    
    // In a real application, this would be an API call
    const newOrder = {
      id: Date.now(),
      userId: user.username,
      items: cart.map(item => ({
        productId: item.id,
        quantity: item.quantity,
        price: item.price
      })),
      total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      date: new Date().toISOString().split('T')[0],
      status: "Processing"
    };
    
    // Add to orders (in a real app, this would be stored on the server)
    setOrders([...orders, newOrder]);
    
    // Clear cart
    setCart([]);
    
    alert('Order placed successfully!');
  };

  const trackOrder = (orderId) => {
    // In a real application, this would fetch order tracking details from an API
    alert(`Tracking order #${orderId}. Status: Processing. Estimated delivery: 3-5 business days.`);
  };

  const cancelOrder = (orderId) => {
    // In a real application, this would cancel the order via an API call
    const updatedOrders = orders.map(order => 
      order.id === orderId ? { ...order, status: "Cancelled" } : order
    );
    setOrders(updatedOrders);
    alert(`Order #${orderId} has been cancelled successfully.`);
  };

  const processRefund = (orderId) => {
    // In a real application, this would initiate a refund via an API call
    alert(`Refund for order #${orderId} initiated. Bank details for refund: Account Number: XXXX-XXXX-XXXX-1234, IFSC Code: ENGX0001234`);
  };

  const makePayment = (orderId, amount) => {
    // In a real application, this would redirect to a payment gateway
    alert(`Redirecting to payment gateway for order #${orderId} - Amount: ₹${amount}`);
  };

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/user/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1>User Dashboard</h1>
          <div className="user-info">
            <span>Welcome, {user.username}</span>
            <button onClick={logout} className="btn btn-secondary">Logout</button>
          </div>
        </div>

        <div className="dashboard-content">
          <section className="products-section">
            <h2>Available Products</h2>
            <div className="products-grid">
              {products.map(product => (
                <div className="product-card" key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="category">{product.category}</p>
                    <p className="price">₹{product.price}</p>
                    <button 
                      className="btn btn-primary" 
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="cart-section">
            <h2>Your Cart ({cart.length} items)</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <div className="cart-content">
                <div className="cart-items">
                  {cart.map(item => (
                    <div className="cart-item" key={item.id}>
                      <span>{item.name}</span>
                      <span>₹{item.price} x {item.quantity}</span>
                      <button 
                        className="btn btn-danger" 
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-summary">
                  <p>Total: ₹{cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)}</p>
                  <button className="btn btn-primary" onClick={placeOrder}>
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </section>

          <section className="orders-section">
            <h2>Your Order History</h2>
            {orders.length === 0 ? (
              <p>You have no orders yet</p>
            ) : (
              <div className="orders-list">
                {orders.map(order => (
                  <div className="order-card" key={order.id}>
                    <div className="order-header">
                      <span>Order ID: {order.id}</span>
                      <span className="order-status">{order.status}</span>
                    </div>
                    <div className="order-details">
                      <p>Date: {order.date}</p>
                      <p>Total: ₹{order.total}</p>
                      <div className="order-items">
                        {order.items.map(item => {
                          const product = products.find(p => p.id === item.productId);
                          return (
                            <div key={item.productId} className="order-item">
                              <span>{product?.name || 'Unknown Product'}</span>
                              <span>Qty: {item.quantity}</span>
                              <span>₹{item.price} each</span>
                            </div>
                          );
                        })}
                      </div>
                      <div className="order-actions">
                        <button className="btn btn-info" onClick={() => trackOrder(order.id)}>
                          Track Order
                        </button>
                        {order.status === 'Processing' && (
                          <button className="btn btn-warning" onClick={() => cancelOrder(order.id)}>
                            Cancel Order
                          </button>
                        )}
                        {order.status === 'Delivered' && (
                          <button className="btn btn-success" onClick={() => processRefund(order.id)}>
                            Request Refund
                          </button>
                        )}
                        {order.status === 'Processing' && (
                          <button className="btn btn-primary" onClick={() => makePayment(order.id, order.total)}>
                            Make Payment
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
