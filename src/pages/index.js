import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Slider from "react-slick";

import categoryimg1 from "../images/category-img1.png";
import categoryimg2 from "../images/category-img2.png";
import categoryimg3 from "../images/category-img3.png";
import categoryimg4 from "../images/category-img4.png";
import categoryimg5 from "../images/category-img5.png";
import categoryimg6 from "../images/category-img6.png";
import categoryimg7 from "../images/category-img7.png";

import product1 from "../images/product1.png";
import product2 from "../images/product2.png";
import product3 from "../images/product3.png";
import product4 from "../images/product4.png";
import product5 from "../images/product5.png";
import product6 from "../images/product6.png";

import newproduct1 from "../images/new-product1.png";
import newproduct2 from "../images/new-product2.png";
import newproduct3 from "../images/new-product3.png";
import newproduct4 from "../images/new-product4.png";

import accessories1 from "../images/accessories1.png";
import accessories2 from "../images/accessories2.png";
import accessories3 from "../images/accessories3.png";
import accessories4 from "../images/accessories4.png";

import finddevice1 from "../images/find-device1.png";
import finddevice2 from "../images/find-device2.png";

import vaporizerimg1 from "../images/vaporizer-img1.png";
import vaporizerimg2 from "../images/vaporizer-img2.png";
import vaporizerimg3 from "../images/vaporizer-img3.png";
import vaporizerimg4 from "../images/vaporizer-img4.png";
import vaporizerimg5 from "../images/vaporizer-img5.png";
import vaporizerimg6 from "../images/vaporizer-img6.png";

import quote from "../images/quote.png";

import stopsmoking from "../images/stop-smoking.png";

import profile1 from "../images/profile1.png";
import profile2 from "../images/profile2.png";
import profile3 from "../images/profile3.png";

import disposable1 from "../images/disposable-1.png";
import disposable2 from "../images/disposable-2.png";
import disposable3 from "../images/disposable-3.png";



