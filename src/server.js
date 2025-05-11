import { google } from 'googleapis';

const { JWT } = google.auth;

const keyPath = 'C:/Users/user/Desktop/Portfolio/project/src/keys/service-account-key.json'; // Путь к вашему ключу

const authClient = new JWT({
  keyFile: keyPath,
  scopes: ['https://www.googleapis.com/auth/gmail.send'],
  subject: 'your-email@example.com' // Укажите email, от имени которого будет отправляться письмо
});

const gmail = google.gmail({ version: 'v1', auth: authClient });

async function sendTestEmail() {
  const email = [
    'Content-Type: text/plain; charset="UTF-8"\n',
    'MIME-Version: 1.0\n',
    'Content-Transfer-Encoding: 7bit\n',
    'to: recipient-email@example.com\n', // Адрес получателя
    'subject: Тестовое письмо\n\n',
    'Это тестовое письмо для проверки конфигурации Gmail API.\n'
  ].join('');
  
  const encodedEmail = Buffer.from(email).toString('base64').replace(/\+/g, '-').replace(/\//g, '_');

  try {
    const res = await gmail.users.messages.send({
      userId: 'me',  // Для отправки от имени авторизованного пользователя
      requestBody: {
        raw: encodedEmail
      }
    });
    console.log('Тестовое письмо успешно отправлено:', res.data);
  } catch (error) {
    console.error('Ошибка при отправке письма:', error);
  }
}

sendTestEmail();
