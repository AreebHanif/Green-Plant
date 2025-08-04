import { Copyright, Facebook, Github, Instagram, Linkedin, ShoppingCart, Star, Truck, Twitter } from 'lucide-react'
import heropic from './assets/img/home.png'
import leaf3 from './assets/img/leaf-3.png'
import plant1 from './assets/img/plant-1.png'
import plant2 from './assets/img/plant-2.png'
import cart1 from './assets/img/cart-1.png'
import cart2 from './assets/img/cart-2.png'
import cart3 from './assets/img/cart-3.png'
import cart4 from './assets/img/cart-4.png'

function App() {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate height of the navbar
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Navbar section  */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-green-950 text-white px-12 py-4 flex justify-between drop-shadow-xl">
        <label>Logo</label>
        <ul className="flex gap-6">
          <li className="cursor-pointer hover:text-yellow-400 transition-colors" onClick={() => scrollToSection('hero')}>Home</li>
          <li className="cursor-pointer hover:text-yellow-400 transition-colors" onClick={() => scrollToSection('features')}>Features</li>
          <li className="cursor-pointer hover:text-yellow-400 transition-colors" onClick={() => scrollToSection('about')}>About</li>
          <li className="cursor-pointer hover:text-yellow-400 transition-colors" onClick={() => scrollToSection('products')}>Products</li>
        </ul>
      </nav>

      {/* Hero section  */}
      <section id="hero" className="grid grid-cols-1 md:grid-cols-2 bg-green-950 text-white pt-20">
        <div id="text" className="flex flex-col items-left p-12 h-screen justify-center gap-6">
          <h1 className="text-6xl font-medium">Make the World Green</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero tenetur et, temporibus impedit maxime voluptatum odit asperiores corporis ab facilis nesciunt reiciendis blanditiis libero?</p>
          <button className="text-black bg-gradient-to-bl via-green-400 to-white w-fit px-4 py-2 border-none rounded-lg">Learn more</button>
        </div>
        <div id="image" className="w-[250px] h-[250px] md:w-[600px] md:h-[600px] mx-auto my-12">
          <img src={heropic} alt="" />
        </div>
      </section>

      {/* Feature Section  */}
      <section id='features' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-6 p-12 bg-white text-green-950'>
        <div className='min-h-5 w-[250px] flex flex-col gap-4 bg-white border border-green-900 rounded-lg shadow-lg px-4 py-2'>
          <div className='flex items-center text-left text-xl'>
            <Truck className='mr-2' />
            <span className='font-medium'>Fast Delivery</span>
          </div>
          <div className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur, in soluta ducimus totam rem!</div>
        </div>

        <div className='min-h-5 w-[250px] flex flex-col gap-4 bg-white border border-green-900 rounded-lg shadow-lg px-4 py-2'>
          <div className='flex items-center text-left text-xl'>
            <Truck className='mr-2' />
            <span className='font-medium'>Fast Delivery</span>
          </div>
          <div className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur, in soluta ducimus totam rem!</div>
        </div>

        <div className='min-h-5 w-[250px] flex flex-col gap-4 bg-white border border-green-900 rounded-lg shadow-lg px-4 py-2'>
          <div className='flex items-center text-left text-xl'>
            <Truck className='mr-2' />
            <span className='font-medium'>Fast Delivery</span>
          </div>
          <div className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur, in soluta ducimus totam rem!</div>
        </div>

        <div className='min-h-5 w-[250px] flex flex-col gap-4 bg-white border border-green-900 rounded-lg shadow-lg px-4 py-2'>
          <div className='flex items-center text-left text-xl'>
            <Truck className='mr-2' />
            <span className='font-medium'>Fast Delivery</span>
          </div>
          <div className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur, in soluta ducimus totam rem!</div>
        </div>
      </section>

      {/* About us section  */}
      <section id="about" className='bg-green-950 w-full min-h-[200px] relative overflow-hidden px-12 '>
        <div className='text-center pt-6'>
          <h2 className='text-yellow-300 text-4xl font-medium font-serif'>About Us</h2>
          <p className='text-white'>Follow instructions for more</p>
        </div>

        {/* Leaf  */}
        <div >
          <img src={leaf3} alt="Leaf" className='absolute  -right-5 object-fit-contain h-25 w-25 md:h-50 md:w-50 -top-3' />
        </div>

        {/*First Image and text */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 p-12 text-white'>
          <div id='image' className='w-[250px] h-[250px] md:w-[400px] md:h-[400px] mt-6 mx-auto'>
            <img src={plant1} alt="" />
          </div>
          <div id='text-side' className='flex flex-col justify-center gap-6 mt-10'>
            <h1 className='text-4xl font-medium font-serif'>Make your <span className='text-yellow-400'>Organic</span><br /> Garden</h1>
            <p className='font-sans text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus fuga necessitatibus aspernatur ad, nihil inventore. Sunt assumenda vero, repudiandae natus aliquid aliquam. Ex ab sed velit alias quisquam magni illo dolor harum labore voluptate libero reprehenderit sunt, fugiat voluptates nesciunt, nostrum possimus? Maxime placeat asperiores exercitationem omnis at voluptas est vitae repudiandae, incidunt dolore, veritatis nisi molestias enim delectus commodi!</p>
          </div>
        </div>

        {/* Second image and text */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 p-12 text-white'>
          <div id='text-side' className='flex flex-col justify-center gap-6'>
            <h1 className='text-4xl font-medium font-serif'>Come with us and <span className='text-yellow-400'>Grow up your Plants</span></h1>
            <p className='font-sans text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus fuga necessitatibus aspernatur ad, nihil inventore. Sunt assumenda vero, repudiandae natus aliquid aliquam. Ex ab sed velit alias quisquam magni illo dolor harum labore voluptate libero reprehenderit sunt, fugiat voluptates nesciunt, nostrum possimus? Maxime placeat asperiores exercitationem omnis at voluptas est vitae repudiandae, incidunt dolore, veritatis nisi molestias enim delectus commodi!</p>
          </div>

          <div id='image' className='w-[250px] h-[250px] md:w-[400px] md:h-[400px] mt-6 mx-auto'>
            <img src={plant2} alt="" />
          </div>
        </div>
      </section>

      {/* Plant section  */}
      <section id="products" className='bg-green-800 w-full min-h-[200px] overflow-hidden px-12 py-12'>
        <div className='text-center py-14'>
          <h1 className='text-yellow-400 font-serif font-medium text-4xl text-shadow-lg'>Your Plants Choice</h1>
          <p className='text-white text-lg'>Follow instructions for more</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 gap-16 md:gap-8 mt-[100px] p-12 text-white'>

          {/* First card */}
          <div className='bg-green-950 rounded-lg shadow-lg overflow-visible relative pt-32 md:pt-24 lg:pt-20 pb-6 px-6'>
            <div className='absolute -top-12 lg:-top-24 left-1/2 transform -translate-x-1/2'>
              <img src={cart1} alt="cart1" className='object-cover h-[250px] w-[250px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] rounded-lg' />
            </div>
            <div className='pt-16 text-center'>
              <div className='text-2xl font-medium'>Boston Fern</div>
              <div className='flex gap-1 pt-4 justify-center'>
                <Star className='h-5 fill-yellow-400 stroke-yellow-400' />
                <Star className='h-5 fill-yellow-400 stroke-yellow-400' />
                <Star className='h-5 fill-yellow-400 stroke-yellow-400' />
                <Star className='h-5 fill-yellow-400 stroke-yellow-400' />
                <Star className='h-5' />
              </div>
              <div className='flex items-center justify-between pt-4'>
                <span className='text-xl font-semibold'>$5</span>
                <ShoppingCart className='fill-white stroke-white h-8 w-8 bg-yellow-400 p-1 rounded-sm cursor-pointer hover:bg-yellow-500 transition-colors' />
              </div>
            </div>
          </div>

          {/* Second card */}
          <div className='bg-green-950 rounded-lg shadow-lg overflow-visible relative pt-32 md:pt-24 lg:pt-20 pb-6 px-6'>
            <div className='absolute -top-12 lg:-top-24 left-1/2 transform -translate-x-1/2'>
              <img src={cart2} alt="cart2" className='object-cover h-[250px] w-[250px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] rounded-lg' />
            </div>
            <div className='pt-16 text-center'>
              <div className='text-2xl font-medium'>Boston Fern</div>
              <div className='flex gap-1 pt-4 justify-center'>
                <Star className='h-5 fill-yellow-400 stroke-yellow-400' />
                <Star className='h-5 fill-yellow-400 stroke-yellow-400' />
                <Star className='h-5 fill-yellow-400 stroke-yellow-400' />
                <Star className='h-5 fill-yellow-400 stroke-yellow-400' />
                <Star className='h-5' />
              </div>
              <div className='flex items-center justify-between pt-4'>
                <span className='text-xl font-semibold'>$5</span>
                <ShoppingCart className='fill-white stroke-white h-8 w-8 bg-yellow-400 p-1 rounded-sm cursor-pointer hover:bg-yellow-500 transition-colors' />
              </div>
            </div>
          </div>

          {/* Third card */}
          <div className='bg-green-950 rounded-lg shadow-lg overflow-visible relative pt-32 md:pt-24 lg:pt-20 pb-6 px-6 w-full'>
            <div className='absolute -top-12 lg:-top-24 transform -translate-x-1/2 w-full left-[60%]'>
              <img src={cart3} alt="cart3" className='object-cover h-[250px] w-[250px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] rounded-lg' />
            </div>
            <div className='pt-16 text-center'>
              <div className='text-2xl font-medium'>Boston Fern</div>
              <div className='flex gap-1 pt-4 justify-center'>
                <Star className='h-5 fill-yellow-400 stroke-yellow-400' />
                <Star className='h-5 fill-yellow-400 stroke-yellow-400' />
                <Star className='h-5 fill-yellow-400 stroke-yellow-400' />
                <Star className='h-5 fill-yellow-400 stroke-yellow-400' />
                <Star className='h-5' />
              </div>
              <div className='flex items-center justify-between pt-4'>
                <span className='text-xl font-semibold'>$5</span>
                <ShoppingCart className='fill-white stroke-white h-8 w-8 bg-yellow-400 p-1 rounded-sm cursor-pointer hover:bg-yellow-500 transition-colors' />
              </div>
            </div>
          </div>

          {/* Fourth card */}
          <div className='bg-green-950 rounded-lg shadow-lg overflow-visible relative pt-32 md:pt-24 lg:pt-20 pb-6 px-6'>
            <div className='absolute -top-12 lg:-top-24 left-1/2 transform -translate-x-1/2'>
              <img src={cart4} alt="cart4" className='object-cover h-[250px] w-[250px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] rounded-lg' />
            </div>
            <div className='pt-16 text-center'>
              <div className='text-2xl font-medium'>Boston Fern</div>
              <div className='flex gap-1 pt-4 justify-center'>
                <Star className='h-5 fill-yellow-400 stroke-yellow-400' />
                <Star className='h-5 fill-yellow-400 stroke-yellow-400' />
                <Star className='h-5 fill-yellow-400 stroke-yellow-400' />
                <Star className='h-5 fill-yellow-400 stroke-yellow-400' />
                <Star className='h-5' />
              </div>
              <div className='flex items-center justify-between pt-4'>
                <span className='text-xl font-semibold'>$5</span>
                <ShoppingCart className='fill-white stroke-white h-8 w-8 bg-yellow-400 p-1 rounded-sm cursor-pointer hover:bg-yellow-500 transition-colors' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className='min-h-[200px] bg-white text-black'>
        {/* Social Media Links */}
        <div className="container flex items-center justify-center py-8 px-8">
          {/* Left Line */}
          <div className="flex-1 border-t border-2 border-green-600  w-[300px]"></div>

          {/* Icons */}
          <div className="flex space-x-6 px-6 text-green-900">
            <a target='_blank' href="https://www.facebook.com/areeb.hanif.3"><Facebook className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors" /></a>
            <a target='_blank' href="https://github.com/AreebHanif"><Github className="w-5 h-5 cursor-pointer hover:text-black transition-colors" /></a>
            <a target='_blank' href="https://www.instagram.com/areeb.official1/"><Instagram className="w-5 h-5 cursor-pointer hover:text-purple-400 transition-colors" /></a>
            <a target='_blank' href="https://www.linkedin.com/in/areebhanif"><Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors" /></a>
          </div>

          {/* Right Line */}
          <div className="flex-1 border-t border-2 border-green-600"></div>
        </div>
        {/* Footer Actions */}
        <div className='flex justify-evenly items-center mb-[50px] font-serif'>
          <div id="logo" className='h-[150px] w-[150px]'>
            <img src="/vite.svg" className='h-full' alt="" />
          </div>
          <div id="quick-links">
            <h1 className='text-4xl text-green-900'>Quick Links</h1>
            <ul className='flex flex-col items-start mt-5 text-green-900'>
              <li>Plants</li>
              <li>Flowers</li>
              <li>Gardens</li>
              <li>Seeds</li>
            </ul>
          </div>
          <div id="popular-services">
            <h1 className='text-4xl text-green-900'>Popular Services</h1>
            <ul className='flex flex-col items-start mt-5 text-green-900'>
              <li>Tree Planting</li>
              <li>Grass Cutting</li>
              <li>Weeds Control</li>
              <li>Project</li>
            </ul>
          </div>
          <div id="contact-us">
            <h1 className='text-4xl text-green-900'>Contact Us</h1>
            <ul className='flex flex-col items-start mt-5 text-green-900'>
              <li>0316-8070335</li>
              <li>areebhaneef3@gmail.com</li>
              <li>Gujranwala, Pakistan</li>
              <li>Seeds</li>
            </ul>
          </div>
        </div>

        <div className='block text-center text-gray-500 text-sm py-4 border-t'>
          Copyright <Copyright className='inline h-4.5' /> 2025 Areeb Hanif. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default App
