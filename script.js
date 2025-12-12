function sendEmail(email) {
    return new Promise((res, rej) => {
        const time = Math.floor(Math.random() * 10)
        setTimeout(() => {
            const probability = Math.floor(Math.random() * 10);
            if (probability <= 5) {
                res(`Email has been sent to ${email}`)
            } else rej(`Failed to sent the email to ${email}`);
        }, time * 1000)
    })
}

const emailsArr = [
    'yash@yash.yash',
    'ankur@gmail.com',
    'vishwesh@gmail.com'
]

async function sendEmails(emails) {
    let newArr = emails.map((email) => {
        return sendEmail(email).then((data) => data).catch(err => err);
    })

    let result = await Promise.all(newArr);
    console.log(result)
}

sendEmails(emailsArr)


