import MotaSuren from "../assets/motasuren.jpg";
import Matcha from "../assets/matchamilk.jpg";
import BlueOcean from "../assets/blueocean.jpg";
import Coklat from "../assets/coklat.jpg";

function itemProduct(image, title, description, price) {
  return (
    <>
      <div className="card rounded-4 p-4 bg-dark" style={{ height: "28rem" }}>
        <img
          src={image}
          className="card-img-top overflow-hidden object-fit-cover rounded-4 height-50"
          alt="..."
        />
        <div className="card-body p-0 mx-2 mt-3">
          <p className="card-title text-light fw-semibold fs-5">{title}</p>
          <p className="card-text text-light-secondary">{description}</p>
          <p className="card-text text-cream fw-semibold fs-2">{price}</p>
        </div>
      </div>
    </>
  );
}

function BestSeller() {
  return (
    <>
      <section className="container text-light mt-5 pt-2">
        <h1 className="fw-semibold">Best Seller</h1>
        <p className="text-light-secondary mt-3">
          Best seller products from motamorph.
          <br />
          get it quickly while it's fresh
        </p>
        <div className="row mt-2 height-50">
          <div className="col">
            {itemProduct(
              MotaSuren,
              "Mota Suren",
              "Perpaduan antara kopi, susu dan gula aren",
              "15k"
            )}
          </div>
          <div className="col">
            {itemProduct(
              BlueOcean,
              "Blue Ocean",
              "Sirup blue curacao dicampur soda",
              "20k"
            )}
          </div>
          <div className="col">
            {itemProduct(
              Matcha,
              "Matcha Latte",
              "Bubuk Pure Matcha dengan susu full cream",
              "20k"
            )}
          </div>
          <div className="col">
            {itemProduct(
              Coklat,
              "Choco Hazelnut",
              "Bubuk coklat premium dengan sirup Hazelnut",
              "20k"
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default BestSeller;
