import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // In a real app, you might send email notifications here
      console.log("New contact submission:", submission);
      
      res.json({ 
        success: true, 
        message: "Thank you for your interest! Our team will contact you soon.",
        submissionId: submission.id 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Please check your form data and try again." 
      });
    }
  });

  // Demo request endpoint
  app.post("/api/demo", async (req, res) => {
    try {
      const { email, company, name } = req.body;
      
      // In a real app, this would integrate with a calendar booking system
      console.log("Demo request:", { email, company, name });
      
      res.json({ 
        success: true, 
        message: "Demo scheduled! Check your email for calendar invite.",
        calendlyUrl: "https://calendly.com/admybrand/demo" // In real app, this would be dynamic
      });
    } catch (error) {
      console.error("Demo request error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Unable to schedule demo. Please try again." 
      });
    }
  });

  // Free trial signup
  app.post("/api/trial", async (req, res) => {
    try {
      const { email, firstName, lastName, company } = req.body;
      
      // In a real app, this would create a trial account
      console.log("Free trial signup:", { email, firstName, lastName, company });
      
      res.json({ 
        success: true, 
        message: "Trial account created! Check your email for login details.",
        trialUrl: "/dashboard" // In real app, this would be the actual dashboard
      });
    } catch (error) {
      console.error("Trial signup error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Unable to create trial account. Please try again." 
      });
    }
  });

  // Newsletter subscription
  app.post("/api/subscribe", async (req, res) => {
    try {
      const { email } = req.body;
      
      // In a real app, this would integrate with email service like Mailchimp
      console.log("Newsletter subscription:", { email });
      
      res.json({ 
        success: true, 
        message: "Successfully subscribed to newsletter!" 
      });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Unable to subscribe. Please try again." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
