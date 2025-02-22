"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setAlert({ type: "success", message: "Message sent successfully!" });
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
        }); // Reset form data

        // Hide alert after 5 seconds
        setTimeout(() => setAlert(null), 5000);
      } else {
        setAlert({ type: "error", message: "Failed to send message." });
      }
    } catch (error) {
      setAlert({ type: "error", message: "An error occurred." });
    } finally {
      setLoading(false);

      // Hide error alert after 5 seconds
      if (alert && alert.type === "error") {
        setTimeout(() => setAlert(null), 5000);
      }
    }
  };

  return (
    <>
      {alert && (
        <Alert variant={alert.type}>
          <AlertTitle>
            {alert.type === "success" ? "Success!" : "Error!"}
          </AlertTitle>
          <AlertDescription>{alert.message}</AlertDescription>
        </Alert>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 p-4 sm:p-10 bg-accent/15 dark:bg-[#27272c] rounded-xl"
      >
        <h3 className="text-2xl md:text-4xl text-accent font-semibold">
          Let{"'"}s work together
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            name="firstname"
            placeholder="Firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <Input
            name="lastname"
            placeholder="Lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <Textarea
          name="message"
          className="h-[200px]"
          placeholder="Type your message here"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <Button className="max-w-40 text-sm md:text-balance text-white dark:text-primary">
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </>
  );
};

export default ContactForm;