import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Bütün xanaları doldurun." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "587");
    const secure = process.env.SMTP_SECURE === "true"; // true for port 465, false for 587
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || user;

    if (!host || !user || !pass) {
      return NextResponse.json(
        { error: "SMTP konfiqurasiyası tapılmadı. .env.local faylını yoxlayın." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    // 1. Cafe Sahibi üçün bildiriş maili
    const adminMailOptions = {
      from: `"${name} (MİLLİ Café Əlaqə Formu)" <${user}>`,
      to: receiver,
      replyTo: email,
      subject: `Yeni Əlaqə Mesajı - ${name}`,
      text: `Ad Soyad: ${name}\nE-poçt: ${email}\nMesaj:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 25px; color: #2D241E; background-color: #FAF6F0; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid rgba(140, 98, 57, 0.15);">
          <h2 style="color: #8C6239; border-bottom: 2px solid rgba(140, 98, 57, 0.2); padding-bottom: 12px; margin-top: 0; font-size: 20px; font-weight: 600;">Yeni Əlaqə Mesajı</h2>
          
          <div style="margin: 20px 0; background: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid rgba(140, 98, 57, 0.1);">
            <p style="margin: 0 0 10px 0; font-size: 14px;"><strong style="color: #8C6239;">Ad Soyad:</strong> ${name}</p>
            <p style="margin: 0 0 15px 0; font-size: 14px;"><strong style="color: #8C6239;">E-poçt:</strong> <a href="mailto:${email}" style="color: #8C6239; text-decoration: underline;">${email}</a></p>
            
            <p style="margin: 0 0 8px 0; font-size: 14px; font-weight: bold; color: #8C6239;">Mesaj:</p>
            <div style="background-color: #FAF6F0; padding: 15px; border-left: 4px solid #8C6239; font-style: italic; font-size: 14px; color: #4A3E3D; border-radius: 4px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>
          
          <p style="font-size: 11px; color: #8C6239; opacity: 0.7; text-align: center; margin: 20px 0 0 0; letter-spacing: 0.1em; text-transform: uppercase;">
            MİLLİ Café Rəqəmsal Sistem
          </p>
        </div>
      `,
    };

    // 2. Müştəri üçün avtomatik peşəkar təşəkkür maili
    const customerMailOptions = {
      from: `"MİLLİ Café" <${user}>`,
      to: email,
      subject: `Mesajınız qəbul edildi - MİLLİ Café`,
      text: `Salam Sayın ${name},\n\nMİLLİ Café ilə əlaqə saxladığınız üçün təşəkkür edirik. Mesajınız uğurla qəbul edildi. Ən qısa zamanda sizinlə əlaqə saxlayacağıq.\n\nYazdığınız mesaj:\n"${message}"\n\nHörmətlə,\nMİLLİ Café`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 30px; color: #2D241E; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid rgba(140, 98, 57, 0.15); border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
          <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="color: #8C6239; font-size: 24px; font-weight: 700; margin: 0 0 5px 0;">MİLLİ Café</h1>
            <p style="color: #8C6239; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0;">Süfrəmizə Dəvətlisiniz</p>
          </div>
          
          <hr style="border: 0; border-top: 1px solid rgba(140, 98, 57, 0.15); margin: 20px 0;" />
          
          <p style="font-size: 15px; line-height: 1.6; color: #4A3E3D;">Salam <strong>${name}</strong>,</p>
          <p style="font-size: 15px; line-height: 1.6; color: #4A3E3D;">MİLLİ Café ilə əlaqə saxladığınız üçün təşəkkür edirik. Mesajınız uğurla qəbul edildi və komandamız tərəfindən nəzərdən keçirilir. Ən qısa zamanda sizinlə əlaqə saxlayacağıq.</p>
          
          <div style="margin: 25px 0; padding: 20px; background-color: #FAF6F0; border-radius: 8px; border-left: 4px solid #8C6239;">
            <p style="margin: 0 0 10px 0; color: #8C6239; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Göndərdiyiniz mesaj:</p>
            <p style="font-style: italic; color: #4A3E3D; margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">"${message}"</p>
          </div>
          
          <p style="font-size: 15px; line-height: 1.6; color: #4A3E3D; margin-bottom: 5px;">Hörmətlə,</p>
          <p style="font-size: 16px; font-weight: bold; color: #8C6239; margin-top: 0;">MİLLİ Café Komandası</p>
          
          <hr style="border: 0; border-top: 1px solid rgba(140, 98, 57, 0.15); margin: 25px 0;" />
          
          <p style="font-size: 11px; color: #8C6239; opacity: 0.6; text-align: center; line-height: 1.6; margin: 0;">
            Bu e-poçt avtomatik olaraq göndərilmişdir. Zəhmət olmasa birbaşa cavab yazmayın.<br>
            <strong>MİLLİ Café</strong> · Nizami küçəsi 78, Bakı · +994 12 345 67 89
          </p>
        </div>
      `,
    };

    // Həm Adminə həm də Müştəriyə e-poçtları paralel olaraq göndəririk
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(customerMailOptions)
    ]);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("SMTP Göndərilmə Xətası:", error);
    return NextResponse.json(
      { error: "Mesaj göndərilərkən xəta baş verdi: " + error.message },
      { status: 500 }
    );
  }
}
