/* 图片懒加载 */

/* // Determine if an element is in the visible viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    //在IE中，默认坐标从(2,2)开始计算，导致最终距离比其他浏览器多出两个像素，我们需要做个兼容。
    var top = document.documentElement.clientTop; // 非IE为0，IE为2
    var left = document.documentElement.clientLeft;

    return (
        rect.top - top >= 0 &&
        rect.left - left >= 0 &&
        rect.bottom - top <= (window.innerHeight || html.clientHeight) &&
        rect.right - left <= (window.innerWidth || html.clientWidth)
    );
} */

import baseImg from "@/assets/images/site.jpg";

// https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver
// 创建一个监听器
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry.isIntersecting)
        if (entry.isIntersecting) {
            // 当被监听元素达到临界值且未加载图片时触发

            !entry.target.isLoaded && showImag(entry.target, entry.target.data_src)
        }
    })
})

function showImag(el, imgSrc) {
    const img = new Image()
    img.src = imgSrc
    img.onload = () => {
        el.src = imgSrc
        el.isLoaded = true
    }
}

export default {
    // 这里用inserted和bind都行，因为IntersectionObserver时异步的，以防意外还是用inserted好一点
    // inserted和bind的区别在于inserted时元素已经插入页面，能够直接获取到dom元素的位置信息。

    inserted(el, binding) {
        // 初始化时显示默认图片
        el.src = baseImg

        // 将需要绑定的图片绑定到dom上
        el.data_src = binding.value
        // 开始监听目标元素
        observer.observe(el)
    },

    unbind() {
        // 停止监听工作
        observer.disconnect()
    }
}