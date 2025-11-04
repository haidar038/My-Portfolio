import { useState, FormEvent } from "react";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactWindow = () => {
    const { toast } = useToast();
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
                publicKey
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
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <Mail className="w-6 h-6 text-cyan-600" />
                    Get In Touch
                </h2>
                <p className="text-gray-600 text-sm">Have a question or want to work together? Send me a message!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2">
                        <User className="w-4 h-4 text-cyan-600" />
                        Name
                    </label>
                    <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        required
                        className="bg-white/50 border-gray-200 focus:border-cyan-400 focus:ring-cyan-400"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-cyan-600" />
                        Email
                    </label>
                    <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        required
                        className="bg-white/50 border-gray-200 focus:border-cyan-400 focus:ring-cyan-400"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-cyan-600" />
                        Message
                    </label>
                    <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Your message here..."
                        required
                        rows={5}
                        className="bg-white/50 border-gray-200 focus:border-cyan-400 focus:ring-cyan-400 resize-none"
                    />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full flex bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    {isSubmitting ? (
                        "Sending..."
                    ) : (
                        <div className="flex justify-center items-center">
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                        </div>
                    )}
                </Button>
            </form>

            <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">Make sure to configure your EmailJS credentials in the .env file</p>
            </div>
        </div>
    );
};
