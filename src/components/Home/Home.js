import React from 'react'
import './Home.css';
import bannerIMG from './amazon-banner.jpg';
import Product from '../Product/Product';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img src={bannerIMG} alt="" className='home__image' />

        <div className="home__row">
          <Product id='00001' title="Water bottles" price={29.99} image='https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png' rating={5} />
          <Product id='00002' title="Oil Perfumes" price={19.99} image='https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' rating={4} />
        </div>

        <div className="home__row">
          <Product id='00003' title="Overtime conditioner" price={19.99} image='https://offautan-uc1.azureedge.net/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph' rating={4} />
          <Product id='00004' title="Overtime conditioner" price={19.99} image='https://images.yaoota.com/7Vhgmr5C_Q0LZQ5sZ8YVYFILr6Y=/trim/yaootaweb-production-ng/media/crawledproductimages/1bdbc286de17ec2d38f325af0451de7f10816289.jpg' rating={4} />
          <Product id='00005' title="Water bottles" price={29.99} image='https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png' rating={5} />
          <Product id='00006' title="Oil Perfumes" price={19.99} image='https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' rating={4} />
        </div>

        <div className="home__row">
          <Product id='00007' title="Overtime conditioner" price={19.99} image='https://images.yaoota.com/7Vhgmr5C_Q0LZQ5sZ8YVYFILr6Y=/trim/yaootaweb-production-ng/media/crawledproductimages/1bdbc286de17ec2d38f325af0451de7f10816289.jpg' rating={4} />
        </div>
      </div>

    </div>
  )
}

export default Home