export default function Home() {
  const newproducts = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 2500,
    autoplay: true,
    cssEase: "ease",
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };

  const testimonials = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="scroll-content">
      <Head>
        <title>My Next App</title>
        <meta name="description" content="Welcome to my Next.js app!" />
      </Head>
      <Header />

      <section className="banner">
        <div className="container">
          <h1 className="main-heading">
            <span>BOOSTING</span>
            Your Flavour
          </h1>
          <h4>Be Fully Compatible with vuse</h4>
          <Link className="dflt-btn" href="/">
            Shop Now<i class="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
      </section>

      <section className="products-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="inner">
                <div className="img">
                  <Image src={product1} />
                </div>
                <div className="content">
                  <h4>Disposable</h4>
                  <Link className="dflt-btn" href="/">
                    Shop Now<i class="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="inner">
                <div className="img">
                  <Image src={product2} />
                </div>
                <div className="content">
                  <h4>E-Liquid</h4>
                  <Link className="dflt-btn" href="/">
                    Shop Now<i class="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="inner">
                <div className="img">
                  <Image src={product3} />
                </div>
                <div className="content">
                  <h4>Pot Devices</h4>
                  <Link className="dflt-btn" href="/">
                    Shop Now<i class="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="inner">
                <div className="img">
                  <Image src={product4} />
                </div>
                <div className="content">
                  <h4>Hookah</h4>
                  <Link className="dflt-btn" href="/">
                    Shop Now<i class="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="inner">
                <div className="img">
                  <Image src={product5} />
                </div>
                <div className="content">
                  <h4>Tobacco</h4>
                  <Link className="dflt-btn" href="/">
                    Shop Now<i class="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="inner">
                <div className="img">
                  <Image src={product6} />
                </div>
                <div className="content">
                  <h4>Torch & Lighters</h4>
                  <Link className="dflt-btn" href="/">
                    Shop Now<i class="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="top-categories">
        <div className="container">
          <div className="title text-center">
            <h2 className="sub-heading">Top Categories</h2>
          </div>

          <div className="row">
            <div className="col">
              <div className="inner">
                <Image src={categoryimg1} />
                <h6>E-Liquid</h6>
              </div>
            </div>

            <div className="col">
              <div className="inner">
                <Image src={categoryimg2} />
                <h6>Vape Coils</h6>
              </div>
            </div>

            <div className="col">
              <div className="inner">
                <Image src={categoryimg3} />
                <h6>Vape Kits</h6>
              </div>
            </div>

            <div className="col">
              <div className="inner">
                <Image src={categoryimg4} />
                <h6>Vape Mods</h6>
              </div>
            </div>

            <div className="col">
              <div className="inner">
                <Image src={categoryimg5} />
                <h6>Vape POds</h6>
              </div>
            </div>

            <div className="col">
              <div className="inner">
                <Image src={categoryimg6} />
                <h6>Vaping Kits</h6>
              </div>
            </div>

            <div className="col">
              <div className="inner">
                <Image src={categoryimg7} />
                <h6>Vaping Tanks</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new-products">
        <div className="container">
          <div className="title">
            <h2 className="sub-heading">New Products</h2>
          </div>

          <Slider {...newproducts}>
            <div className="inner">
              <div className="img">
                <Image src={newproduct1} />
              </div>
              <div className="content">
                <h4>-25%</h4>
                <h6>
                  <del>200.00$</del>150.00$
                </h6>
                <h5>Iced Grape Acai</h5>
                <ul>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                </ul>
                <span>HOT OFFER</span>
              </div>
              <Link className="add-to-cart" href="">
                ADD TO CART<i class="fa-solid fa-bag-shopping"></i>
              </Link>
            </div>

            <div className="inner">
              <div className="img">
                <Image src={newproduct2} />
              </div>
              <div className="content">
                <h4>-25%</h4>
                <h6>
                  <del>200.00$</del>150.00$
                </h6>
                <h5>Iced Grape Acai</h5>
                <ul>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                </ul>
              </div>
              <Link className="add-to-cart" href="">
                ADD TO CART<i class="fa-solid fa-bag-shopping"></i>
              </Link>
            </div>

            <div className="inner">
              <div className="img">
                <Image src={newproduct3} />
              </div>
              <div className="content">
                <h4>-25%</h4>
                <h6>
                  <del>200.00$</del>150.00$
                </h6>
                <h5>Iced Grape Acai</h5>
                <ul>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                </ul>
                <span>HOT OFFER</span>
              </div>
              <Link className="add-to-cart" href="">
                ADD TO CART<i class="fa-solid fa-bag-shopping"></i>
              </Link>
            </div>

            <div className="inner">
              <div className="img">
                <Image src={newproduct4} />
              </div>
              <div className="content">
                <h4>-25%</h4>
                <h6>
                  <del>200.00$</del>150.00$
                </h6>
                <h5>Iced Grape Acai</h5>
                <ul>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                </ul>
              </div>
              <Link className="add-to-cart" href="">
                ADD TO CART<i class="fa-solid fa-bag-shopping"></i>
              </Link>
            </div>
          </Slider>
        </div>
      </section>

      <section className="find-your-device">
        <div className="container">
          <div className="bg text-center">
            <Image src={finddevice1} />
            <div>
              <h2 className="sub-heading">FIND YOUR DEVICE!</h2>
              <Link className="dflt-btn" href="/">
                Shop Now<i class="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
            <Image src={finddevice2} />
          </div>
        </div>
      </section>

      <section className="disposable new-products">
        <div className="container">
          <div className="title">
            <h2 className="sub-heading">Disposable Vape Devices</h2>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="inner">
                <div className="row">
                  <div className="col-md-6">
                    <div className="img">
                      <Image src={disposable1} />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="content">
                      <h4>-25%</h4>

                      <h5>Iced Grape Acai</h5>
                      <ul>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                      </ul>
                      <p className="paragraph">
                        It is a long established fact that a reader will be
                        distracted by readable content of a page.
                      </p>
                      <h6>
                        <del>200.00$</del>150.00$
                      </h6>
                      <span>HOT OFFER</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="row">
                <div className="col-md-6">
                  <div className="inner paddingg">
                    <div className="img">
                      <Image src={disposable2} />
                    </div>
                    <div className="content">
                      <h4>-25%</h4>
                      <h6>
                        <del>200.00$</del>150.00$
                      </h6>
                      <h5>Iced Grape Acai</h5>
                      <ul>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                      </ul>
                      <span>HOT OFFER</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="inner paddingg">
                    <div className="img">
                      <Image src={disposable3} />
                    </div>
                    <div className="content">
                      <h4>-25%</h4>
                      <h6>
                        <del>200.00$</del>150.00$
                      </h6>
                      <h5>Iced Grape Acai</h5>
                      <ul>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new-products accessories">
        <div className="container">
          <div className="title text-center">
            <h2 className="sub-heading">Vape Device Kit & Accessories</h2>
          </div>

          <Slider {...newproducts}>
            <div className="inner">
              <div className="img">
                <Image src={accessories1} />
              </div>
              <div className="content">
              <h4>-25%</h4>
                <h6>
                  <del>200.00$</del>150.00$
                </h6>
                <h5>Iced Grape Acai</h5>
                <ul>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                </ul>
                <span>HOT OFFER</span>
              </div>
              <Link className="add-to-cart" href="">
                ADD TO CART<i class="fa-solid fa-bag-shopping"></i>
              </Link>
            </div>

            <div className="inner">
              <div className="img">
                <Image src={accessories2} />
              </div>
              <div className="content">
                <h4>-25%</h4>
                <h6>
                  <del>200.00$</del>150.00$
                </h6>
                <h5>Iced Grape Acai</h5>
                <ul>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                </ul>
                <span>HOT OFFER</span>
              </div>
              <Link className="add-to-cart" href="">
                ADD TO CART<i class="fa-solid fa-bag-shopping"></i>
              </Link>
            </div>

            <div className="inner">
              <div className="img">
                <Image src={accessories3} />
              </div>
              <div className="content">
                <h4>-25%</h4>
                <h6>
                  <del>200.00$</del>150.00$
                </h6>
                <h5>Iced Grape Acai</h5>
                <ul>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                </ul>
                <span>HOT OFFER</span>
              </div>
              <Link className="add-to-cart" href="">
                ADD TO CART<i class="fa-solid fa-bag-shopping"></i>
              </Link>
            </div>

            <div className="inner">
              <div className="img">
                <Image src={accessories4} />
              </div>
              <div className="content">
                <h4>-25%</h4>
                <h6>
                  <del>200.00$</del>150.00$
                </h6>
                <h5>Iced Grape Acai</h5>
                <ul>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                </ul>
                <span>HOT OFFER</span>
              </div>
              <Link className="add-to-cart" href="">
                ADD TO CART<i class="fa-solid fa-bag-shopping"></i>
              </Link>
            </div>

            <div className="inner">
              <div className="img">
                <Image src={accessories1} />
              </div>
              <div className="content">
              <h4>-25%</h4>
                <h6>
                  <del>200.00$</del>150.00$
                </h6>
                <h5>Iced Grape Acai</h5>
                <ul>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-star"></i>
                  </li>
                </ul>
                <span>HOT OFFER</span>
              </div>
              <Link className="add-to-cart" href="">
                ADD TO CART<i class="fa-solid fa-bag-shopping"></i>
              </Link>
            </div>
          </Slider>
        </div>
      </section>

      <section className="stop-smoking">
        <div className="container">
          <div className="bg">
            <Image src={stopsmoking}/>
            <div className="row">
              <div className="col-md-8">
                <div className="text">
                  <h2 className="sub-heading">STOP SMOKING - START VAPING</h2>
                  <h6>All You Need To Know </h6>
                </div>
              </div>
              <div className="col-md-3">
                <div className="buttonn">
                  <Link className="dflt-btn" href="/">
                    Shop Now<i class="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vaporizer-device new-products disposable ">
        <div className="container">
          <div className="title text-center">
            <h2 className="sub-heading">Vaporizer Device Kit & Accessories</h2>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="inner">
                <div className="row">
                  <div className="col-md-6">
                    <div className="img">
                      <Image src={vaporizerimg1} />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="content">
                      <h4>-25%</h4>
                     
                      <h5>Iced Grape Acai</h5>
                      <ul>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                      </ul>
                      <p className="paragraph">
                      It is a long established fact that a reader will be distracted by readable content of a page.
                      </p>
                      <h6>
                        <del>200.00$</del>150.00$
                      </h6>
                      <span>HOT OFFER</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="inner">
                <div className="row">
                  <div className="col-md-6">
                    <div className="img">
                      <Image src={vaporizerimg2} />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="content">
                     
                      <h5>Iced Grape Acai</h5>
                      <ul>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i class="fa-solid fa-star"></i>
                        </li>
                      </ul>
                      <p className="paragraph">
                      It is a long established fact that a reader will be distracted by readable content of a page.
                      </p>
                      <h4>-25%</h4>
                      <h6>
                        <del>200.00$</del>150.00$
                      </h6>
                      <span>HOT OFFER</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="inner">
                <div className="img">
                  <Image src={vaporizerimg3} />
                </div>
                <div className="content">
                  <h4>-25%</h4>
                  <h6>
                    <del>200.00$</del>150.00$
                  </h6>
                  <h5>Iced Grape Acai</h5>
                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                  <span>HOT OFFER</span>
                </div>
                 <Link className="add-to-cart" href="">
                    ADD TO CART<i class="fa-solid fa-bag-shopping"></i>
                  </Link>
              </div>
            </div>

            <div className="col-md-3">
              <div className="inner">
                <div className="img">
                  <Image src={vaporizerimg4} />
                </div>
                <div className="content">
                  <h4>-25%</h4>
                  <h6>
                    <del>200.00$</del>150.00$
                  </h6>
                  <h5>Iced Grape Acai</h5>
                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
                <Link className="add-to-cart" href="">
                    ADD TO CART<i class="fa-solid fa-bag-shopping"></i>
                  </Link>
              </div>
            </div>

            <div className="col-md-3">
              <div className="inner">
                <div className="img">
                  <Image src={vaporizerimg5} />
                </div>
                <div className="content">
                  <h4>-25%</h4>
                  <h6>
                    <del>200.00$</del>150.00$
                  </h6>
                  <h5>Iced Grape Acai</h5>
                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                  <span>HOT OFFER</span>
                </div>
                <Link className="add-to-cart" href="">
                    ADD TO CART<i class="fa-solid fa-bag-shopping"></i>
                  </Link>
              </div>
            </div>

            <div className="col-md-3">
              <div className="inner">
                <div className="img">
                  <Image src={vaporizerimg6} />
                </div>
                <div className="content">
                  <h4>-25%</h4>
                  <h6>
                    <del>200.00$</del>150.00$
                  </h6>
                  <h5>Iced Grape Acai</h5>
                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
                <Link className="add-to-cart" href="">
                    ADD TO CART<i class="fa-solid fa-bag-shopping"></i>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="title text-center">
            <h2 className="sub-heading">Vape Device Kit & Accessories</h2>
          </div>

          <Slider {...testimonials}>
            <div className="inner">
              <h6>VAPE</h6>
              <p className="paragraph">
                It is a long established fact that a reader will be distracted
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum.
              </p>
              <div className="tesi-footer">
                <div className="quote">
                  <Image src={quote} />
                </div>
                <div className="flexx">
                  <div className="also-flex">
                    <div>
                      <Image src={profile1} />
                    </div>
                    <div>
                      <h5>John Doe</h5>
                    </div>
                  </div>
                  <div className="stars">
                    <ul>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="inner">
              <h6>E-Liquid</h6>
              <p className="paragraph">
                It is a long established fact that a reader will be distracted
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum.
              </p>
              <div className="tesi-footer">
                <div className="quote">
                  <Image src={quote} />
                </div>
                <div className="flexx">
                  <div className="also-flex">
                    <div>
                      <Image src={profile2} />
                    </div>
                    <div>
                      <h5>John Doe</h5>
                    </div>
                  </div>
                  <div className="stars">
                    <ul>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="inner">
              <h6>Tobacco</h6>
              <p className="paragraph">
                It is a long established fact that a reader will be distracted
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum.
              </p>
              <div className="tesi-footer">
                <div className="quote">
                  <Image src={quote} />
                </div>
                <div className="flexx">
                  <div className="also-flex">
                    <div>
                      <Image src={profile3} />
                    </div>
                    <div>
                      <h5>John Doe</h5>
                    </div>
                  </div>
                  <div className="stars">
                    <ul>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="inner">
              <h6>Tobacco</h6>
              <p className="paragraph">
                It is a long established fact that a reader will be distracted
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum.
              </p>
              <div className="tesi-footer">
                <div className="quote">
                  <Image src={quote} />
                </div>
                <div className="flexx">
                  <div className="also-flex">
                    <div>
                      <Image src={profile1} />
                    </div>
                    <div>
                      <h5>John Doe</h5>
                    </div>
                  </div>
                  <div className="stars">
                    <ul>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="inner">
              <h6>Vape</h6>
              <p className="paragraph">
                It is a long established fact that a reader will be distracted
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum.
              </p>
              <div className="tesi-footer">
                <div className="quote">
                  <Image src={quote} />
                </div>
                <div className="flexx">
                  <div className="also-flex">
                    <div>
                      <Image src={profile2} />
                    </div>
                    <div>
                      <h5>John Doe</h5>
                    </div>
                  </div>
                  <div className="stars">
                    <ul>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="inner">
              <h6>VAPE</h6>
              <p className="paragraph">
                It is a long established fact that a reader will be distracted
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum.
              </p>
              <div className="tesi-footer">
                <div className="quote">
                  <Image src={quote} />
                </div>
                <div className="flexx">
                  <div className="also-flex">
                    <div>
                      <Image src={profile3} />
                    </div>
                    <div>
                      <h5>John Doe</h5>
                    </div>
                  </div>
                  <div className="stars">
                    <ul>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <Footer />
    </div>
  );
}
