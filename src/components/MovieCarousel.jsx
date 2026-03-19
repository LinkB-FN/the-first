import { Swiper, SwiperSlide } from "swiper/react";
// módulo de navegación para habilitar flechas en el carrusel
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import MovieCard from "./MovieCard";

function MovieCarousel({ movies }) {
    return (
        <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 }
            }}
            style={{
                padding: '20px 50px',
                '--swiper-navigation-color': '#007bff',
                '--swiper-navigation-size': '25px'
            }}
        >
            {movies.map(movie => (
                <SwiperSlide key={movie.id} style={{ display: 'flex', justifyContent: 'center', height: 'auto' }}>
                    <MovieCard
                        id={movie.id}
                        title={movie.titulo}
                        image={movie.imagen}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default MovieCarousel;
