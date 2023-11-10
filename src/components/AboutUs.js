import Coffee from "../assets/img-coffee-ai.png";

function AboutUs() {
  return (
    <>
      <div className="container vw-100 mt-5 pt-2">
        <div className="row align-items-center">
          <div className="col ">
            <h1 className="text-light fw-semibold">About Us</h1>
            <p className="text-light-secondary mt-3">
              Nama <span className="text-cream">Motamorph</span> yang diambil
              dari kata <span className="text-cream">Atom</span> sebagai satuan
              dasar sebuah materi pemilihan kata{" "}
              <span className="text-cream">Atom</span> menggambarkan para owner
              yang berasal dari Jurasan IPA sehingga menjadi pengingat darimana
              kami berasal dan pertama kali bertemu.
              <br />
              <br />
              <span className="text-cream">Morph</span> sendiri berarti
              perubahan, perubahan yang mampu memberikan dampak positif bagi
              sekitar dan bagi kami.
            </p>
          </div>
          <div className="col">
            <img src={Coffee} alt="" className="d-block mx-auto w-50" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
