document.addEventListener('DOMContentLoaded', () => {
    // Cấu hình
    const snowCount = 100; // Số lượng bông tuyết
    const messageText = "Giáng sinh này, anh không cần quà... vì anh đã có món quà tuyệt vời nhất là em rồi. Chúc em một mùa giáng sinh ấm áp và hạnh phúc! Yêu em ❤️"; // Nội dung tỏ tình
    const typingSpeed = 50; // Tốc độ gõ chữ (ms)

    // Tạo tuyết rơi
    const createSnow = () => {
        const container = document.querySelector('.snow-container');
        for (let i = 0; i < snowCount; i++) {
            const snow = document.createElement('div');
            snow.className = 'snowflake';
            snow.innerHTML = '❄';
            
            // Random vị trí và kích thước
            snow.style.left = Math.random() * 100 + 'vw';
            snow.style.fontSize = (Math.random() * 10 + 10) + 'px';
            snow.style.opacity = Math.random();
            
            // Random thời gian rơi
            const duration = Math.random() * 5 + 5;
            snow.style.animationDuration = duration + 's';
            snow.style.animationDelay = Math.random() * 5 + 's';
            
            container.appendChild(snow);
        }
    };

    // Hiệu ứng gõ chữ
    const typeWriter = (text, elementId, speed) => {
        let i = 0;
        const element = document.getElementById(elementId);
        element.innerHTML = "";
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    };

    // Xử lý sự kiện click hộp quà
    const giftBox = document.getElementById('giftBox');
    const card = document.getElementById('card');
    const bgMusic = document.getElementById('bgMusic');
    const playBtn = document.getElementById('playMusic');

    // Xử lý âm nhạc
    let isPlaying = false;
    
    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            playBtn.textContent = "🎵 Bật nhạc";
        } else {
            bgMusic.play().catch(e => alert("Hãy tương tác với trang web để phát nhạc!"));
            playBtn.textContent = "⏸️ Dừng nhạc";
        }
        isPlaying = !isPlaying;
    });

    giftBox.addEventListener('click', () => {
        // Ẩn hộp quà
        giftBox.style.transform = "scale(0) rotate(720deg)";
        giftBox.style.opacity = "0";
        
        setTimeout(() => {
            giftBox.style.display = 'none';
            
            // Hiện thiệp
            card.classList.remove('hidden');
            
            // Bắt đầu gõ chữ
            typeWriter(messageText, 'message', typingSpeed);
            
            // Tự động bật nhạc nếu chưa bật
            if (!isPlaying) {
                bgMusic.play().catch(() => {});
                playBtn.textContent = "⏸️ Dừng nhạc";
                isPlaying = true;
            }
        }, 500);
    });

    // Khởi tạo
    createSnow();
});