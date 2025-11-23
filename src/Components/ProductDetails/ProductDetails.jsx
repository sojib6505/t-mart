import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductDetails() {
    const product = useLoaderData();
    const { title, description, price, images } = product;

    return (
        <div className="container mx-auto p-5 md:flex gap-10 mt-25">
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
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-40 mt-5">
                    Add to Cart
                </button>
            </div>

        </div>
    );
}
