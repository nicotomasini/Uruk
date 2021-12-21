import { Injectable } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Injectable({
    providedIn: 'root',
})
export class SwiperService {
    public getSwiperOptions(spaceBetween: number): SwiperOptions {
        return {
            slidesPerView: 4,
            spaceBetween,
            breakpoints: {
                1: {
                    slidesPerView: 1,
                    spaceBetween,
                },
                300: {
                    slidesPerView: 1,
                    spaceBetween,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween,
                },
                960: {
                    slidesPerView: 2,
                    spaceBetween,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween,
                },
                1920: {
                    slidesPerView: 4,
                    spaceBetween,
                },
            },
        };
    }
}
