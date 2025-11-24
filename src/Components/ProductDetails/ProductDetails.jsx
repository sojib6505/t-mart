import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {addToCart} from '../utilities/localStorage'
import Swal from 'sweetalert2';
export default function ProductDetails() {
    const product = useLoaderData();
    const { title, description, price, images } = product;
    const handleAddToCart = () => {
        addToCart(product);
       Swal.fire({
            title: 'Added to Cart!',
            text: `${title} has been added to your cart.`,
            icon: 'success',
            confirmButtonText: 'OK',
            timer: 2000,        // auto close after 2 sec
            timerProgressBar: true,
        });
    }
    return (
        <div className="container mx-auto p-5 md:flex gap-10 mt-12 md:mt-25">
            <div className="md:w-1/2">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={10}
                    slidesPerView={1}
                >
                    {images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <img src={img} alt={title} className="w-full h-96 object-cover rounded-lg shadow-lg" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="md:w-1/2 flex flex-col justify-start gap-4">
                <h2 className="text-3xl font-bold">{title}</h2>
                <p className="text-xl font-semibold text-green-600">${price}</p>
                <p className="text-gray-700">{description}</p>
                <button onClick={handleAddToCart} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-40 mt-5 cursor-pointer">
                    Add to Cart
                </button>
            </div>

        </div>
    );
}
