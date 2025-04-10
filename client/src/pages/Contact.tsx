import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { RainbowButton } from "@/components/ui/rainbow-button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaInstagram, 
  FaFacebook, 
  FaTwitter 
} from "react-icons/fa";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(20, {
    message: "Message must be at least 20 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
              Have questions, suggestions, or want to learn more about Rainbow Rise?
              We'd love to hear from you.
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="What is this regarding?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              className="min-h-32"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div>
                      <RainbowButton type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </RainbowButton>
                    </div>
                  </form>
                </Form>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                        <FaMapMarkerAlt className="text-primary text-xl" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Location</h3>
                        <p className="text-gray-600">Austin, TX</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                        <FaEnvelope className="text-primary text-xl" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Email</h3>
                        <p className="text-gray-600">hello@rainbowrise.org</p>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="font-bold mb-4">Follow Us</h3>
                      <div className="flex space-x-4">
                        <a 
                          href="#" 
                          className="bg-gray-200 p-3 rounded-full hover:bg-primary hover:text-white transition"
                          aria-label="Instagram"
                        >
                          <FaInstagram className="text-xl" />
                        </a>
                        <a 
                          href="#" 
                          className="bg-gray-200 p-3 rounded-full hover:bg-primary hover:text-white transition"
                          aria-label="Facebook"
                        >
                          <FaFacebook className="text-xl" />
                        </a>
                        <a 
                          href="#" 
                          className="bg-gray-200 p-3 rounded-full hover:bg-primary hover:text-white transition"
                          aria-label="Twitter"
                        >
                          <FaTwitter className="text-xl" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8" id="support">
                  <h2 className="text-2xl font-bold mb-6">Support</h2>
                  <div className="bg-gray-50 p-8 rounded-xl">
                    <h3 className="font-bold mb-2">Need Help With Your Campaign?</h3>
                    <p className="text-gray-600 mb-6">
                      Our team is here to help you with any questions or issues related to 
                      creating or managing your campaign.
                    </p>
                    <p className="text-gray-600">
                      For technical support, please email: 
                      <span className="text-primary font-medium"> support@rainbowrise.org</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
