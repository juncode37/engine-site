document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();


    const BOT_TOKEN = '8516702380:AAGTDaLPbmySP6_fLASfqaXlVI4ftEYu_RU';
    const CHAT_ID = '-5243027695';

    const formData = new FormData(this);


    const brand = formData.get('brand');
    const model = formData.get('model');
    const part = formData.get('part');
    const marking = formData.get('marking');
    const name = formData.get('username');
    const phone = '+7' + formData.get('phone');
    const email = formData.get('email');


    const message = `
🆕 *Новая заявка*

🚗 *Марка:* ${brand}
📌 *Модель:* ${model}
⚙️ *Запчасть:* ${part}
🔢 *Маркировка:* ${marking}

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
📧 *Email:* ${email}
  `;

    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        });

        if (!response.ok) {
            throw new Error('Ошибка отправки в Telegram');
        }

        alert('Заявка отправлена!');
        this.reset();

    } catch (error) {
        console.error(error);
        alert('Ошибка отправки. Проверь консоль.');
    }
});