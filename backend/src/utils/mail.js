import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async(option) => {
    try {
        var mailGenerator = new Mailgen({
            theme: 'default',
            product: {
                name: 'Mtix Conversion App',
                link: 'https://mailgen.js/'
            }
        });

        const emailBody = mailGenerator.generate(option.mailGenContent);
        const emailText = mailGenerator.generatePlaintext(option.mailGenContent);

        const transporter = nodemailer.createTransport({
            host: MAILTRAP_SMPT_HOST,
            port: MAILTRAP_SMPT_PORT,
            secure: false, // true for port 465, false for other ports
            auth: {
              user: MAILTRAP_SMPT_USER, // generated ethereal user
              pass: MAILTRAP_SMPT_PASS, // generated ethereal password
            },
          });

        const mail = {
            from: 'itx.tanxeem@gmail.com', // sender address
        to: option.email, // list of receivers
        subject: option.subject, // Subject line
        text: emailText, // plain text body
        html: emailBody, // html body
      };  

      await transporter.sendMail(mail)

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


const emailVerificationMailGenContent = (username, verificationUrl) => {
    return {
        body: {
            name: username,
            intro: 'Welcome to Task Manager! We\'re very excited to have you on board.',
            action: {
                instructions: 'To get started with Task Manager, please click here:',
                button: {
                    color: '#22BC66', // Optional action button color
                    text: 'Verify your email',
                    link: verificationUrl
                }
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    };
}

const forgotPasswordMailGenContent = (username, passwordResetUrl) => {
    return {
        body: {
            name: username,
            intro: 'We got a request to reset your password',
            action: {
                instructions: 'To change your password click the button',
                button: {
                    color: '#22BC66', // Optional action button color
                    text: 'Reset Password',
                    link: passwordResetUrl
                }
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    };
}

export { sendEmail, emailVerificationMailGenContent, forgotPasswordMailGenContent };