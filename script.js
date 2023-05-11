function goBack() {
    window.history.back(); // 返回上一个页面
  }
  
  const image = document.querySelector('#image');
  let offsetX, offsetY;
  
  image.addEventListener('mousedown', (event) => {
    // 记录鼠标相对于图片左上角的偏移量
    offsetX = event.clientX - image.offsetLeft;
    offsetY = event.clientY - image.offsetTop;
  
    // 启动拖拽操作
    image.classList.add('dragging');
  });
  
  document.addEventListener('mousemove', (event) => {
    // 如果图片正在被拖拽，更新图片的位置
    if (image.classList.contains('dragging')) {
      // 计算图片的新位置
      const left = event.clientX - offsetX;
      const top = event.clientY - offsetY;
  
      // 将新位置应用到图片的 left 和 top 属性中
      image.style.left = left + 'px';
      image.style.top = top + 'px';
    }
  });
  
  document.addEventListener('mouseup', () => {
    // 停止拖拽操作
    image.classList.remove('dragging');
  });
  
