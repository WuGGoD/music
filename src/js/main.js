import '../scss/style.scss'
import {
    $,
    $all
} from "./utils"
import Swiper from 'swiper';
import 'swiper/css';
window.onload = () => {
    new Swiper('.swiper', {
        // direction: 'horizontal', // 垂直切换选项
        // loop: true, // 循环模式选项
        autoplay: true,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // // 如果需要前进后退按钮
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // // 如果需要滚动条
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })
}