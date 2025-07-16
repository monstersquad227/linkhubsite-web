function openModal() {
    document.getElementById('modal').classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    document.getElementById('longUrlInput').value = '';
    const result = document.getElementById('result');
    result.style.display = 'none';
    result.textContent = '';
}

async function generateShortLink() {
    const input = document.getElementById('longUrlInput');
    const errorMessage = document.getElementById('errorMessage');
    const result = document.getElementById('result');
    const longUrl = input.value.trim();

    // 重置错误状态
    input.classList.remove('input-error');
    errorMessage.classList.add('hidden');
    result.style.display = 'none';

    // 验证链接格式
    const urlPattern = /^https?:\/\/.+$/;
    if (!longUrl || !urlPattern.test(longUrl)) {
        input.classList.add('input-error');
        errorMessage.textContent = '请输入以 http:// 或 https:// 开头的有效链接';
        errorMessage.classList.remove('hidden');
        return;
    }

    try {
        // 🔧 替换为你自己的后端 API 地址
        // const response = await fetch("https://api.example.com/shorten", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ long_url: longUrl }),
        // });

        // if (!response.ok) throw new Error("生成失败");

        // const data = await response.json();
        // const shortUrl = data.short_url || data.url || "生成成功，但未返回短链接";

        // const result = document.getElementById('result');
        // result.textContent = "短链接：" + shortUrl;
        // result.classList.remove('hidden');
        // 模拟生成短链接
        const shortUrl = 'https://short.ly/' + Math.random().toString(36).slice(2, 8);
        result.textContent = `生成的短链接：${shortUrl}`;
        result.style.display = 'block';
    } catch (err) {
        alert("请求失败：" + err.message);
    }
}
