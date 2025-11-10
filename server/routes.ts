import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'ayushsharma.chh@gmail.com',
        subject: `New Contact Form Submission from ${validatedData.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
          ${validatedData.service ? `<p><strong>Service Interest:</strong> ${validatedData.service}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${validatedData.message}</p>
        `,
        replyTo: validatedData.email,
      };

      await transporter.sendMail(mailOptions);

      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to send message" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
