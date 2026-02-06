import { useState, FormEvent } from "react";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";

export const ContactWindow = () => {
    const { toast } = useToast();
    const { isDarkMode } = useTheme();
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Get credentials from environment variables
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            toast({
                title: "Configuration Error",
                description: "Email service is not properly configured. Please check your environment variables.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                publicKey,
            );

            toast({
                title: "Message Sent!",
                description: "Thank you for your message. I'll get back to you soon!",
            });

            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS error:", error);
            toast({
                title: "Error",
                description: "Failed to send message. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="space-y-6 p-4 md:p-6">
            <div>
                <h2
                    className="text-2xl font-bold mb-2 flex items-center gap-2 transition-colors duration-300"
                    style={{
                        color: isDarkMode ? "#f8fafc" : "#1f2937",
                    }}
                >
                    <Mail
                        className="w-6 h-6"
                        style={{
                            color: isDarkMode ? "#22d3ee" : "#0891b2",
                        }}
                    />
                    {t("contact.title")}
                </h2>
                <p
                    className="text-sm transition-colors duration-300"
                    style={{
                        color: isDarkMode ? "#cbd5e1" : "#4b5563",
                    }}
                >
                    {t("contact.description")}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label
                        className="text-sm font-medium mb-1.5 flex items-center gap-2 transition-colors duration-300"
                        style={{
                            color: isDarkMode ? "#e2e8f0" : "#374151",
                        }}
                    >
                        <User
                            className="w-4 h-4"
                            style={{
                                color: isDarkMode ? "#22d3ee" : "#0891b2",
                            }}
                        />
                        {t("contact.nameLabel")}
                    </label>
                    <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t("contact.namePlaceholder")}
                        required
                        className="transition-all duration-300"
                        style={{
                            background: isDarkMode ? "rgba(51, 65, 85, 0.5)" : "rgba(255, 255, 255, 0.5)",
                            borderColor: isDarkMode ? "rgba(148, 163, 184, 0.3)" : "rgb(229, 231, 235)",
                            color: isDarkMode ? "#f8fafc" : "#1f2937",
                        }}
                    />
                </div>

                <div>
                    <label
                        className="text-sm font-medium mb-1.5 flex items-center gap-2 transition-colors duration-300"
                        style={{
                            color: isDarkMode ? "#e2e8f0" : "#374151",
                        }}
                    >
                        <Mail
                            className="w-4 h-4"
                            style={{
                                color: isDarkMode ? "#22d3ee" : "#0891b2",
                            }}
                        />
                        {t("contact.emailLabel")}
                    </label>
                    <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t("contact.emailPlaceholder")}
                        required
                        className="transition-all duration-300"
                        style={{
                            background: isDarkMode ? "rgba(51, 65, 85, 0.5)" : "rgba(255, 255, 255, 0.5)",
                            borderColor: isDarkMode ? "rgba(148, 163, 184, 0.3)" : "rgb(229, 231, 235)",
                            color: isDarkMode ? "#f8fafc" : "#1f2937",
                        }}
                    />
                </div>

                <div>
                    <label
                        className="text-sm font-medium mb-1.5 flex items-center gap-2 transition-colors duration-300"
                        style={{
                            color: isDarkMode ? "#e2e8f0" : "#374151",
                        }}
                    >
                        <MessageSquare
                            className="w-4 h-4"
                            style={{
                                color: isDarkMode ? "#22d3ee" : "#0891b2",
                            }}
                        />
                        {t("contact.messageLabel")}
                    </label>
                    <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t("contact.messagePlaceholder")}
                        required
                        rows={5}
                        className="resize-none transition-all duration-300"
                        style={{
                            background: isDarkMode ? "rgba(51, 65, 85, 0.5)" : "rgba(255, 255, 255, 0.5)",
                            borderColor: isDarkMode ? "rgba(148, 163, 184, 0.3)" : "rgb(229, 231, 235)",
                            color: isDarkMode ? "#f8fafc" : "#1f2937",
                        }}
                    />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full flex bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    {isSubmitting ? (
                        t("contact.sendingButton")
                    ) : (
                        <div className="flex justify-center items-center">
                            <Send className="w-4 h-4 mr-2" />
                            {t("contact.sendButton")}
                        </div>
                    )}
                </Button>
            </form>
        </div>
    );
};
