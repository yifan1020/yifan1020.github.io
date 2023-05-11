// 获取所有图片元素
const images = document.querySelectorAll('.image-container img');

// 遍历所有图片元素，为其添加点击事件
images.forEach(image => {
  image.addEventListener('click', () => {
    image.style.transform = 'scale(10)';
  });
});

function goBack() {
    window.history.back(); // 返回上一个页面
  }
