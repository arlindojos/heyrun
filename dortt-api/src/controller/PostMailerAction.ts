import {Request, Response} from "express";
import * as nodemailer from 'nodemailer';


export async function postMailerAction(request: Request, response: Response) {

    const { name, phone, emailUsr, message, subject } = request.body;

    async function main() {

    let transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 587,
        secure: false, 
        auth: {
        user: "c8109e35343838",
        pass: "bc4cfddd1526d6"
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let info = await transporter.sendMail({
        from: '"Dortt" <arlindojosboa@gmail.com>', 
        to: "arlindojosboa@gmail.com",
        subject: subject,
        text: `Nome: ${name} Email: ${emailUsr} Telefone: ${phone} Mensagem: ${message}`, 
        html: `<b>Nome: ${name} <br/> Email: ${emailUsr} <br/> Telefone: ${phone} <br/> Mensagem: ${message}</b>`, 
    });
    response.send('Email send successfully')
    }

main().catch(console.error);
    
}